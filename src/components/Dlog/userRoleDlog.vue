<template>
  <div>
    <el-dialog title="分配角色" :visible.sync="that.roleDialogVisible" width="30%" @open="roleOpen()">
      <el-form ref="forms" :model="form" label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="角色"  prop="role">
          <el-select v-model="form.role" placeholder="请选择角色">
            <el-option v-for="(item,index) in options" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="handleOkRole('forms')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {roleList}from "../../assets/interface/interface";
export default {
  props: ["that"],
  data() {
    return {
      dialogVisible: false,
      form: {
        name: ""
      },
      options:[]
    };
  },
  methods: {
    handleOkRole(formName) {
      this.$emit("roleDalogData", this.dialogVisible);
      this.$refs[formName].resetFields();
    },
    getRoleData(){
      this.options=roleList()
    },
    roleOpen(){
     this.form.name=this.that.roleName;
    }
  },
  created(){
    this.getRoleData();
  }
};
</script>
<style scope>
</style>