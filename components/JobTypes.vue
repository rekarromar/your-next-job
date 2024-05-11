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
      <div @click="getRandomJob('software')" class="jobCard">
        <UIcon
          name="i-heroicons-code-bracket-16-solid"
          class="text-2xl cursor-pointer"
        />
        <h1>Software Development</h1>
        <p>Backend, Frontend, Fullstack...</p>
      </div>

      <div @click="getRandomJob('network')" class="jobCard">
        <UIcon
          name="i-heroicons-code-bracket-16-solid"
          class="text-2xl cursor-pointer"
        />
        <h1>Networking</h1>
        <p>Network Administrator, Network Analyst...</p>
      </div>

      <div @click="getRandomJob('hacking')" class="jobCard">
        <UIcon
          name="i-heroicons-code-bracket-16-solid"
          class="text-2xl cursor-pointer"
        />
        <h1>Hacking</h1>
        <p>Ethical Hacker, Penetration Testing...</p>
      </div>

      <div @click="getRandomJob('design')" class="jobCard">
        <UIcon
          name="i-heroicons-code-bracket-16-solid"
          class="text-2xl cursor-pointer"
        />
        <h1>Graphic & Motion</h1>
        <p>Graphic Desing, Motion Graphic...</p>
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
            Modal
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
const isOpen = ref(false);
const jobType = ref("");

const mode = useColorMode();

function getRandomJob(type: string) {
  jobType.value = type;
  isOpen.value = true;
}
</script>

<style scoped>
.jobCard {
  @apply border-[0.001px] p-5 rounded-lg border-white hover:shadow-lg hover:shadow-green-500 cursor-pointer hover:scale-95 duration-300;
}
</style>
