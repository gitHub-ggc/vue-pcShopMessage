<template>
  <div>
    <MyBread :that="this" />
    <el-alert title="只允许为第三分类设置参数" type="error"></el-alert>
    <span style="margin-right:10px;">商品分类</span>
    <el-cascader
      v-model="value"
      :options="options"
      style="margin:10px 0;"
      :show-all-levels="false"
    ></el-cascader>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="动态参数" name="first">动态参数</el-tab-pane>
      <el-tab-pane label="静态参数" name="second">静态参数</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MyBread from "../orthers/MyBread";
import { shopType } from "../../assets/interface/interface";
export default {
  data() {
    return {
      title: "商品列表",
      title2: "商品参数",
      options: []
    };
  },
  components: {
    MyBread
  },
  created() {
    this.getShopCate();
  },
  methods: {
    getShopCate() {
      this.options = shopType();
    }
  }
};
</script>
<style scope>
</style>