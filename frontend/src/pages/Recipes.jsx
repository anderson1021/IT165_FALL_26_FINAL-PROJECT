import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import RecipeCard from '../components/RecipeCard.jsx';
export default function Recipes() {
 const [recipes, setRecipes] = useState([]);
 const [query, setQuery] = useState('');
 const [loading, setLoading] = useState(true);
 useEffect(() => {
   let active = true;
   import('../data/recipes.json').then(module => { if (active) { setRecipes(module.default); setLoading(false); } }).catch(() => { if (active) setLoading(false); });
   return () => { active = false; };
 }, []);
 const shown = recipes.filter(recipe => `${recipe.name} ${recipe.category} ${recipe.ingredients.join(' ')}`.toLowerCase().includes(query.toLowerCase()));
 return <section className="section container"><div className="page-title"><span className="eyebrow">RECIPE COLLECTION</span><h1>What's cooking?</h1><p>Find something delicious for your table.</p></div><SearchBar value={query} onChange={setQuery} />{loading ? <p role="status">Loading recipes...</p> : shown.length ? <div className="recipe-grid">{shown.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}</div> : <p role="status">No recipes found. Try another search.</p>}</section>;
}
