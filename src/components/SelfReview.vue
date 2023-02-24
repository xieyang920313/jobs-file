<template>
  <div class="self-review">
    <CommonHead :title="'自我评价'"></CommonHead>
    <div class="self-detail">
      <div class="detail-list" v-for="(list, index) in reviewList" :key="index">
        <el-icon><StarFilled /></el-icon>
        {{ list }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewList: [
        "多年的前端工作经验,有熟练的前端技术和职业操守",
        "项目经验涵盖MES系统,ERP系统,电商商城,工业大数据,大屏展示等",
        "个人不太习惯写博客,所以分享出去的东西很少,GitHub多为私有仓库",
        "自学过一点Node.js和Python,目前正努力学习Node中",
        "关于前端方面,只要你想实现的,都可以交给我试试,会尽自己最大努力去完成",
        "目前使用的前端框架:Vue",
        "React私底下了解过一点,需要的情况下可以进一步学习",
      ],
    };
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
@import "@/assets/css/self.css";
</style>
