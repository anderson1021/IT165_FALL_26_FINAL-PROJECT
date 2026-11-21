import Card from './Card.jsx';
export default function FeatureCard({ icon, title, description }) {
  return <Card className="feature-card"><div className="feature-icon" aria-hidden="true">{icon}</div><h3>{title}</h3><p>{description}</p></Card>;
}
