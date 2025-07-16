import { Link } from "react-router-dom";
import "./recipeItem.css";

const RecipeItem = ({ item }) => {
  return (
    <div className="recipe-card">
      <img src={item?.image_url} alt={item?.title} className="recipe-image" />
      <div className="recipe-content">
        <span className="recipe-publisher">{item?.publisher}</span>
        <h3 className="recipe-title">{item?.title}</h3>
        <Link to={`/recipe-item/${item?.id}`} className="recipe-link">
          View Recipe →
        </Link>
      </div>
    </div>
  );
};
export default RecipeItem;
