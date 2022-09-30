<script setup lang="ts">
import formulaireOffreMaison from "@/components/formulaireOffreMaison.vue";

defineProps(["id"]);
</script>
    
<template>
    <div class="w-1/2 p-2">
        <formulaireOffreMaison :id="id" />
    </div>
</template>