import { Link } from 'react-router';
import Card from './Card.jsx';
export default function RecipeCard({ recipe }) {
  return <Card className="recipe-card"><div className="recipe-art" aria-hidden="true"><span>{recipe.emoji}</span></div><div className="recipe-body"><span className="eyebrow">{recipe.category} · {recipe.time}</span><h3>{recipe.name}</h3><p>{recipe.tagline}</p><Link className="text-link" to={`/recipes/${recipe.id}`}>View recipe →</Link></div></Card>;
}
