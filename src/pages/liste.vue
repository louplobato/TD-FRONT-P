
<script setup lang="ts">
import card from "../components/card.vue";
import maisons from "../assets/maisons.json"
</script>

<template>
    <div>
        <card v-for="maison in  maisons" :key="maison.nom" v-bind="maison" />
    </div>

    <card v-bind="maisons [Number (1)]" />
</template>

