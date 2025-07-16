import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import "./recipeDetails.css"

const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleAddToFavorite, favoriteList } =
    useContext(GlobalContext);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      // console.log(data);

      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    };
    getRecipeDetails();
  }, [id,setRecipeDetails]);
  // console.log(recipeDetails);
 return (
    <div className="details-wrapper">
      <div className="top-section">
        <img src={recipeDetails?.recipe?.image_url} alt={recipeDetails?.recipe?.title} className="recipeDetails-image" />

        <div className="recipeDetails-info">
          <h2 className="recipeDetails-title">{recipeDetails?.recipe?.title}</h2>
          <p className="recipeDetails-publisher">By {recipeDetails?.recipe?.publisher}</p>
          <button
            className="favorite-btn"
            onClick={() => handleAddToFavorite(recipeDetails?.recipe)}
          >
            {favoriteList?.some((item) => item.id === recipeDetails?.recipe.id)
              ? "★ Remove from Favorites"
              : "☆ Add to Favorites"}
          </button>
        </div>
      </div>

      <div className="ingredients-section">
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {recipeDetails?.recipe?.ingredients?.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantity ?? ""} {ingredient.unit ??" "}
              <strong>{ingredient.description}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
