<template>
  <NuxtLink v-if="project.content" :to="project.full_slug" class="block py-10">
    <img :src="project.content.image.filename" class="pb-10 h-80 block" />
    <h2 class="pb-6 text-xl">{{ project.content.name }}</h2>
    <p class="pb-6 text-gray-700 leading-loose">
      {{ project.content.year }}
    </p>
    <p class="text-gray-700">
      {{ project.content.description.content[0].content[0].text }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    resizedImage() {
      const imageUrl = this.project.content.image;
      if (typeof imageUrl !== "undefined") {
        return imageUrl.filename.replace(
          "//a.storyblok.com",
          "//img2.storyblok.com/300x250"
        );
      }
      return null;
    }
  }
};
</script>

<style></style>
