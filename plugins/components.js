import Vue from "vue"
import Page from "/components/Page.vue"
import Teaser from "/components/Teaser.vue"
import Grid from "/components/Grid.vue"
import Feature from "/components/Feature.vue"
import FeaturedProjects from "~/components/FeaturedProjects"
import ProjectTeaser from "~/components/ProjectTeaser"
import Landing from "~/components/Landing"

Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
Vue.component('featured-projects', FeaturedProjects)
Vue.component('project-teaser', ProjectTeaser)
Vue.component('landing', Landing)