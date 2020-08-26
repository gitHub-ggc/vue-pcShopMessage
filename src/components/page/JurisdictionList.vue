<template>
  <div id="JurisdictionListPage">
    <MyBread :that="this" />
    <el-table :data="tableData" border style="width: 100%" height="800">
      <el-table-column  type="index"  label="#" width="60"></el-table-column>
      <el-table-column prop="date" label="权限名称" width="180"></el-table-column>
      <el-table-column prop="name" label="路径" width="180"></el-table-column>
      <el-table-column prop="address" label="层级">
          <template slot-scope="scope">
             <span v-if="scope.row.address=='0'">一级</span>
             <span v-if="scope.row.address=='1'">二级</span>
             <span v-if="scope.row.address=='2'">三级</span>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {quanXianData} from "../../assets/interface/interface";
import MyBread from "../../components/orthers/MyBread";
export default {
  data() {
    return {
      tableData: [],
      title:"权限管理",
      title2:"权限列表"
    };
  },
  methods:{
   //获取表格数据
   getTableList(){
       this.tableData=quanXianData();
   }
  },
  created(){
      this.getTableList()
  },
  components:{
      MyBread
  }
};
</script>
<style scrop>
.el-breadcrumb{
    margin-bottom:10px;
}
</style>