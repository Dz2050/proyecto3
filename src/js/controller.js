import icons from '/img/icons.svg';

import loadRecipe from './model.js';

import model from './model.js';

import recipeView from './views./RecipeView.js';

import searchView from './SearchView.js';

import resultsView from './ResultViews.js';

import paginationView from './PaginationView.js';


recipeView.render(model.state.recipe);


innerHTML = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

async function controlRecipes() {
  try {
      const parentEl = document.getElementById('recipeContainer');
      const resp = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
      const data = await resp.json();
      const recipe = data.data;
      console.log(recipe);
      const id = window.location.hash;
      console.log(id);
      } catch (error) {
      console.error("Error al obtener la receta:", error);
  }
}

showRecipe();

recipe = {
  id: recipe.id,
  title: recipe.title,
  publisher: recipe.publisher,
  sourceUrl: recipe.source_url,
  image: recipe.image_url,
  servings: recipe.servings,
  cookTime: recipe.cooking_time,
  ingredients: recipe.ingredients,
  };

  function generarMarkup() {
    const markup = `
    <figure class="recipe__fig">
      <img src=""${recipe.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}icon-check"></use>
          </svg>
          <div class="recipe__quantity">1000</div>
          <div class="recipe__description">
            <span class="recipe__unit">g</span>
            pasta
          </div>
        </li>

        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}icon-check"></use>
          </svg>
          <div class="recipe__quantity">0.5</div>
          <div class="recipe__description">
            <span class="recipe__unit">cup</span>
            ricotta cheese
          </div>
        </li>
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
    return markup;
}

const productoHTML = generarMarkup();
console.log(productoHTML);

class recipeContainer {
  constructor() {
      this.elemento = elemento;
  }
  insertarHTML(posicion, contenidoHTML) {
    this.elemento.insertAdjacentHTML(posicion, contenidoHTML);
      
  }
}
const miContenedor = new Contenedor(document.getElementById("recipeContainer"));
const markup = ``;

recipeContainer.vaciar();
recipeContainer.insertarHTML("afterbegin", markup);

`<div>
${recipe.ingredients
  .map(ing => {
  return `
  <li>
 <svg class="recipe__icon">
 <use href="${icons}#icon-check"></use>
 </svg>
 <div class="recipe__quantity">${ing.quantity}</div>
 <div class="recipe__description">
 <span class="recipe__unit">${ing.unit}</span>
 ${ing.description}
 </div>
  </li>
  `;
  }).join('')}
  </div>`

function renderSpinner(parentEl) {
  const markup = `
      <div class="spinner">
          <svg>
              <use href="${icons}#icon-loader"></use>
          </svg>
      </div>
  `;
  parentEl.insertAdjacentHTML('afterbegin', markup);
  parentEl.innerHTML = '';
  renderSpinner(parentEl);
}

const recipeView = new RecipeView();

recipeView.addHandlerRender(showRecipe);

const eventos = ['haschange', 'load'];

eventos.forEach(ev, () =>{
  window.addEventListener(ev, () => {
    showRecipe;
  });
});

function init() {
  const recipeView = new RecipeView();
  recipeView.addHandlerRender(controlRecipes);
}

init();

async function controlSearchResults(query) {
  try {
      resultsView.renderSpinner();
      const recipes = await model.loadSearchResults(query);
      console.log("Resultados de la búsqueda:", model.state.search.results);
      resultsView.render(model.getSearchResultsPage());
      paginationView.render(model.state.search);
  } catch (error) {
      console.error("Error al controlar los resultados de búsqueda:", error);
  }
}

controlSearchResults('');

function controlSearchResults() {
  const results = model.getSearchResultsPage();

  resultsView.render(results);
}

searchView.addHandlerSearch(controlSearchResults);


export { controlSearchResults };

export default loadRecipe;

