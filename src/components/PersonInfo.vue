<template>
  <div class="person-info">
    <div class="person-name">
      <span class="user-name">谢阳</span>
      <img :src="userImg" class="user-img" />
    </div>
    <div class="default-info">
      <div class="work-status">离职</div>
      <div class="work-type">
        <el-icon class="icon">
          <MapLocation />
        </el-icon>
        <span class="address"> 重庆 </span>
        <el-icon class="icon">
          <Monitor />
        </el-icon>
        <span class="job"> 前端开发工程师 </span>
      </div>
      <div class="contact-info">
        <el-icon class="icon">
          <Iphone />
        </el-icon>
        <span class="phone">18725696112</span>
        <el-icon class="icon">
          <Message />
        </el-icon>
        <span class="emil">owen.xie.chongqing.aliyun.com</span>
      </div>
      <div class="job-type">
        <div v-for="(job, index) in jobList" :key="index" class="jobs">
          {{ job }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobList: ["Vue", "JavaScript", "Three.js", "Echarts"],
      userImg: require("@/assets/logo.png"),
    };
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
@import "@/assets/css/person.css";
</style>
