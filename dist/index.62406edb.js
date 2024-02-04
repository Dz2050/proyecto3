const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
async function showRecipe() {
    let url = "http://localhost:63388/";
    try {
        const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
showRecipe();
var data;

//# sourceMappingURL=index.62406edb.js.map
