<template>
    <div class="flex flex-row justify-between gap-2 py-3 px-9">
        <form @reset.prevent="onReset">
            <input
                v-for="el in temps"
                :key="el"
                class="btn"
                :value="el"
                v-model="selected"
                type="checkbox"
                name="temps"
                :aria-label="el + ' min'"
            />

            <input class="btn btn-square" type="reset" value="×" />
        </form>

        <button class="btn btn-wide btn-primary" @click="navegarAfegirRecipe">
            Afegir
        </button>
    </div>

    <div class="grid grid-cols-4 gap-4 justify-items-center">
        <RecipeItem
            v-for="recipe in recipesFiltrat"
            :key="recipe.id"
            :recipe="recipe"
            :buttons="true"
            @edit="editRecipe"
            @delete="deleteRecipe"
        />
    </div>
</template>

<script>
import RecipeItem from "./RecipeItem.vue";

export default {
    components: { RecipeItem },
    data() {
        return {
            temps: ["5", "10", "15", "20", "25", "30"],
            selected: [],
        };
    },
    computed: {
        recipesFiltrat() {
            // si no hi ha filtres, mostra totes
            if (this.selected.length === 0) {
                return this.recipes;
            }

            return this.recipes.filter((recipe) =>
                this.selected.includes(recipe.temps)
            );
        },
    },
    props: {
        recipes: Array,
    },
    methods: {
        onReset() {
            this.selected = [];
        },
        navegarAfegirRecipe() {
            this.$router.push(`/nou`);
        },
        editRecipe(id) {
            console.log("id a enviar: ", id);
            this.$router.push(`/editar/${id}`);
        },
        deleteRecipe(id) {
            this.$emit("delete", id);
        },
    },
};
</script>
