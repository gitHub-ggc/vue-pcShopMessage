<template>
    <div>
        <MyBread :that="this"/>
        <el-button plain disabled>添加角色</el-button>
        <el-table :data="tableData" border style="width: 100%" >
      
      <el-table-column  width="60" type="expand">
          <template slot-scope="scope">
              <el-row v-for="(item1,i) in scope.row.children" :key="i">
                  <el-col :span="4">
                      <el-tag @close="delRight(scope.row.id,item1.id)" closable>{{item1.authName}}</el-tag><i class="el-icon-arrow-right"></i>
                  </el-col>
                  <el-col :span="20">
                      <el-row v-for="(item2,i) in item1.children" :key="i">
                          <el-col :span="4">
                              <el-tag @close="delRight(scope.row.id,item2.id)" type="success" closable>{{item2.authName}}</el-tag><i class="el-icon-arrow-right"></i>
                          </el-col>
                          <el-col :span="20">  
                              <el-tag @close="delRight(scope.row.id,item3.id)" type="warning" closable v-for="(item3,i) in item2.children" :key="i">{{item3.authName}}</el-tag>
                          </el-col>
                      </el-row>
                  </el-col>
              </el-row>
              <span v-if="scope.row.children.length==0">未分配权限</span>
          </template>
      </el-table-column>
      <el-table-column  label="#" width="60" type="index" ></el-table-column>
      <el-table-column prop="date" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="name" label="角色描述" width="180"></el-table-column>
      <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle @click="editRole(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="delRole(scope.row)"></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="distributionRole(scope.row)"></el-button>
          </template>
      </el-table-column>
    </el-table>
    <!-- 分配权限弹出框 -->
    <CancelRightDlog :that="this" @RoleDlog="CloseRightDlog()"/>
    </div>
</template>
<script>
import MyBread from "../orthers/MyBread";
import {jiaoSheData} from "../../assets/interface/interface";
import CancelRightDlog from "../../components/Dlog/CancelRightDlog"
export default {
    data(){
        return{
            title:"角色管理",
            title2:"角色列表",
            tableData:[],
            RightDialogVisible:false,
            rightData:[]
        }
    },
    components:{
        MyBread,
        CancelRightDlog
    },
    created(){
        this.getRoleListData()
    },
    methods:{
        //获取角色列表数据
        getRoleListData(){
            this.tableData=jiaoSheData();
            this.aa();
        },
        //删除权限功能
        delRight(roleId,rightId){
          //发请求
          this.$message.success("已删除角色ID为:"+roleId+"权限ID为:"+rightId+"的权限");
          this.getRoleListData();
        },
        // 点击分配权限弹出框
        distributionRole(mes){

          this.RightDialogVisible=true;
          console.log(mes);
        },
        //关闭权限弹出框
        CloseRightDlog(mes){
          this.RightDialogVisible=mes;
        },
        aa(){
            for(var i=0;i<this.tableData.length;i++){
                 this.rightData.push(this.tableData[i].children[0])
            }
        }
    },
}
</script>
<style scrop>
 .el-table{
     margin-top: 10px;;
 }   
</style>