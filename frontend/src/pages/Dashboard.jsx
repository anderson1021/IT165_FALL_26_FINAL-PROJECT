import { Link } from 'react-router';
export default function Dashboard() {
 const demoLoggedIn = sessionStorage.getItem('dk-demo-login') === 'true';
 return <section className="section container"><div className="page-title"><span className="eyebrow">YOUR KITCHEN</span><h1>{demoLoggedIn ? 'Welcome, demo chef!' : 'Your recipe dashboard'}</h1><p>{demoLoggedIn ? 'You signed in with the mock account. Real accounts will arrive in a later milestone.' : 'This is a front-end preview. Log in with the demo credentials to see the mock welcome message.'}</p></div><div className="dashboard-panel"><span className="dashboard-emoji">👩‍🍳</span><h2>Ready to find your next favorite?</h2><p>Browse our recipe collection while saved recipes and personal accounts are being developed.</p><Link className="btn btn-primary" to="/recipes">Browse recipes</Link>{!demoLoggedIn && <Link className="btn btn-outline" to="/login">Demo login</Link>}</div></section>;
}
