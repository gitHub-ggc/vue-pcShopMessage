<template>
  <div>
    <el-dialog title="编辑用户" :visible.sync="that.editDialogVisible" width="40%" @open="openDalog">
      <el-form
       :model="that.editData"
        ref="editValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop=""
          :rules="[
      { required: true, message: '用户名不能为空'},
    ]"
        >
          <el-input type="text" v-model="editData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
        >
          <el-input type="text" v-model.number="editData.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="电话"
        >
          <el-input type="text" v-model.number="editData.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handCancle">取 消</el-button>
        <el-button type="primary" @click="submitForm('editValidateForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["that"],
  data() {
    return {
       editData:{
          name:"",
          email:"",
          phone:""
       },
        dialogVisible:false
    };
  },
  methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$emit("editDalogData",this.dialogVisible);
          }else{
              console.log(11)
          }
        });
      },
      handCancle() {
        console.log(22)
      },
      openDalog(){
        this.editData.name=this.that.editData.name;
        this.editData.email=this.that.editData.email;
        this.editData.phone=this.that.editData.phone;
      }
  }
};
</script>
<style scope>
</style>