<template>
  <div class="flex flex-col items-center gap-y-2">
    <h1 class="text-2xl font-bold text-center">Your Job Will Be</h1>

    <div v-if="job" class="flex flex-col items-center gap-y-5">
      <div class="flex flex-col items-center gap-2">
        <h1
          class="text-4xl font-bold text-center bg-gradient-to-br from-green-500 via-green-400 to-green-300 text-white px-3 py-2 rounded-lg"
        >
          {{ job.name }}
        </h1>
        <p class="max-w-[600px] m-auto text-center text-xl">
          {{ job.description }}
        </p>
      </div>

      <h1 class="text-xl font-bold text-center">
        Things You Need To Be Familiar With
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-2 gap-5 m-auto">
        <div
          v-for="technology in job.technologies"
          class="flex items-center justify-center p-4 border-2 border-green rounded-lg hover:scale-95 cursor-pointer hover:shadow-lg hover:shadow-green-100"
        >
          <a
            class="text-xl font-semibold text-center"
            :href="technology.url"
            target="_blank"
          >
            {{ technology.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mode = useColorMode();

const props = defineProps({
  type: {
    require: true,
    type: String,
  },
});

type Technology = {
  name: string;
  url: string;
};

type Job = {
  name: string;
  description: string;
  technologies: Technology[];
};

const job = ref<Job | null>(null);

const { data } = await useAsyncData("software", () =>
  queryContent(`/${props.type}`).find()
);

if (data.value?.length > 0) {
  if (data.value[0].body) {
    let newJob = data.value[0].body[getRandomInt(data.value[0].body.length)];
    console.log(newJob);

    job.value = newJob;
  }
}
</script>

<style scoped></style>
