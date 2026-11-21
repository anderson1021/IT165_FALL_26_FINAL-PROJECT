import { Link } from 'react-router';
import FeatureCard from '../components/FeatureCard.jsx';
import RecipeCard from '../components/RecipeCard.jsx';
import recipes from '../data/recipes.json';
const features = [
  {icon:'🥘', title:'Home-cooked favorites', description:'From Dominican classics to everyday comfort meals.'},
  {icon:'📖', title:'Easy instructions', description:'Ingredient lists and steps that make cooking approachable.'},
  {icon:'✨', title:'Your cooking space', description:'Explore flavors and collect inspiration for your next meal.'}
];
export default function Landing() {
 return <>
  <section className="hero"><div className="container hero-grid"><div><div className="pill">FRESH IDEAS. REAL FLAVOR.</div><h1>Good food.<br /><em>Great stories.</em></h1><p>Welcome to Dyckman Kitchen—your home for flavorful recipes inspired by Dominican roots, family cooking, and creative everyday meals.</p><div className="button-row"><Link className="btn btn-primary" to="/recipes">Explore recipes →</Link><Link className="btn btn-outline" to="/login">Get started</Link></div></div><div className="hero-visual" role="img" aria-label="Illustrated food platter"><span>🍲</span><div className="hero-sticker">Made with<br /><strong>LOVE & SPICE</strong></div></div></div></section>
  <section className="section container"><div className="section-intro"><span className="eyebrow">WHAT YOU'LL FIND</span><h2>Cook something memorable</h2></div><div className="feature-grid">{features.map(f => <FeatureCard key={f.title} {...f} />)}</div></section>
  <section className="section section-warm"><div className="container"><div className="section-heading"><div><span className="eyebrow">FROM THE KITCHEN</span><h2>Featured recipes</h2></div><Link className="text-link" to="/recipes">See all recipes →</Link></div><div className="recipe-grid">{recipes.slice(0,3).map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}</div></div></section>
 </>;
}
