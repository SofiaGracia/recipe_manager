<template>
    <!-- Hero -->
    <div class="flex flex-col p-5">
        <div class="flex flex-col items-center">
            <h5 class="p-5">CUINA RÁPIDA I FÀCIIL</h5>
            <h1 class="p-5">LA TEUA WEB DE RECEPTES EXPRÉS</h1>
            <span class="p-5"
                >Tens fam? Descobreix les nostres receptes disponibles per a
                cuinar en minuts.</span
            >
            <button
                class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                @click="getAleaRecipes"
            >
                Donam tres receptes
            </button>
        </div>
    </div>
    <div class="flex flex-row justify-center gap-5 p-10">
        <RecipeItem
            v-for="recipe in listRecipes"
            :key="recipe.id"
            :recipe="recipe"
            @edit="editRecipe"
            @delete="deleteRecipe"
        />
    </div>
    <div class="flex flex-col p-5 items-center">
        <button @click="navegarRecipes" class="btn btn-ghost">
            Veure totes les receptes<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
            </svg>
        </button>
    </div>
</template>

<script>
import { getRecipes } from "@/service/recipes-service";
import RecipeItem from "@/components/RecipeItem.vue";

export default {
    name: "Home-app",
    components: { RecipeItem },
    data() {
        return {
            listRecipes: [],
        };
    },
    methods: {
        navegarRecipes() {
            this.$router.push(`/recipes`);
        },
        editRecipe(id) {
            console.log("id a enviar: ", id);
            this.$router.push(`/editar/${id}`);
        },
        deleteRecipe(id) {
            this.$emit("delete", id);
        },
        getRandomNumber(max) {
            return Math.floor(Math.random() * max);
        },
        getAleaRecipes() {
            getRecipes()
                .then((recipes) => {
                    this.listRecipes = [];

                    let rC = 0;
                    while (rC < 3) {
                        let pos = this.getRandomNumber(recipes.length);

                        if (
                            !this.listRecipes.some(
                                (r) => r.id === recipes[pos].id,
                            )
                        ) {
                            this.listRecipes.push(recipes[pos]);
                            rC += 1;
                        }
                    }
                }) //
                .catch((error) => console.log(error));
        },
    },
};
</script>
