
async function loadRecipe(id) {
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.status}`);
        }

        const data = await res.json(`https://forkify-api.herokuapp.com/api/v2/recipes/`);

        return data;
    } catch (error) {
        console.error("Error al obtener la receta:", error);
    }
}

export { loadRecipe };
