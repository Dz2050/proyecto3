

const state = {
    recipe: {}
};

export default state;

import loadRecipe from './controller.js';

import { API_URL } from './config.js';

loadRecipe()
  .then(recipe => {
    console.log(recipe);
  })
  .catch(error => {
    console.error("Error al cargar la receta:", error);
  });

  async function loadRecipe(id) {
    try {
        const API_URL = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        
        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.status}`);
        }

        const data = await res.json(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const { recipe } = data;

        console.log(recipe);

        const state = {}; 
        state.recipe = recipe;
        console.log(state.recipe);
    } catch (error) {
        alert('${err} 💥💥💥�');

        console.error("Error al obtener la receta:", error);
    }
}

loadRecipe('');

async function loadRecipe(id) {
    try {
        await model.loadRecipe(id);
                const { recipe } = model.state;
        console.log(recipe);
    } catch (error) {
        console.error("Error al cargar la receta:", error);
    }
}
loadRecipe('');
