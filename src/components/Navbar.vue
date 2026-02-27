<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <a @click="navegarHome" class="btn btn-ghost text-xl">Receptes</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <router-link to="/" >Home</router-link>
                </li>
                <li>
                    <router-link to="/recipes" 
                        >Recipes</router-link
                    >
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar-app",
    data() {
    },
    methods: {
        navegarHome() {
            this.$router.push(`/`);
        },
    },
};
</script>
