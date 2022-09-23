<template>
  <nav>
    <h4 class="text-xl">
      <Bars3Icon class="inline-block h-5 w-5 text-blue-500" />
      menu (dans <code class="font-mono">/src/App.vue</code>)
    </h4>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/">
          lien vers
          <code class="font-mono">/src/pages/index.vue</code>
        </router-link>
      </li>

      <li>
        <router-link class="text-red-600 underline" to="/simple">
          Lien vers simple
        </router-link>
      </li>

      <li>
        <router-link class="text-red-600 underline" to="/liste">
          Lien vers liste
        </router-link>
      </li>

      <li>
        <router-link class="text-red-600 underline" to="/listeFetch">
          Lien vers liste fetch
        </router-link>
      </li>

      <li>
        <router-link class="text-red-600 underline" to="/form">
          Lien vers FormKit
        </router-link>
      </li>

      <li>
        <router-link class="text-red-600 underline" to="/new">
          Lien vers Edit
        </router-link>
      </li>

    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view class="m-2 border-2 p-2" />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/20/solid'
</script>
