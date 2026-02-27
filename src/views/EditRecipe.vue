<template>
    <RecipeForm @submit="editarRecipe" :recipe="recipe"></RecipeForm>
</template>

<script>
import RecipeForm from "@/components/RecipeForm.vue";
import { actualitzaRec, getRecipeById } from "@/service/recipes-service";

export default {
    name: "EditRecipe",
    components: {
        RecipeForm,
    },
    props: {
        id: String,
    },
    methods: {
        async carregarRecipe(id) {
            const rec = await getRecipeById(id);
            this.recipe = rec;
        },
        async editarRecipe(nouRec) {
            console.log(nouRec);
            const repos = await actualitzaRec(nouRec);
            console.log("REsposta rebuda: ", repos);
        },
    },
    watch: {
        id: {
            immediate: true,
            handler(newId) {
                if (!newId) return;
                this.carregarRecipe(newId);
            },
        },
    },
    data() {
        return {
            recipe: {
                nom: "",
                temps: "",
                ingredients: [],
                elaboracio: "",
                imatge: "",
            },
        };
    },
};
</script>
