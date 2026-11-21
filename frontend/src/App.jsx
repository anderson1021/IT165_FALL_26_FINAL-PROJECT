import { Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';
import Landing from './pages/Landing.jsx';
import Recipes from './pages/Recipes.jsx';
import RecipeDetails from './pages/RecipeDetails.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="recipes/:id" element={<RecipeDetails />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>;
}
