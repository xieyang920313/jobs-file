<template>
  <div class="work-info">
    <CommonHead :title="'工作经历'"></CommonHead>
    <div class="work-detail">
      <div
        v-for="(job, index) in workList"
        :key="index"
        class="detail-cont"
        :style="index != 0 && { marginTop: '50px' }"
      >
        <div class="cont-h">
          <div class="company">{{ job.company }}</div>
          <div>
            <span>{{ job.startTime }}</span>
            <span>~</span>
            <span>{{ job.endTime }}</span>
          </div>
        </div>
        <div class="worker">{{ job.worker }}</div>
        <div class="d-flex">
          <div
            class="job-type"
            v-for="(type, tIndex) in job.jobType"
            :key="tIndex"
          >
            {{ type }}
          </div>
        </div>
        <div class="cont-b">
          <div
            v-for="(project, pIndex) in job.projectList"
            :key="pIndex"
            class="project-list"
          >
            <a
              class="project-name"
              href="javascript:;"
              @click="handlerJump(project.href)"
            >
              {{ project.name }}
            </a>
            <div
              v-for="(work, wIndex) in project.works"
              :key="wIndex"
              class="project-detail"
            >
              <el-icon class="icon"><Tools /></el-icon>
              <span>{{ work }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workList: [
        {
          company: "英科铸数网络科技有限公司",
          startTime: "2021.2",
          endTime: "至今",
          worker: "Web前端工程师",
          jobType: ["Vue", "Three.js", "Echarts", "Node.js", "Python"],
          projectList: [
            {
              name: "ALUDYNE汽车零部件（南通）工厂DPLUS数字化生产平台",
              href: "https://www.aludyne-nantong-mes.cn",
              username: "admin",
              password: "123456",
              works: [
                "美国通用汽车位于江苏南通的零部件工厂,为了实现数字化转型,做到对设备的预警和生产数据的实时把控;",
                "项目基于Vue2框架开发,数据化图表采用Echarts和HighCharts展示,工厂和设备模型使用Three.js渲染;",
                "实现了动态数据在3D模型中的展示效果;",
                "结合TweenMax实现视角切换过度效果.",
              ],
            },
            {
              name: "FBD-纺织产业链大数据技术平台",
              href: "https://fbdnext.flavor.goldendata.cloud",
              username: "admin",
              password: "fbd@2023",
              works: [
                "业内顶级学术专家带头,欧盟顶级服装纺织产业大数据平台,国内由博洋控股集团使用;",
                "项目基于Vue3框架搭建,结合Velzon开发;",
                "舒适感的维度由Echarts的雷达图结合线段图绘制,实现雷达图测点拖拽;",
                "成分追溯由Echarts的桑基图绘制,实现点击成分跳转对应的展示信息.",
              ],
            },
            {
              name: "oodt-低代码数字孪生IoT平台",
              href: "http://192.168.30.118:8088",
              username: "test",
              password: "123456",
              works: [
                "内部项目,是一套全配置化的、可扩展的工业IoT平台,功能化GD数字孪生概念中的孪生模型和孪生实例;",
                "项目基于Vue3框架开发,结合Velzon开发;",
                "实现了数据选中拖拽展示实时数据图表,动态阈值的展示;",
                "实现了选中多维数据层级的复制与批量复制.",
              ],
            },
          ],
        },
        {
          company: "东启信息科技有限公司",
          startTime: "2016.1",
          endTime: "2018.12",
          worker: "web前端工程师",
          jobType: ["Vue", "MQTT", "OCX", "Echarts", "postMessage"],
          projectList: [
            {
              name: "东善桥变电平台（三屏平台系统项目）",
              href: "",
              username: "",
              password: "",
              works: [
                "基于Vue配合ElementUi及Iview进行页面布局构建;",
                "使用Echarts展示设备的历史数据折线可视化展示;",
                "三屏大屏项目 由多个iframe拼接组成 多页面通过postMessage进行通讯.",
              ],
            },
            {
              name: "物联网新变电平台系统 （单屏系统）",
              href: "",
              username: "",
              password: "",
              works: [
                "大平台下的智能辅助模块 通用平台 简单配置即可在多地进行部署使用;",
                "多个模块为独立项目 使用iframe嵌套至平台外壳内展示;",
                "前台使用MQTT实时通讯获取现场设备数据进行页面的数据动态展示预警;",
                "使用OCX视频控件进行流媒体的视频直播展示.",
              ],
            },
          ],
        },
        {
          company: "中软国际科技服务南京有限公司",
          startTime: "2019.1",
          endTime: "2021.2",
          worker: "前端开发工程师",
          jobType: ["Vue", "jQuery", "Html5", "Css3"],
          projectList: [
            {
              name: "华为Vmall海外商城",
              href: "",
              username: "",
              password: "",
              works: [
                "负责海外商城Web端和Wap端的前端开发工作;",
                "海外商城最初是基于JQ库进行开发,极少使用第三方库和开源软件,截止目前,正逐步开始切Vue框架开发;",
                "版本迭代开发期间,配合产品经理和SE进行需求的讲解拆分,精确还原UI设计图稿,完成开发工作;",
                "配合一线运营,处理现网出现的问题和配置问题,修改体验师提出的优化点.",
              ],
            },
            {
              name: "华为手机App主题",
              href: "",
              username: "",
              password: "",
              works: [
                "负责移动端华为主题活动的H5页面开发;",
                "项目主要使用Vue技术,配合mui库进行开发;",
                "使用CSS3等技术实现动效序列帧效果,使用htmlt2canvas实现截图分享功能;",
                "pixi.js结合tweenMax.js实现一镜到底的页面效果.",
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handlerJump(url) {
      if (!url) {
        return;
      }
      if (url.includes("http://") || url.includes("https://")) {
        window.open(url, "_blank");
      } else {
        window.open("https://" + url, "_blank");
      }
    },
  },
  components: {},
};
</script>

<style scoped>
@import "@/assets/css/work.css";
</style>
