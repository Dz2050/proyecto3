
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';

function timeout(seconds) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`La solicitud tardó demasiado. Por favor, inténtalo de nuevo.`));
        }, seconds * 1000);
    });
}

async function getJSON(url) {
    try {
        const fetchPro = fetch('https://forkify-api.herokuapp.com/api/v2/recipes/');
        const res = await Promise.race([fetchPro, timeout(5)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);

        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { getJSON };

