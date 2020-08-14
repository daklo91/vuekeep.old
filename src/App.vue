<template>
  <div id="app">
    <Header />
    <div class="container">
      <TagBar />
      <div>
        <AddNote class="add-note" />
        <Home />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TagBar from '@/components/TagBar.vue'
import Home from '@/views/Home.vue'
import AddNote from '@/components/AddNote.vue'

export default {
  components: {
    Header,
    TagBar,
    Home,
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
