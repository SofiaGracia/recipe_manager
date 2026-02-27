<template>
    <RecipeForm @submit="afegirRec" :recipe="recipe"></RecipeForm>
</template>

<script>
import RecipeForm from "@/components/RecipeForm.vue";
import { afegeixRecipe } from "@/service/recipes-service";

export default {
    name: "AddRecipe",
    components: {
        RecipeForm,
    },
    data() {
        return {
            recipe: {
              nom: '',
              temps: '',
              ingredients: [],
              elaboracio: '',
              imatge: ''
            },
        };
    },
    methods: {
        afegirRec(nouRec) {
            //Afegir un id a cada ingredient

            afegeixRecipe(nouRec);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
