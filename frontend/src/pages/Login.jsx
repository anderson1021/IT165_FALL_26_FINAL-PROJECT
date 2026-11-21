import { useState } from 'react';
import { useNavigate } from 'react-router';
const DEMO_EMAIL = 'chef@dyckmankitchen.com';
const DEMO_PASSWORD = 'Kitchen123!';
export default function Login() {
 const navigate = useNavigate();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [errors, setErrors] = useState({});
 function submit(e) {
  e.preventDefault();
  const nextErrors = {};
  if (!email.trim()) nextErrors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) nextErrors.email = 'Enter a valid email address.';
  if (!password) nextErrors.password = 'Password is required.';
  else if (password.length < 8) nextErrors.password = 'Password must be at least 8 characters.';
  if (!Object.keys(nextErrors).length && (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD)) nextErrors.form = 'Incorrect demo credentials. Try the test email and password below.';
  setErrors(nextErrors);
  if (!Object.keys(nextErrors).length) { sessionStorage.setItem('dk-demo-login','true'); navigate('/dashboard'); }
 }
 return <section className="section login-page"><div className="login-card"><span className="eyebrow">WELCOME BACK</span><h1>Log in to the kitchen</h1><p>Use the demo account to explore the next chapter of Dyckman Kitchen.</p><form onSubmit={submit} noValidate><label htmlFor="email">Email address</label><input id="email" type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} placeholder="you@example.com" />{errors.email && <p className="error" id="email-error">{errors.email}</p>}<label htmlFor="password">Password</label><input id="password" type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? 'password-error' : undefined} placeholder="Enter password" />{errors.password && <p className="error" id="password-error">{errors.password}</p>}{errors.form && <p className="error" role="alert">{errors.form}</p>}<button className="btn btn-primary btn-full" type="submit">Log in →</button></form><div className="demo-info"><strong>Demo credentials (not a real account)</strong><span>Email: {DEMO_EMAIL}</span><span>Password: {DEMO_PASSWORD}</span></div></div></section>;
}
