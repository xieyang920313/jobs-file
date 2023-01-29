<template>
  <div class="home">
    <PersonInfo></PersonInfo>
    <WorkInfo></WorkInfo>
    <SchoolInfo></SchoolInfo>
    <SelfReview></SelfReview>
    <Other></Other>
  </div>
</template>

<script>
import PersonInfo from "@/components/PersonInfo.vue";
import WorkInfo from "@/components/WorkInfo.vue";
import SchoolInfo from "@/components/SchoolInfo.vue";
import SelfReview from "@/components/SelfReview.vue";
import Other from "@/components/Other.vue";
export default {
  name: "HomeView",
  components: {
    PersonInfo,
    WorkInfo,
    SchoolInfo,
    SelfReview,
    Other,
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
