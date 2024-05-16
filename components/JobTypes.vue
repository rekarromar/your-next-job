<template>
  <div class="flex flex-col gap-y-5">
    <div class="flex flex-col items-center justify-center">
      <Tap
        :class="mode.value == 'dark' ? 'fill-white' : 'fill-black'"
        class="w-20"
      />
      <h1 class="text-5xl font-bold text-center">
        Pick a <span class="text-green-500">Profession</span>
      </h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="job in jobs"
        @click="getRandomJob(job.key)"
        :class="mode.value == 'dark' ? 'border-white' : 'border-black'"
        class="border-[0.001px] p-5 rounded-lg hover:shadow-lg hover:shadow-green-500 cursor-pointer hover:scale-95 duration-300"
      >
        <UIcon :name="job.icon" class="text-2xl cursor-pointer" />
        <h1 class="text-green-500 font-bold">{{ job.name }}</h1>
        <p>{{ job.desc }}</p>
      </div>
    </div>
  </div>

  <UModal v-if="jobType != ''" v-model="isOpen" fullscreen>
    <UCard
      :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
          base: 'grow',
        },
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Your Job
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <div class="p-5">
        <RandomJob :type="jobType" />
      </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
let jobs = [
  {
    name: "Software Development",
    desc: "Backend, Frontend, Fullstack...",
    icon: "i-heroicons-code-bracket-16-solid",
    key: "software",
  },
  {
    name: "Networking",
    desc: "Network Administrator, Network Analyst...",
    icon: "i-heroicons-cloud-solid",
    key: "network",
  },
  {
    name: "Cyber Security",
    desc: "Ethical Hacker, Penetration Testing...",
    icon: "i-heroicons-bug-ant-16-solid",
    key: "hacking",
  },
  {
    name: "Graphic & Motion",
    desc: "Graphic Desing, Motion Graphic...",
    icon: "i-heroicons-photo-16-solid",
    key: "design",
  },
  {
    name: "Mathematicians",
    desc: "Mathematical Physics, Computational Mathematics...",
    icon: "i-heroicons-cube-transparent",
    key: "math",
  },
  {
    name: "Chemistry",
    desc: "Inorganic Chemistry, Physical Chemistry...",
    icon: "i-heroicons-beaker-16-solid",
    key: "chemistry",
  },
];

const isOpen = ref(false);
const jobType = ref("");

const mode = useColorMode();

function getRandomJob(type: string) {
  jobType.value = type;
  isOpen.value = true;
}
</script>
