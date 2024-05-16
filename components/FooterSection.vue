<template>
  <div class="flex flex-col items-center gap-y-2 px-5">
    <div class="flex flex-wrap justify-center gap-x-3">
      <a
        href="https://github.com/rekarromar/your-next-job"
        target="_blank"
        class="flex items-center gap-x-2"
      >
        <Github
          :class="mode.value == 'dark' ? 'fill-white' : 'fill-black'"
          class="w-6"
        />
        Source Code
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const mode = useColorMode();
</script>

<style scoped></style>
