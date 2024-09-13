<script lang="ts" setup></script>

<template>
  <TheHeader />

  <main>
    <slot></slot>
  </main>

  <NuxtLazyHydrate when-visible>
    <LazyTheFooter />
  </NuxtLazyHydrate>
</template>
