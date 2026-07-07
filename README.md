# 🍳 Recipe Book

A recipe management web app for browsing, saving, and organizing recipes — with categories, step-by-step cooking mode, meal planning, and shopping lists.

Built with **Angular**, **TypeScript**, and **Tailwind CSS**.

---

## Features

### Public pages (available to all visitors)
- **Home** — hero/welcome section, popular recipes, browsable categories
- **Recipes** — full recipe list with filters (category, difficulty, cooking time)
- **Recipe detail** — ingredients, step-by-step cooking instructions, nutrition facts, adjustable serving size
- **Categories** — recipes grouped by category (breakfast, soups, main dishes, salads, desserts, baking, drinks, vegetarian)
- **Search** — search recipes by name/ingredient

### Account features (available to registered users)
- **Favorites** — save recipes for quick access
- **My Recipes** — create, edit, and manage personal recipes
- **Meal Plan** — plan meals across the week (breakfast/lunch/dinner per day)
- **Shopping List** — auto-generated and manually editable ingredient checklist
- **Profile** — personal info, achievements, and settings

### Cooking mode
- Step-by-step instructions with progress indicator ("Step 2 of 6")
- Built-in cooking timer per step
- Adjustable serving sizes that scale ingredient amounts

### Auth
- Login / Registration, accessible via the profile icon

---

## App structure

```
/                     Home
/recipes               Recipe list (with filters)
/recipes/:id            Recipe detail
/categories/:id          Recipes by category
/search                 Search results
/favorites              Saved recipes         (auth required)
/my-recipes             User's own recipes    (auth required)
/my-recipes/new          Create / edit recipe (auth required)
/meal-plan              Weekly meal plan      (auth required)
/shopping-list          Shopping list         (auth required)
/profile                User profile          (auth required)
/login, /register       Authentication
```

---

## Core components

| Component | Purpose |
|---|---|
| Header | Site navigation bar |
| Footer | Site footer |
| Sidebar | Side navigation menu |
| Recipe Card | Recipe preview (image, title, time, difficulty, rating) |
| Category Card | Category preview tile |
| Search Bar | Search input with icon |
| Filter Panel | Category / difficulty / time filters |
| Button | Primary & secondary buttons |
| Modal | Modal dialogs |
| Form Input | Reusable form field |
| Rating | Star rating display |
| Timer | Countdown timer for cooking steps |
| Step Indicator | Progress indicator for multi-step cooking mode |

All pages and components are designed to be fully responsive (mobile-adaptive).

---

## Design system

The UI follows a consistent color system:

- **Indigo** — accents, buttons, active elements, links
- **Slate** — body text, secondary elements, backgrounds
- **Neutral** — neutral backgrounds, cards, dividers

Each color has a full light-to-dark scale to support states like hover, active, and disabled.

---

## Tech stack

- [Angular](https://angular.dev/) — application framework
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4 — utility-first styling
- SCSS — for custom styles alongside Tailwind
- Angular Router — client-side routing
- Reactive Forms — recipe creation/editing forms

---

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

## Project status

In active development. Current focus: core navigation, page structure, and component library.

---

## License

This project is currently unlicensed. All rights reserved.
