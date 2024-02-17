import icons from '/img/icons.svg';

import { Fraction } from 'fractional.js';

import View from './View.js';

class RecipeView extends View {
}

new Fraction(ing.quantity).toString();


class RecipeView {
    _parentElement;
    _data;

    constructor() {
        this._parentElement = document.querySelector('_recipeContainer');
    }

    render(data) {
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
        this.renderSpinner();
    }

renderSpinner(){
        const markup = `
            <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
            </div>
        `;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
}

    _generateMarkup() {
        return `
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
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
}

const recipeView = new RecipeView();
recipeView.render({ title: '',});

class RecipeView {

  addHandlerRender(handler) {
      window.addEventListener("hashchange", event => {
          handler();
      });
  }
}

class RecipeView {
  _errorMessage = "We could not find that recipe. Please try another one!";

  renderError(message = this._errorMessage) {
      const markup = `
          <div class="error">
              <div>
                  <svg>
                      <use href="${icons}#icon-alert-triangle"></use>
                  </svg>
              </div>
              <p>${message}</p>
          </div>
      `;
      this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

class RecipeView {
  _errorMessage = "We could not find that recipe. Please try another one!";
  _successMessage = "Recipe found successfully! Enjoy cooking!";

  renderMessage(message = this._successMessage) {
      const markup = `
          <div class="message">
              <div>
                  <svg>
                      <use href="${icons}#icon-smile"></use>
                  </svg>
              </div>
              <p>${message}</p>
          </div>
      `;
      this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new RecipeView();