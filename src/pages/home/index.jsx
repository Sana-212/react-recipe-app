import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
import './home.css'

const Home = () => {
  const { isLoading, recipeList } = useContext(GlobalContext);

  if (isLoading) {
    return <div className="loading">Loading...Please wait</div>;
  }

  return (
    <div className="home-container">
      {recipeList && recipeList.length > 0 ? (
        <div className="recipe-grid">
          {recipeList.map((item) => (
            <RecipeItem item={item} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No Results.. Please search something</p>
        </div>
      )}
    </div>
  );
};

export default Home;
