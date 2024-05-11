<template>
  <UHeader>
    <template #logo>
      <div class="flex items-center gap-x-2">
        <Logo class="w-auto h-10" />
        <h1 class="uppercase">Your Next Job</h1>
      </div>
    </template>

    <template #right>
      <UColorModeButton />

      <a href="https://github.com/rekarromar/you-next-job" target="_blank">
        <Github
          :class="mode.value == 'dark' ? 'fill-white' : 'fill-black'"
          class="w-6"
        />
      </a>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const mode = useColorMode();
</script>

<style scoped></style>
