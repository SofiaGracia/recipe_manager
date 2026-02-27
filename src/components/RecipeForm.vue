<template>
    <div class="px-20">
        <button
            type="button"
            class="text-sm/6 font-semibold text-white pb-12"
            @click.prevent="navegarRecipes"
        >
            <svg
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
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
            </svg>
        </button>
        <form @submit.prevent="checkForm" id="recipeForm">
            <div class="border-b border-white/10">
                <div class="grid grid-cols-3 gap-4">
                    <div class="sm:col-span-1">
                        <label
                            for="nom"
                            class="block text-sm/6 font-medium text-white"
                            >Nom</label
                        >
                        <div class="mt-2">
                            <div
                                class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
                            >
                                <input
                                    id="nom"
                                    v-model="localRecipe.nom"
                                    placeholder="Nom de la recepta"
                                    class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="sm:col-span-full">
                        <label
                            for="recipe"
                            class="block text-sm/6 font-medium text-white"
                            >Descripció</label
                        >
                        <div class="mt-2">
                            <textarea
                                id="recipe"
                                v-model="localRecipe.elaboracio"
                                placeholder="Elaboració de la recepta"
                                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            ></textarea>
                        </div>
                        <p class="mt-3 text-sm/6 text-gray-400">
                            Descriu la recepta.
                        </p>
                    </div>

                    <div class="col-span-1">
                        <label
                            for="temps"
                            class="block text-sm/6 font-medium text-white"
                            >Temps aproximat (minuts)</label
                        >
                        <div class="mt-2 grid grid-cols-1">
                            <select
                                v-model="localRecipe.temps"
                                id="temps"
                                name="temps"
                                autocomplete="temps-name"
                                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            >
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>30</option>
                            </select>
                            <svg
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                data-slot="icon"
                                aria-hidden="true"
                                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                            >
                                <path
                                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    <!-- Ingredients -->
                    <div class="col-span-full">
                        <div class="flex flex-row justify-between items-center">
                            <label
                                for="ingredients"
                                class="block text-sm/6 font-medium text-white"
                                >Ingredients</label
                            >
                        </div>
                        <div class="mt-2 grid grid-cols-1">
                            <div
                                class="flex flex-row justify-between items-center"
                            >
                                <div class="flex flex-row gap-4">
                                    <div>
                                        <label
                                            for="nom_ing"
                                            class="block text-sm/6 font-medium text-white"
                                            >Nom ingredient</label
                                        >
                                        <div class="mt-2">
                                            <div
                                                class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
                                            >
                                                <input
                                                    id="nom_ing"
                                                    v-model="localIng.nom"
                                                    placeholder="Nom ingredient"
                                                    class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            for="quantitat"
                                            class="block text-sm/6 font-medium text-white"
                                            >Quantitat</label
                                        >
                                        <div class="mt-2">
                                            <div
                                                class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
                                            >
                                                <input
                                                    id="quantitat"
                                                    v-model="localIng.quantitat"
                                                    placeholder="Quantitat"
                                                    class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    class="btn btn-primary"
                                    @click.prevent="afegirIng"
                                >
                                    Afegir ingredient
                                </button>
                            </div>
                            <span
                                v-if="
                                    !localRecipe.ingredients ||
                                    localRecipe.ingredients.length === 0
                                "
                                >No hi ha ingredients</span
                            >

                            <ul
                                v-else
                                class="list bg-base-100 rounded-box shadow-md p-4"
                            >
                                <li
                                    v-for="ing in localRecipe.ingredients"
                                    :key="ing.id"
                                >
                                    <div
                                        v-if="editando === ing.id"
                                        class="flex flex-row gap-4"
                                    >
                                        <div>
                                            <label
                                                for="nom_ing"
                                                class="block text-sm/6 font-medium text-white"
                                                >Nom ingredient</label
                                            >
                                            <div class="mt-2">
                                                <div
                                                    class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
                                                >
                                                    <input
                                                        id="nom_ing"
                                                        v-model="ing.nom"
                                                        placeholder="Nom ingredient"
                                                        class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                for="quantitat"
                                                class="block text-sm/6 font-medium text-white"
                                                >Quantitat</label
                                            >
                                            <div class="mt-2">
                                                <div
                                                    class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
                                                >
                                                    <input
                                                        id="quantitat"
                                                        v-model="ing.quantitat"
                                                        placeholder="Quantitat"
                                                        class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Botons tick o x -->
                                        <button
                                            class="btn btn-success"
                                            @click.prevent="guardarIng(ing)"
                                        >
                                            💾 Guardar
                                        </button>
                                        <button
                                            class="btn btn-danger ml-2"
                                            @click.prevent="cancelarIng(ing)"
                                        >
                                            ❌ Cancelar
                                        </button>
                                    </div>
                                    <div
                                        v-else
                                        class="flex flex-row justify-between"
                                    >
                                        <div
                                            class="flex flex-row items-center gap-5"
                                        >
                                            <div>{{ ing.nom }}</div>
                                            <div
                                                class="text-xs uppercase font-semibold opacity-60"
                                            >
                                                {{ ing.quantitat }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex flex-row items-center gap-5"
                                        >
                                            <button
                                                class="btn btn-square btn-ghost"
                                                @click.prevent="
                                                    editIngredient(ing)
                                                "
                                            >
                                                <svg
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
                                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                class="btn btn-square btn-ghost"
                                                @click.prevent="
                                                    deleteIngredient(ing.id)
                                                "
                                            >
                                                <svg
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
                                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label
                            for="cover-photo"
                            class="block text-sm/6 font-medium text-white"
                            >Cover photo</label
                        >
                        <div
                            class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10"
                        >
                            <div class="text-center">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    class="mx-auto size-12 text-gray-600"
                                >
                                    <path
                                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                                <div class="mt-4 flex text-sm/6 text-gray-400">
                                    <label
                                        for="file-upload"
                                        class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            name="file-upload"
                                            class="sr-only"
                                        />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs/5 text-gray-400">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    class="text-sm/6 font-semibold text-white"
                    @click.prevent="navegarRecipes"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Save
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        recipe: Object,
    },
    emits: ["submit"],
    data() {
        return {
            localRecipe: { ...this.recipe },
            localIng: {
                nom: "",
                quantitat: "",
            },
            editando: null,
        };
    },
    watch: {
        recipe: {
            handler(newRecipe) {
                this.localRecipe = {
                    ...newRecipe,
                    ingredients: newRecipe.ingredients || [],
                };
            },
            deep: true,
        },
    },
    methods: {
        guardarIng(ing) {
            // Si hi ha camps buits no guardem
            if (!ing.nom || !ing.quantitat) return;

            // Els camps están plens

            this.editando = null;
        },
        cancelarIng(ing) {
            console.log(ing);

            Object.assign(ing, this.ingEditado);

            this.editando = null;
        },
        afegirIng() {
            if (!this.localIng.nom) return;

            // Hi ha que fer una còpia dels ingredients perquè sino no detecta els canvis de referència
            this.localRecipe.ingredients = [
                ...this.localRecipe.ingredients,
                {
                    id: Date.now(),
                    nom: this.localIng.nom,
                    quantitat: this.localIng.quantitat,
                },
            ];

            // Netegem els inputs
            this.localIng.nom = "";
            this.localIng.quantitat = "";
        },
        editIngredient(ing) {
            if (!(ing && ing.id)) return;

            // Guardar en un objecte les propietats del ingredient
            // de manera que quan es cancel·la podem tornar a recuperar les propietats
            this.ingEditado = Object.assign({}, ing);

            this.editando = ing.id;
        },
        deleteIngredient(id) {
            if (!id) return;

            this.localRecipe.ingredients = [
                ...this.localRecipe.ingredients.filter((i) => i.id !== id),
            ];
        },
        checkForm() {
            let errors = [];

            if (!this.localRecipe.nom) {
                errors.push("La recepta requereix un nom");
            }

            if (!this.localRecipe.temps) {
                errors.push("La recepta requereix un temps");
            }

            if (errors.length > 0) {
                alert(errors.join("\n"));
                return;
            }

            // Si està bé enviar
            this.$emit("submit", this.localRecipe);

            // Netejem els inputs
            this.localRecipe = {
                nom: "",
                temps: "",
                ingredients: [],
                elaboracio: "",
                imatge: "",
            };

            this.navegarRecipes();
        },
        navegarRecipes() {
            // Tornar enrere: https://router.vuejs.org/guide/essentials/navigation.html
            this.$router.go(-1);
        },
    },
};
</script>
