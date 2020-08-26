<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{that.title}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{that.title2}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
    props:["that"]
};
</script>
<style scrope>
</style>