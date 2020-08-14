<template>
  <div class="container">
    <Note
      v-for="noteData in noteDataArray"
      :key="noteData.id"
      :note-data-array="noteData"
    />
  </div>
</template>

<script>
import Note from '@/components/Note.vue'

export default {
  components: {
    Note
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
      ]
    }
  }
}
</script>

<style scoped>
.container {
  margin: 10px;
}
</style>
