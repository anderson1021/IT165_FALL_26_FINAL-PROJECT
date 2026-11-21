# Dyckman Kitchen — React Front End

Dyckman Kitchen is a responsive recipe-discovery website inspired by Dominican home cooking and flavorful everyday meals. This React frontend lets users explore recipe cards, filter recipes by name or ingredient, view detailed recipes, and try a mock login. The pages, shared layout, and reusable components are ready for a future MERN backend with Express and MongoDB. All current recipe data is sample JSON, and the login is strictly a classroom demonstration—not real authentication.

## Tech stack
- React function components, props, children, `useState`, `useEffect`
- React Router **v7** (`react-router`): nested routes, `Outlet`, `NavLink`, `useParams`, `useNavigate`
- Vite and responsive plain CSS

## Setup
1. Install Node.js compatible with Vite 7 (Node.js 20.19+ or 22.12+).
2. Open this folder in VS Code and open **Terminal → New Terminal**.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Production build
Run `npm run build`. The generated `dist/` folder is ignored by Git.

## Demo login (fake classroom account only)
- **Email:** `chef@dyckmankitchen.com`
- **Password:** `Kitchen123!`

Login requires a valid email, nonempty inputs, and at least eight password characters. The mock credentials are intentionally visible in the source and UI. **Do not use real passwords or treat sessionStorage as secure authentication.** A successful demo login redirects to `/dashboard`.

## Routes
| Route | What it shows |
| --- | --- |
| `/` | Landing page, site description, call to action, features, and featured recipes |
| `/login` | Controlled login form, validation errors, mock credential check |
| `/recipes` | Searchable, responsive recipe collection loaded with `useEffect` |
| `/recipes/:id` | Dynamic recipe details using `useParams` |
| `/dashboard` | Demo dashboard with mock login feedback |
| `*` | Catch-all 404 error page |

## Key components
- `Layout` wraps pages and renders `Navbar`, `Footer`, and `Outlet`.
- `Card` uses `children` to compose cards.
- `RecipeCard` and `FeatureCard` receive **props**.
- `SearchBar` is a controlled search component.
- Recipe and feature lists use `.map()` with stable keys.
- `Recipes` uses `useEffect` to load JSON sample data and `useState` for search, recipes, and loading.
- `Login` uses `useState` for form fields and errors plus `useNavigate` after a successful mock check.

## Git and submission
- Do **not** push `node_modules/`, `dist/`, or real `.env` secrets. `.gitignore` handles these.
- Keep this under your class final-project repository's `frontend/` directory if required by your instructor. If a `frontend/` already exists, merge files carefully rather than deleting prior work.
- Make genuine commits as you complete work; the assignment's `[N]` commit target must be confirmed with the instructor. Do not create artificial backdated commits.
- Submit the public GitHub repo link and verify it while signed out or in an incognito window.

## Future improvements
Connect recipes to Express API endpoints, store recipe documents in MongoDB, and replace the mock login with real server-side authentication.
