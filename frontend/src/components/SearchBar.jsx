export default function SearchBar({ value, onChange }) {
  return <label className="search-wrap"><span className="sr-only">Search recipes</span><span aria-hidden="true">⌕</span><input value={value} onChange={e => onChange(e.target.value)} placeholder="Search by recipe or ingredient..." type="search" /></label>;
}
