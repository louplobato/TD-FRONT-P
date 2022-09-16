<script setup lang="ts">
import card from "@/components/card.vue";
const res = await fetch("/maisons.json");
const maisons = await res.json();

</script>

<template>
    <div>
        <card v-for="maison in  maisons" :key="maison.nom" v-bind="maison" />
    </div>
</template>