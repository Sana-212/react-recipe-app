import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="home-container">
      {favoriteList && favoriteList.length > 0 ? (
        <div className="recipe-grid">
          {favoriteList.map((item) => (
            <RecipeItem item={item} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>Nothing is added in favorites</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
