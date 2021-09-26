<template>
  <div v-if="story" class="p-4">
    <a
      @click="$router.go(-1)"
      class="hover:underline text-blue-500 cursor-pointer	text-xl mb-4 block"
      >Back</a
    >
    <img :src="story.content.image.filename" class="pb-10 h-80 block" />
    <h2 class="pb-6 text-xl">{{ story.content.name }}</h2>
    <p class="pb-6 text-gray-700 leading-loose">
      {{ story.content.year }}
    </p>
    <p class="text-gray-700">
      {{ story.content.description.content[0].content[0].text }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} }
    };
  },
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? "draft" : "published";
    const fullSlug =
      context.route.path == "/" || context.route.path == ""
        ? "home"
        : context.route.path;

    return context.app.$storyapi
      .get(`cdn/stories/${fullSlug}`, {
        version: version,
        resolve_relations: "featured-projects.projects"
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content from api"
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  }
};
</script>

<style></style>
