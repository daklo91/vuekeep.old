<template>
  <div>
    <input v-model="addNote.title" type="text" placeholder="Add Title" />
    <input
      v-model="addNote.description"
      type="text"
      placeholder="Add Description"
    />
    <button @click="pushNote()">Create Note</button>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'

export default {
  data() {
    return {
      addNote: {
        title: '',
        description: '',
        id: uuid.v1()
      }
    }
  },
  methods: {
    pushNote: function() {
      this.$store.commit('updateNote', this.addNote)
      this.addNote = {
        title: '',
        description: '',
        id: uuid.v1()
      }
    }
  }
}
</script>

<style scoped></style>
