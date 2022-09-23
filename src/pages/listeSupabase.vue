<script setup lang="ts">
import { supabase } from "../supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
const Maisons = [supabase]; // à remplacer par l'appel à Supabase
let { data: Maison, error } = await supabase
    .from('Maison')
    .select('*')


</script>

<template>
    <div>
        <card v-for="maison in  Maisons" :key="maison.nom" v-bind="maison" />
    </div>
</template>