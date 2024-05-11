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
    <ULandingGrid>
      <ULandingCard
        @click="getRandomJob('software')"
        class="col-span-6 row-span-2 cursor-pointer hover:scale-95 duration-300"
        icon="i-heroicons-code-bracket-16-solid"
        title="Software Development"
        description="Backend, Frontend, Fullstack..."
      />
      <ULandingCard
        @click="getRandomJob('network')"
        class="col-span-6 row-span-4 cursor-pointer hover:scale-95 duration-300"
        icon="i-heroicons-circle-stack-16-solid"
        title="Networking"
        description="Network Administrator, Network Analyst..."
      />

      <ULandingCard
        @click="getRandomJob('hacking')"
        class="col-span-6 row-span-4 cursor-pointer hover:scale-95 duration-300"
        icon="i-heroicons-bug-ant"
        title="Hacking"
        description="Ethical Hacker, Penetration Testing..."
      />
      <ULandingCard
        @click="getRandomJob('design')"
        class="col-span-6 row-span-2 cursor-pointer hover:scale-95 duration-300"
        icon="i-heroicons-photo-16-solid"
        title="Graphic & Motion"
        description="Graphic Desing, Motion Graphic..."
      />
    </ULandingGrid>
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

<style scoped></style>
