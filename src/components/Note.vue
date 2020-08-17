<template>
  <div class="container">
    <div class="header">
      <h1 class="header-title">{{ noteDataArray.title }}</h1>
      <button class="pin-button">pin</button>
    </div>
    <div class="body">
      <p class="description">{{ noteDataArray.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noteDataArray: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
* {
  background-color: #f28b82;
}
.container {
  display: flex;
  flex-direction: column;
  width: 240px;
  max-height: 400px;
  border-radius: 10px;
  padding: 10px;
}
.header {
  display: flex;
}
.header-title {
  font-size: 20px;
  margin: 0;
}
.pin-button {
  height: 20px;
  margin: auto;
  margin-left: 50px;
}
</style>
