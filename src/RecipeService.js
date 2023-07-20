import session from './session';

export async function fetchRecipes(){
    const response = await fetch('https://rodrigo-12jp.onrender.com/recettes');
    if(response.ok){
        const respJson = await response.json();
        return respJson;
    } else {
        throw new Error("Impossible de récupérer la liste des recettes");
    }
}

export async function fetchRecipe(id){
    const response = await fetch(`https://rodrigo-12jp.onrender.com/recettes/${id}`);
    if(response.ok){
        const respJson = await response.json();
        return respJson[0];
    } else {
        throw new Error("Impossible de récupérer la recette");
    }
}

export async function fetchRatingByIds(recipeId){
    const response = await fetch(`https://rodrigo-12jp.onrender.com/evaluations/${recipeId}`, {
        method: "GET",
        headers: {
            ...session.getAuthHeaders()
        },
    });
    if(response.ok){
        const respJson = await response.json();
        return respJson;
    } else {
        throw new Error("Impossible de récupérer les évaluations");
    }
}

export async function fetchAverageRatingByRecetteId(recipeId){
    const response = await fetch(`https://rodrigo-12jp.onrender.com/recettes/evaluations/${recipeId}`);
    if(response.ok){
        const respJson = await response.json();
        return respJson;
    } else {
        throw new Error("Impossible de récupérer le rating");
    }
}

export async function putRating(rating){
    await fetch(`https://rodrigo-12jp.onrender.com/evaluations/${rating.recetteId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...session.getAuthHeaders()
        },
        body: JSON.stringify({
            rating: rating.rating
        })
    });
}

export async function fetchCommentsById(recetteId){
    const response = await fetch(`https://rodrigo-12jp.onrender.com/recettes/commentaires/${recetteId}`);
    if(response.ok){
        const respJson = await response.json();
        return respJson;
    } else {
        throw new Error("Impossible de récupérer la liste des commentaires");
    }
}

export async function submitComment(recetteId, comment){
    await fetch(`https://rodrigo-12jp.onrender.com/recettes/commentaires/${recetteId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...session.getAuthHeaders()
        },
        body: JSON.stringify({
            comment: comment
        })
    });
}

export async function fetchIngrediantUnits(){
    const response = await fetch('https://rodrigo-12jp.onrender.com/unites')
    if(response.ok){
        const respJson = await response.json();
        return respJson;
    }else{
        throw new Error("Impossible de récupérer la liste des unités");
    }
}

export async function postRecipe(recipe){
    return fetch("/api/recettes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...session.getAuthHeaders()
        },
        body: JSON.stringify(recipe)
    });
}

export async function putRecipe(recipe){
    return fetch(`https://rodrigo-12jp.onrender.com/recettes/${recipe.recetteId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...session.getAuthHeaders()
        },
        body: JSON.stringify(recipe)
    });
}

export async function deleteRecipe(id){
    return fetch(`https://rodrigo-12jp.onrender.com/recettes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            ...session.getAuthHeaders()
        }
    });
}

export async function putImage(id, formData){
    return fetch(`https://rodrigo-12jp.onrender.com/recettes/${id}/image`, {
        method: "PUT",
        headers: {
            ...session.getAuthHeaders()
        },
        body: formData
    });
}