<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} }
    };
  },
  mounted() {
    // this.$storybridge(
    //   () => {
    //     const storyblokInstance = new StoryblokBridge();
    //     // Listen to Storyblok's Visual Editor event
    //     storyblokInstance.on(["input", "published", "change"], event => {
    //       if (event.action == "input") {
    //         if (event.story.id === this.story.id) {
    //           this.story.content = event.story.content;
    //         }
    //       } else {
    //         window.location.reload();
    //         this.$nuxt.$router.go({
    //           path: this.$nuxt.$router.currentRoute,
    //           force: true
    //         });
    //       }
    //     });
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
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
