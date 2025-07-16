 ### React Recipe Finder
This is a responsive food recipe web application built with React. Users can search for recipes, view detailed ingredient information, and manage a personalized list of favorite recipes.

### Features

- Home Page – Displays a grid of recipes fetched from the Forkify API

- Favorites Page – Allows users to save and view their favorite recipes

- Details Page – Shows full details and ingredients of a selected recipe

- Uses React Context API for global state management

- Clean, responsive layout

### Project Structure

```plaintext
src/
├── components/
│   ├── navbar/
│   │   ├── index.jsx
│   │   └── navbar.css
│   ├── recipe-item/
│   │   ├── index.jsx
│   │   └── recipeItem.css
├── pages/
│   ├── home/
│   │   ├── index.jsx
│   │   └── home.css
│   ├── favorites/
│   │   ├── index.jsx
│   │   └── favorites.css
│   ├── details/
│   │   ├── index.jsx
│   │   └── recipeDetails.css
├── context/
│   └── index.js
├── App.js
├── index.js
```

### Getting Started

1.Clone the repository:

git clone https://github.com/Sana-212/react-recipe-app.git
cd react-recipe-app

2.Install dependencies:

npm install

3.Start the development server:

npm start

### API Source

Recipe data is fetched from the Forkify API, which provides access to a variety of public recipe data.

### Tech Stack

- React
- React Router
- Context API
- CSS
