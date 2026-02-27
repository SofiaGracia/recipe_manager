<template>
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
                src="https://images.pexels.com/photos/5562807/pexels-photo-5562807.jpeg"
                alt="recipe"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ recipe.nom }}
                <div class="badge badge-secondary">{{ recipe.temps }}min</div>
            </h2>
            <p>
                {{ recipe.elaboracio }}
            </p>
            <div v-if="buttons" class="card-actions justify-end">
                <button class="btn btn-primary" @click="$emit('edit', recipe.id)">Editar</button>
                <button class="btn btn-outline btn-error" @click="$emit('delete', recipe.id)">Esborrar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recipe: Object,
        buttons: Boolean,
    },
};
</script>
