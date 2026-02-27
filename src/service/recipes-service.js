export async function getRecipes() {
    const recipesUrl = "http://localhost:3000/recipes";

    try {
        const response = await fetch(recipesUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

export async function getRecipeById(idRec) {
    const cursUrl = `http://localhost:3000/recipes/${idRec}`;

    try {
        const response = await fetch(cursUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

export async function afegeixRecipe(nouRec) {
    try {
        const response = await fetch("http://localhost:3000/recipes", {
            method: "POST",
            body: JSON.stringify(nouRec),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

export async function esborraRec(idRec) {
    try {
        const response = await fetch(
            `http://localhost:3000/recipes/${idRec}`,
            {
                method: "DELETE",
            },
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

export async function actualitzaRec(nouRec) {
    try {
        const response = await fetch(`http://localhost:3000/recipes/${nouRec.id}`, {
            method: "PUT",
            body: JSON.stringify(nouRec),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}
