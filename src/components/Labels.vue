<template>
  <div>
    <router-link
      :to="{ name: 'label', params: { labelname: labelName.title } }"
      >{{ labelName.title }}</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    labelName: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
