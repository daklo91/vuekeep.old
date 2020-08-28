<template>
  <div class="container">
    <router-link :to="{ name: 'home' }">Notes</router-link>
    <router-link :to="{ name: 'about' }">Reminders</router-link>
    <Labels
      v-for="labelFromVuex in labelsFromVuex"
      :key="labelFromVuex.id"
      :label-name="labelFromVuex"
    />
    <AddLabel />
  </div>
</template>

<script>
import Labels from '@/components/Labels.vue'
import AddLabel from '@/components/AddLabel.vue'

export default {
  components: {
    Labels,
    AddLabel
  },
  mounted() {
    this.$store.state.labels = this.labelsFromVuex
  },
  data() {
    return {
      labelsFromVuex: []
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border-right: solid 1px black;
  padding-right: 10px;
}
</style>
