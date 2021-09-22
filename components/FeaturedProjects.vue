<template>
  <div v-editable="blok" class="py-8 mb-6">
    <div class="relative">
      <h2 class="relative font-serif text-4xl z-10">{{ blok.name }}</h2>
    </div>
    <ul class="flex -m-x8">
      <li
        v-for="project in blok.projects"
        :key="project._uid"
        class="flex-auto px-8"
        style="min-width: 33%"
      >
        <ProjectCard
          v-if="project.content"
          :project-content="project.content"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
