<template>
  <div class="flex justify-between">
    <div class="flex items-center gap-x-2">
      <Logo class="w-auto h-10" />
      <h1 class="uppercase">Your Next Job</h1>
    </div>

    <div class="flex items-center gap-x-3">
      <UIcon
        @click="changeMode"
        name="i-heroicons-moon-16-solid"
        class="text-2xl cursor-pointer"
      />

      <a href="https://github.com/rekarromar/you-next-job" target="_blank">
        <Github
          :class="mode.value == 'dark' ? 'fill-white' : 'fill-black'"
          class="w-6"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const mode = useColorMode();

function changeMode() {
  let newMode = mode.value == "dark" ? "light" : "dark";
  mode.value = newMode;
  mode.preference = newMode;
}
</script>

<style scoped></style>
