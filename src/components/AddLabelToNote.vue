<template>
  <div>
    <multiselect v-model="value" :options="options"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  mounted() {
    this.options = this.$store.getters.labelNames
  },
  data() {
    return {
      value: null,
      options: []
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style></style>
