<template>
  <div class="flex flex-col items-center gap-y-2 px-5">
    <h1 class="bg-green-500 px-2 py-1 rounded-lg font-bold text-black">
      Prepared By
    </h1>
    <div class="flex flex-wrap justify-center gap-x-3">
      <a v-for="person in persons" :href="person.url" target="_blank"
        >{{ person.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
let persons = [
  {
    name: "Rekar Omar",
    url: "https://www.facebook.com/rekarromar",
  },
  {
    name: "Aland Nawzad",
    url: "",
  },
  {
    name: "Ahmad Habib",
    url: "",
  },
  {
    name: "Balen Jaza",
    url: "",
  },
  {
    name: "Hawkar Omar",
    url: "",
  },
];
</script>

<style scoped></style>
