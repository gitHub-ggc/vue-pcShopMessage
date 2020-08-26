<template>
  <div>
    <MyBread :that="this" />
    <el-button type="success">添加分类</el-button>
    <el-table :data="tableData" style="width: 100%" height="450">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="clickEdit(scope.row)" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4000"
    ></el-pagination>
  </div>
</template>
<script>
import MyBread from "../orthers/MyBread";
import { getShopFL } from "../../assets/interface/interface";
export default {
  data() {
    return {
      title: "商品管理",
      title2: "商品分类",
      tableData: [],
      currentPage4: 1
    };
  },
  components: {
    MyBread
  },
  created() {
    this.getShopFL();
  },
  methods: {
    getShopFL() {
      this.tableData = getShopFL();
    }
  }
};
</script>
<style scope>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>