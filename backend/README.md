# Dyckman Kitchen

**Author:** Anderson Benitez Ortiz  
**Course:** IT165 — Final Project  
**Required repository:** `it165_fall_26_final_project`

## Selected final project

I am creating **Dyckman Kitchen**, a recipe discovery and personal cookbook application. I chose this project because I enjoy cooking and sharing food with others. Users can search for recipes, read cooking instructions, and save their favorite meals in a MongoDB database.

The final application uses the **MERN stack**: MongoDB, Express, React, and Node.js. It integrates TheMealDB's free REST API for recipe search. TheMealDB permits its developer key `1` for development and educational use; review its terms before a public release. The external API is public, but this project does not claim that TheMealDB's database is open-source licensed.

## This week's setup

- React frontend created with Vite.
- Express backend with JSON API endpoints and error handling.
- Frontend calls `GET /api/health` and displays the backend response.
- Vite proxies frontend `/api` calls to the Express server.
- Recipe searches travel through Express to TheMealDB.
- MongoDB connection setup and Favorite schema provided.
- GET and POST favorites endpoints provided, with validation and duplicate handling.

**Setup status:** Code is prepared. MongoDB persistence requires a running MongoDB instance and configuration. GitHub publication is a separate step; this README does not claim that the repository has been uploaded.

## Requirements

- Node.js 22.12+ (or a newer supported release) and npm.
- MongoDB Community locally, or a MongoDB Atlas connection string.
- Internet access for recipe searches and dependency installation.

## Run locally

Open a terminal in this project's root folder:

```bash
npm install
```

Create `backend/.env` by copying `backend/.env.example`:

Windows PowerShell:

```powershell
Copy-Item backend/.env.example backend/.env
```

macOS/Linux:

```bash
cp backend/.env.example backend/.env
```

The example uses `mongodb://127.0.0.1:27017/dyckman_kitchen`. Start your local MongoDB service, or replace `MONGODB_URI` in `backend/.env` with your Atlas connection string. For Atlas, configure a database user and allow your computer's IP address. Never commit your password or `.env` file.

Then run both applications:

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend health: http://localhost:5000/api/health
- Project details: http://localhost:5000/api/project

Without MongoDB, backend health and recipe search still work. The interface reports the database as disconnected, and favorites endpoints return HTTP 503. No favorites are silently stored in temporary memory. If MongoDB was unavailable at startup, fix the connection and restart the backend.

## Demonstrate frontend → backend access

1. Open http://localhost:5173.
2. Confirm the page says **Backend connected** and shows `GET /api/health → ok`.
3. Open browser Developer Tools → Network and reload. Inspect the `/api/health` JSON response.
4. Search for `chicken` to exercise React → Express → TheMealDB.
5. With MongoDB connected, save a favorite, select **My cookbook**, and reload to verify persistence.

The frontend does not contact TheMealDB directly. Vite forwards `/api` requests to port 5000 during development.

## API endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Backend availability and database status |
| GET | `/api/project` | Project name, author, description, and stack |
| GET | `/api/recipes?search=chicken` | Search TheMealDB through Express |
| GET | `/api/favorites` | Retrieve saved MongoDB recipes |
| POST | `/api/favorites` | Save a recipe to MongoDB |

Example POST body:

```json
{
  "mealId": "52772",
  "name": "Teriyaki Chicken Casserole",
  "category": "Chicken"
}
```

Errors use `{ "error": "message" }`. Expected statuses include 400 (invalid input), 404 (unknown route), 409 (duplicate favorite), 502 (recipe service failure), and 503 (MongoDB unavailable).

## Folder structure

```text
it165_fall_26_final_project/
  backend/
    .env.example
    package.json
    src/
      app.js
      app.test.js
      Favorite.js
      server.js
  frontend/
    index.html
    package.json
    vite.config.js
    src/
      main.jsx
      style.css
  .gitignore
  package.json
  package-lock.json
  README.md
```

## Checks

```bash
npm test
npm run build
```

Tests cover backend health, project metadata, invalid searches, unknown routes, and database-unavailable behavior. A live MongoDB instance is needed to verify successful favorites persistence. The frontend production build is a compilation check. This setup is intended for local development: production hosting would also need frontend serving and API routing configured.

## Upload to GitHub

1. Sign in to GitHub and create an empty repository named **it165_fall_26_final_project**. Leave the automatic README, license, and .gitignore options unchecked because these files already exist here.
2. Extract this project ZIP and open its folder in VS Code.
3. Open a terminal in that folder and run:

```bash
git init
git add .
git commit -m "Set up Dyckman Kitchen MERN project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/it165_fall_26_final_project.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username. If `origin` already exists, inspect `git remote -v` and update it with `git remote set-url origin URL` if needed. Submit the repository URL after confirming README, backend, and frontend all appear on `main`.

## Next steps

Verify database persistence on the configured MongoDB instance, expand cookbook features, and prepare the final project demonstration. This initial version has one shared cookbook and no authentication; personal accounts would require a later implementation.

## Resources

- TheMealDB API documentation: https://www.themealdb.com/api.php
- MongoDB: https://www.mongodb.com/docs/
- Express: https://expressjs.com/
- React: https://react.dev/
- Vite: https://vite.dev/
