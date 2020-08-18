<template>
  <div class="container">
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
      noteDataArray: [
        {
          title: 'Cool Note',
          description: 'this is a very cool note, I think I like it!',
          id: 1
        },
        {
          title: 'Anoother Note',
          description: 'one very unique note',
          id: 2
        },
        {
          title: 'Todo Note',
          description: 'pick up the trash, brush the cat',
          id: 3
        }
      ],
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
