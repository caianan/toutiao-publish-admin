<template>
  <el-container class="layout-container">
    <el-aside
      class="aside"
      width="300px"
    >Aside</el-aside>
    <el-container>
      <el-header
        class="header"
      >Header</el-header>
      <el-main
        class="main"
      >Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.layout-container {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.aside {
  background-color: #D3DCE6;
}

.header {
  background-color: #B3C0D1;
}

.main {
  background-color: #E9EEF3;
}
</style>
