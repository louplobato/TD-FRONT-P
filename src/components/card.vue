<script setup lang="ts">
import bath from "./icones/bath.vue";
import heart from "./icones/heart.vue";

defineProps( {
    nom: String,
    prix: Number,
    favori: Boolean,
    image: String, 
    nbrSDB: Number,
  });
  
</script>

<template>
  <figure>
    <img class="w-full h-48 object-cover" :src="image" alt="" />
    <figcaption
      class="relative flex flex-col border-2 border-t-0 border-indigo-100"
    >
      <heart :class="{ 'fill-red-300': favori }" />

      <!-- Pour afficher du contenu textuel, simplement utiliser l'interpolation par double accolades (qui contiendront le JS dont l'interpretation donne le résultat affiché). -->
      <div class="text-2xl font-bold text-indigo-500 pr-1">${{ prix }}</div>

      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>

      <hr class="border-indigo-100 border-t-2 my-4" />

      <div><bath class="inline-block pr-1" />{{ nbrSDB }} Bathrooms</div>
    </figcaption>
  </figure>
</template>