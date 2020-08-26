<template>
  <div class="homeList">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="javascript:;">用户管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
      <el-button @click.prevent="searchTableData" slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-button type="success" plain @click.prevent="addUserList()">添加按钮</el-button>
    <el-table  :data="tableData" highlight-current-row style="width: 100%">
      <el-table-column type="index" lable="1111" width="50"></el-table-column>
      <el-table-column property="name" label="姓名" width="120"></el-table-column>
      <el-table-column property="email" label="邮箱" width="180"></el-table-column>
      <el-table-column property="phone" label="电话" width="120"></el-table-column>
      <el-table-column property="date" label="创建日期" width="120"></el-table-column>
      <el-table-column property="userState" label="用户状态" width="120">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.userState" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column property="opreation" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            icon="el-icon-delete"
            circle
          ></el-button>
          <el-button type="success" icon="el-icon-check" circle @click="userRole(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    <!-- 添加弹出框 -->
     <addEditUserDlog :that="this" @addData="addDataCallback"/>
     <!-- 修改弹出框 -->
     <editUserDlog :that="this" @editDalogData="editDataCallback"/>
     <!-- 用户角色弹出框 -->
     <userRoleDlog :that="this" @roleDalogData="roleDataCallback"/>
  </div>
</template>
<script>
import {userList} from "../../assets/interface/interface";
import addEditUserDlog from "../Dlog/addEditUserDlog";
import editUserDlog from "../Dlog/eaditUserDlog";
import userRoleDlog from "../Dlog/userRoleDlog";
export default {
  data() {
    return {
      num:0,
      totalTableData:[],
      input3: "",
      currentPage4: 4,
      total:null,
      dialogVisible:false,
      dilagTitle:"添加用户",
      editDialogVisible:false,
      editData:null,
      roleDialogVisible:false,
      roleName:""
    };
  },
  methods: { 
    //   点击添加按钮触发事件
    addUserList() {
      this.dialogVisible=true;
    },
    //   跳转页发生改变触发事件
    handleSizeChange(val) {
      this.num=val;
    },
    //   当前页发生改变事件
    handleCurrentChange(val) {
      this.num=val;
    },
     //   获取表格数据
    getUserTableList(){
        let data=userList()
        this.totalTableData=data.data;
        this.total=data.total;
    },
    //点击编辑按钮
    handleEdit(a, b){
     this.editData=b;
     this.editDialogVisible=true;
    },
    //点击删除按钮
    handleDelete(a,b){
        for(var i=0;i<this.totalTableData.length;i++){
                  if(this.totalTableData[i].id==b.id){
                       this.totalTableData.splice(i,1);
                  }
                }
    },
    //点击所搜获取数据
    searchTableData(){
        this.num=this.input3;
        this.input3=""
    },
    //关闭添加数据弹出框
    addDataCallback(mes){
        this.dialogVisible=mes
    },
    editDataCallback(mes){
      this.editDialogVisible=mes
    },
    // 用户角色分配
    userRole(mes){
      this.roleName=mes.name;
      this.roleDialogVisible=true;
    },
    roleDataCallback(mes){
      this.roleDialogVisible=mes;
    }
  },
  computed:{
    tableData(){
        const {totalTableData,num}=this;
        console.log(num);
        let flistData;
                 flistData=totalTableData.filter(p=>p.name.indexOf(num) !==-1);   
            if(this.num ==0){
                flistData=totalTableData.filter(p=>p.id <=5);
            }else if(this.num ==10){
                flistData=totalTableData.filter(p=>p.id <=10);
            }else if(this.num ==15){
                flistData=totalTableData.filter(p=>p.id <=15);
            }else if(this.num ==20){
                flistData=totalTableData.filter(p=>p.id <=20);
            }else if(this.num ==1){
                flistData=totalTableData.filter(p=>p.id <=5);
            }else if(this.num ==2){
                flistData=totalTableData.filter(p=>p.id >5 && p.id <=10);
            }else if(this.num ==3){
                flistData=totalTableData.filter(p=>p.id >10 && p.id <=15);
            }else if(this.num ==4){
                flistData=totalTableData.filter(p=>p.id >15 && p.id <=20);
            }else if(this.num ==5){
                flistData=totalTableData.filter(p=>p.id >20 );
            }
            
        return flistData;

    }
  },
  created(){
    this.getUserTableList();
  },
  components:{
      addEditUserDlog,
      editUserDlog,
      userRoleDlog
  }
};
</script>
<style scrop>
.homeList .el-input-group {
  width: 40%;
  margin-top: 10px;
}
.el-button--success.is-plain {
  margin-left: 10px;
}
.el-pagination {
  margin-top: 10px;
}
</style>