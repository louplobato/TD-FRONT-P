<script setup lang="ts">
import card from "@/components/card.vue";

import { supabase } from "../supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const { data: listeDesMaisons, error } = await supabase
    .from('Maison')
    .select('*')
console.log(listeDesMaisons);


</script>

<template>
    <div>
        <card v-for="maison in  listeDesMaisons" :key="maison.nom" v-bind="maison" />
    </div>
</template>