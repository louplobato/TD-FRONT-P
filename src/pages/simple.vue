
<script setup lang="ts">
    import card from "../components/card.vue";

const maison1 = {
    nom:"test de nom", 
    prix:45,
}
</script>

<template>
    <div>
        <card nom="test de nom" :prix="45"/>
        <card v-bind="maison1" />
    </div>
</template>

