import { Link, useParams } from 'react-router';
import recipes from '../data/recipes.json';
export default function RecipeDetails() {
 const { id } = useParams();
 const recipe = recipes.find(item => item.id === id);
 if (!recipe) return <section className="section container"><h1>Recipe not found</h1><p>We couldn't find that dish.</p><Link className="btn btn-primary" to="/recipes">Back to recipes</Link></section>;
 return <section className="section container details"><Link className="text-link" to="/recipes">← All recipes</Link><div className="details-grid"><div><span className="eyebrow">{recipe.category} · {recipe.time}</span><h1>{recipe.name}</h1><p className="lead">{recipe.tagline}</p><div className="detail-art" aria-hidden="true">{recipe.emoji}</div></div><div className="detail-content"><h2>Ingredients</h2><ul>{recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul><h2>Directions</h2><ol>{recipe.steps.map((step,index) => <li key={`${index}-${step}`}>{step}</li>)}</ol></div></div></section>;
}
