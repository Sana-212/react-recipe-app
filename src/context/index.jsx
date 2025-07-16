import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState();
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes("mango");
  }, []);

  const fetchRecipes = async (query) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
      }
    } catch (error) {
      console.log("Error fetching recipes: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchRecipes(searchParam);
    setSearchParam("");
    navigate("/");
  };

  const handleAddToFavorite = (currentRecipeItem) => {
    console.log(currentRecipeItem);
    let copyFavoriteList = [...favoriteList];
    const index = copyFavoriteList.findIndex(
      (item) => item.id === currentRecipeItem.id
    );

    if (index === -1) {
      copyFavoriteList.push(currentRecipeItem);
    } else {
      copyFavoriteList.splice(index, 1);
    }
    setFavoriteList(copyFavoriteList);

    console.log(favoriteList);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        isLoading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        handleAddToFavorite,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
