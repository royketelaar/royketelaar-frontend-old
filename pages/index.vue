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
    // Storyblok visual input form
    this.$storybridge(
      () => {
        const storyblokInstance = new StoryblokBridge();
        storyblokInstance.on(["input", "published", "change"], event => {
          if (event.action == "input") {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content;
            }
          } else {
            window.location.reload();
          }
        });
      },
      error => {
        console.error(error);
      }
    );
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: "draft",
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
