<template>
  <div>
    <div>
      <input v-model="addNote.title" type="text" placeholder="Add Title" />
      <input
        v-model="addNote.description"
        type="text"
        placeholder="Add Description"
      />
      <button @click="pushNote()">Create Note</button>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addNote: {
        title: '',
        description: ''
      },
      testArray: []
    }
  },
  methods: {
    pushNote: function() {
      this.testArray.push(this.addNote)
    }
  }
}
</script>

<style scoped></style>
