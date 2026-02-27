<template>
    <RecipeList :recipes="listRecipes" @delete="deleteRecipe"></RecipeList>
</template>

<script>
import RecipeList from "@/components/RecipeList.vue";
import { esborraRec, getRecipes } from "@/service/recipes-service";

export default {
    name: "Recipes-app",
    components: {
        RecipeList,
    },
    data() {
        return {
            listRecipes: [],
        };
    },
    mounted() {
        // L'esdeveniment mounted es dispara quan el component s'ha muntat al DOM
        // Fem una crida a una API o realitzem altres operacions aquí
        this.carregarLlista();
    },
    methods: {
        carregarLlista() {
            getRecipes()
                .then((recipes) => (this.listRecipes = [...recipes])) //
                .catch((error) => console.log(error));
        },

        async deleteRecipe(idRecipe) {
            await esborraRec(idRecipe);
            //this.carregarLlista(); Podriem gastar-ho però és una altra crida al backend
            this.listRecipes = this.listRecipes.filter(
                (rec) => rec.id != idRecipe,
            );
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
