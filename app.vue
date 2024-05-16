<template>
  <div class="max-w-[1200px] m-auto py-5 px-2 md:px-5 overflow-x-hidden">
    <NuxtLayout>
      <HeaderSection />
      <NuxtPage />
      <FooterSection />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "You Next Job",
  meta: [
    {
      name: "description",
      content:
        "This website gives a list of technologies that you need to learn the job that is guessed automatically for you.",
    },
  ],
});
</script>
