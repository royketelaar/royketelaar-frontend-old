<template>
  <div v-if="story">{{ story }}</div>
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
