import { Link } from 'react-router';
export default function NotFound() {
 return <section className="section container not-found"><div className="big-404">404</div><h1>Oops, that page isn't on the menu.</h1><p>Let's get you back to something good.</p><Link className="btn btn-primary" to="/">Back home</Link></section>;
}
