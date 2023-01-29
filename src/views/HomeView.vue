<template>
  <div class="home">
    <PersonInfo></PersonInfo>
    <WorkInfo></WorkInfo>
    <SchoolInfo></SchoolInfo>
    <SelfReview></SelfReview>
  </div>
</template>

<script>
import PersonInfo from "@/components/PersonInfo.vue";
import WorkInfo from "@/components/WorkInfo.vue";
import SchoolInfo from "@/components/SchoolInfo.vue";
import SelfReview from "@/components/SelfReview.vue";
export default {
  name: "HomeView",
  components: { PersonInfo, WorkInfo, SchoolInfo, SelfReview },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
