# Recipe Components (`@panja.tushar15/recipe-components`)

[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTI-MzEtOTIuNy02OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

A collection of lightweight, framework-agnostic Web Components for recipe browsing, searching, favoriting, and weekly meal planning built with [Stencil.js](https://stenciljs.com).

## 🚀 Components Overview

This package provides 4 core Web Components:

- **`<recipe-card>`** – Card component displaying recipe image, title, category badge, favorite toggle, and a slot for custom footer actions.
- **`<recipe-search>`** – Search input with button and Enter key handling.
- **`<favorite-button>`** – Heart icon button for favoriting recipes.
- **`<meal-day-card>`** – Interactive card for weekly meal planning with add, change, and remove states.

---

## 🛠️ Installation & Setup

To start developing or building the component package:

```bash
# Install dependencies
npm install

# Start local dev server with hot reload
npm start

# Build production library bundle
npm run build

# Run unit tests
npm test
```

---

## 📖 Component API & Usage Guide

### 1. Recipe Card (`<recipe-card>`)

Displays a recipe preview with image, name, category badge, and interactive favorite heart toggle.

#### Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `recipeId` | `recipe-id` | Unique ID of the recipe | `string` | `''` |
| `name` | `name` | Recipe title | `string` | `''` |
| `image` | `image` | Recipe image URL | `string` | `''` |
| `category` | `category` | Recipe category (e.g. Vegetarian, Dessert) | `string` | `''` |
| `isFavorite` | `is-favorite` | Indicates if the recipe is favorited | `boolean` | `false` |

#### Events

| Event | Description | Detail Type |
| --- | --- | --- |
| `favoriteToggle` | Emitted when the favorite button is toggled | `string` (recipeId) |

#### Slots

| Slot Name | Description |
| --- | --- |
| `"footer"` | Custom action buttons or metadata at the bottom of the card |

#### Example

```html
<recipe-card
  recipe-id="101"
  name="Chicken Curry"
  image="https://example.com/curry.jpg"
  category="Chicken"
  is-favorite="true">
  <button slot="footer">View Recipe</button>
</recipe-card>
```

---

### 2. Recipe Search (`<recipe-search>`)

Interactive search bar that triggers a search event upon user submission via button or Enter key.

#### Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `placeholder` | `placeholder` | Search field placeholder text | `string` | `'Search recipes...'` |

#### Events

| Event | Description | Detail Type |
| --- | --- | --- |
| `search` | Emitted when search action is triggered | `string` (search query) |

#### Example

```html
<recipe-search placeholder="Search by ingredient..."></recipe-search>

<script>
  document.querySelector('recipe-search').addEventListener('search', (e) => {
    console.log('Search query:', e.detail);
  });
</script>
```

---

### 3. Favorite Button (`<favorite-button>`)

Standalone heart toggle button for favoriting recipes.

#### Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `recipeId` | `recipe-id` | Recipe identifier | `string` | `''` |
| `isFavorite` | `is-favorite` | Current favorite state | `boolean` | `false` |

#### Events

| Event | Description | Detail Type |
| --- | --- | --- |
| `favoriteToggle` | Emitted when clicked | `string` (recipeId) |

#### Example

```html
<favorite-button recipe-id="101" is-favorite="false"></favorite-button>
```

---

### 4. Meal Day Card (`<meal-day-card>`)

Day card for weekly meal planners supporting planned meal display and empty states.

#### Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `day` | `day` | Day name (e.g. "Monday") | `string` | `''` |
| `recipeName` | `recipe-name` | Name of assigned recipe | `string` | `''` |
| `recipeImage` | `recipe-image` | Image URL of assigned recipe | `string` | `''` |

#### Events

| Event | Description | Detail Type |
| --- | --- | --- |
| `mealAdd` | Emitted when "+ Add Meal" is clicked | `void` |
| `mealChange` | Emitted when "Change" button is clicked | `void` |
| `mealRemove` | Emitted when "Remove" button is clicked | `void` |

#### Example

```html
<meal-day-card
  day="Monday"
  recipe-name="Spaghetti Bolognese"
  recipe-image="https://example.com/spaghetti.jpg">
</meal-day-card>
```

---

## 🌐 Using in Frameworks (Svelte, React, Vue, Vanilla HTML)

Because these components are compiled to standard Web Components via Stencil, they work seamlessly in any environment.

### Vanilla HTML / Script Import

```html
<script type="module" src="https://unpkg.com/@panja.tushar15/recipe-components"></script>
<recipe-search></recipe-search>
```

### Module Import (Bundlers / Frameworks)

```typescript
import '@panja.tushar15/recipe-components';
```

---

## 📄 License

MIT