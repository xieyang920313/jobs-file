<template>
  <div class="d-flex common-head">
    <span class="common-title">{{ title }}</span>
    <span class="common-line"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.common-head {
  align-items: center;
  margin: 30px 0;
  font-size: 18px;
}
.common-line {
  flex: 1;
  margin-left: 15px;
  height: 1px;
  background-color: #dee2e6;
}
</style>
