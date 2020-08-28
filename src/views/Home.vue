<template>
  <div class="container">
    <p>This is the "Show all notes" page.</p>
    <Note
      v-for="noteFromVuex in notesFromVuex"
      :key="noteFromVuex.id"
      :note-data-array="noteFromVuex"
    />
  </div>
</template>

<script>
import Note from '@/components/Note.vue'

export default {
  components: {
    Note
  },
  mounted() {
    this.$store.state.notes = this.notesFromVuex
  },
  data() {
    return {
      notesFromVuex: []
    }
  },
  methods: {
    pushNote(e) {
      this.noteDataArray.push(e)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 10px;
}
</style>
