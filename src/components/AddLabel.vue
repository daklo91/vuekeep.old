<template>
  <div class="container">
    <input v-model="addLabel.title" type="text" placeholder="Add Label" />
    <button @click="pushLabel()">Add Label</button>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'

export default {
  data() {
    return {
      addLabel: {
        title: '',
        id: uuid.v1()
      },
      testArray: []
    }
  },
  methods: {
    pushLabel: function() {
      this.$store.commit('updateLabel', this.addLabel)
      this.addLabel = {
        title: '',
        id: uuid.v1()
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
