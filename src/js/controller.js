img/icons.svg

const recipeContainer 

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

async function showRecipe (){ 
  let url = "http://localhost:63388/";
  
  try {
    id = window.location.hash
    renderSpiner(recipeContainer)
    const response = await fetch ("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
    const data = await response.json();
    console.log(data);
  } catch (error){
    console.log(error);
  }
}

var innerHTML=
  let (markup) = ${
  <figure class="recipe__fig">
    <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
    <span>${recipe.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="src/img/icons.svg#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${icons}"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="src/img/icons.svg#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${icons}"></use>
      </svg>
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${icons}"></use>
      </svg>
    </button>
  </div>

  <div>
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      <li>
        <svg class="recipe__icon">
          <use href="${icons}"></use>
        </svg>
        <div class="recipe__quantity">1000</div>
        <div class="recipe__description">
          <span class="recipe__unit">g</span>
          pasta
        </div>
      </li>

      <li>
        <svg class="recipe__icon">
          <use href="${icons}"></use>
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
      href="${recipe. sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons}"></use>
      </svg>
    </a>
  </div>
  
};

recipeContainer {
  insertAdjacentHTML
}

recipe.ingredients = Map [
  <div>
    ${recipe.ingredients
    .map(ing => {
    return `
    <li>
   <svg class="recipe__icon">
   <use href="src/img/icons.svg#icon-check"></use>
   </svg>
   <div class="recipe__quantity">${ing.quantity}</div>
   <div class="recipe__description">
   <span class="recipe__unit">${ing.unit}</span>
   ${ing.description}
   </div>
    </li>
    `;
    }).join('')}
    </div>
]

function renderSpiner (parentEI){
  var markup {
    <div class="spinner">
          <svg>
            <use href="${icons}"></use>
          </svg>
        </div>
  }
}

addEventListener ("hashchange")
    ("showrecipe")
