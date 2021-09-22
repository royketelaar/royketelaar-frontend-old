<template>
  <div v-editable="blok" class="py-8 mb-6">
    {{ blok.name }}
    {{ blok.role }}
    {{ blok.email }}
    {{ blok.phone }}
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
