<template>
  <div class="other">
    <CommonHead :title="'其他链接'"></CommonHead>
    <div class="other-detail">
      <div class="links" v-for="(link, index) in links" :key="index">
        <el-icon><Share /></el-icon>
        <div>
          <label class="link-label">{{ link.name }}:</label>
          <span class="link-url">{{ link.url }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "GitHub",
          url: "https://github.com/xieyang920313",
        },
      ],
    };
  },
  methods: {},
  components: {},
};
</script>

<style scoped >
.links {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.link-label {
  margin: 0 20px 0 5px;
  font-size: 14px;
  font-weight: 700;
}
.link-url {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
