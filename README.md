# gestor-receptes

[![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?logo=vue.js&logoColor=fff)](https://vuejs.org/)
[![Vue Router 4](https://img.shields.io/badge/Vue_Router_4-35495E?logo=vue.js&logoColor=fff)](https://router.vuejs.org/)
[![Tailwind CSS 3](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![DaisyUI 3](https://img.shields.io/badge/DaisyUI_3-5A0EF8?logo=daisyui&logoColor=fff)](https://daisyui.com/)
[![License MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A **recipe management Single Page Application** built with Vue 3. Browse, search, add, edit, and delete quick & easy recipes. This is an educational project for the **DWEC** (Client-side Web Development) module.

---

## Features

- **Full CRUD** — Create, read, update, and delete recipes
- **Filter by cooking time** — Narrow recipes by 5–30 minute prep times
- **Random recipe picker** — Get three random recipe suggestions
- **Dynamic ingredient editor** — Add, edit inline, and remove ingredients per recipe
- **Responsive UI** — Dark-themed interface using DaisyUI + Tailwind CSS
- **REST API integration** — Communicates with a backend via the native Fetch API

---

## Screenshots

> _Screenshots to be added._

| Page | Preview |
|---|---|
| Home | ![Home page](screenshots/home.png) |
| All Recipes | ![Recipes listing](screenshots/recipes.png) |
| Add / Edit Recipe | ![Recipe form](screenshots/form.png) |

---

## Technologies

| Tool | Purpose |
|---|---|
| [Vue 3](https://vuejs.org/) | Front-end framework (Options API) |
| [Vue Router 4](https://router.vuejs.org/) | Client-side routing |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS framework |
| [DaisyUI 3](https://daisyui.com/) | Tailwind component library |
| [Vue CLI 5](https://cli.vuejs.org/) | Build system & dev server |
| [PostCSS](https://postcss.org/) + [Autoprefixer](https://github.com/postcss/autoprefixer) | CSS processing |
| [Babel](https://babeljs.io/) | JavaScript transpilation |
| [ESLint](https://eslint.org/) | Code linting |
| [Google Fonts](https://fonts.google.com/) | Playfair Display & Montserrat typefaces |
| [JSON Server](https://github.com/typicode/json-server) | Fake REST API backend (required at runtime) |

---

## Project Structure

```
gestor-receptes/
├── public/
│   ├── index.html          # HTML entry point
│   └── favicon.ico
├── src/
│   ├── main.js             # Vue app bootstrap
│   ├── App.vue             # Root component (Navbar + <router-view>)
│   ├── assets/             # Static images (logo, background)
│   ├── components/
│   │   ├── Navbar.vue      # Top navigation bar
│   │   ├── RecipeItem.vue  # Single recipe card
│   │   ├── RecipeList.vue  # Grid of recipes with filter controls
│   │   └── RecipeForm.vue  # Add / Edit recipe form
│   ├── views/
│   │   ├── Home.vue        # Landing page with random recipes
│   │   ├── Recipes.vue     # Full recipe listing
│   │   ├── AddRecipe.vue   # New recipe page
│   │   └── EditRecipe.vue  # Edit recipe page
│   ├── router/
│   │   └── index.js        # Route definitions
│   ├── service/
│   │   └── recipes-service.js  # API service layer (fetch CRUD)
│   └── styles/
│       └── tailwind.css    # Tailwind directives & global styles
├── receptes.json           # Seed data for JSON Server
├── package.json
├── vue.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Backend Setup (JSON Server)

This app requires a REST API backend. The project includes `receptes.json` as seed data for **JSON Server**.

### 1. Install JSON Server globally

```bash
npm install -g json-server
```

### 2. Start the JSON Server

```bash
json-server --watch receptes.json --port 3000
```

> The server will run at `http://localhost:3000` and serve the recipes collection at `http://localhost:3000/recipes`.

> ⚠️ Keep this terminal running — the Vue app depends on this server.

---

## Project Setup

### Install dependencies

```bash
npm install
```

### Compile and hot-reload for development

```bash
npm run serve
```

The app will be available at `http://localhost:8080`. Make sure the JSON Server is already running on port 3000.

### Compile and minify for production

```bash
npm run build
```

### Lint and fix files

```bash
npm run lint
```

---

## REST API

The front-end expects the following endpoints at `http://localhost:3000`:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/recipes` | List all recipes |
| `GET` | `/recipes/:id` | Get a single recipe |
| `POST` | `/recipes` | Create a new recipe |
| `PUT` | `/recipes/:id` | Update an existing recipe |
| `DELETE` | `/recipes/:id` | Delete a recipe |

---

## Data Model

```json
{
  "id": "string",
  "nom": "Recipe name",
  "temps": "Cooking time in minutes",
  "ingredients": [
    { "id": "number", "nom": "Ingredient name", "quantitat": "Quantity" }
  ],
  "elaboracio": "Instructions",
  "imatge": "Image URL"
}
```

---

## Component Architecture

```
App.vue
├── Navbar.vue
└── <router-view>
    ├── Home.vue
    │   └── RecipeItem.vue (x3, random)
    ├── Recipes.vue
    │   └── RecipeList.vue
    │       └── RecipeItem.vue (per recipe)
    ├── AddRecipe.vue
    │   └── RecipeForm.vue
    └── EditRecipe.vue
        └── RecipeForm.vue
```

- **RecipeList** handles time-based filtering and emits events for edit/delete
- **RecipeForm** is shared between Add and Edit views, populated via props in edit mode
- **recipes-service.js** centralises all HTTP calls using the native Fetch API

---

## Future Improvements

- Image upload functionality (currently stubbed)
- User authentication
- Replace JSON Server with a real backend
- Unit and E2E tests
- Pagination or infinite scroll for large recipe collections

---

## Credits

- Background image by [Pexels](https://www.pexels.com/)
- Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) and [Montserrat](https://fonts.google.com/specimen/Montserrat) by Google Fonts
- UI components powered by [DaisyUI](https://daisyui.com/)
- Styling utilities by [Tailwind CSS](https://tailwindcss.com/)

---

## License

[MIT](LICENSE)
