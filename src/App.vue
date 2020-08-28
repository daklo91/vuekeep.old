<template>
  <div id="app">
    <Header />
    <div class="container">
      <TagBar />
      <div>
        <AddNote class="add-note" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TagBar from '@/components/TagBar.vue'
import AddNote from '@/components/AddNote.vue'

export default {
  components: {
    Header,
    TagBar,
    AddNote
  }
}
</script>

<style>
.container {
  display: flex;
}
.add-note {
  text-align: center;
  padding: 10px;
}
</style>
