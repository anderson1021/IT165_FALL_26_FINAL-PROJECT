import { NavLink, Link } from 'react-router';
export default function Navbar() {
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="brand" to="/" aria-label="Dyckman Kitchen home"><span className="brand-icon">✳</span> DYCKMAN <strong>KITCHEN</strong></Link>
    <nav aria-label="Main navigation"><NavLink to="/" end>Home</NavLink><NavLink to="/recipes">Recipes</NavLink><NavLink to="/dashboard">Dashboard</NavLink><NavLink className="nav-login" to="/login">Log in</NavLink></nav>
  </div></header>;
}
