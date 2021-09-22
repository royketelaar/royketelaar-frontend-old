<template>
  <a href="#" class="block py-10">
    <img :src="projectContent.image.filename" class="pb-10 h-80 block" />
    <h2 class="pb-6 text-xl">{{ projectContent.name }}</h2>
    <p class="pb-6 text-gray-700 leading-loose">
      {{ projectContent.year }}
    </p>
    <p class="text-gray-700">
      {{ projectContent.description.content[0].content[0].text }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    projectContent: {
      type: Object,
      required: true
    }
  },
  computed: {
    resizedImage() {
      const imageUrl = this.projectContent.image;
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
