<template>
  <div>
    <el-dialog :title="that.dilagTitle" :visible.sync="that.dialogVisible" width="40%">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="name"
          :rules="[
      { required: true, message: '用户名不能为空'},
    ]"
        >
          <el-input type="text" v-model.number="numberValidateForm.name" autocomplete="off"></el-input>
        </el-form-item>
     <el-form-item
          label="密码"
          prop="password"
          :rules="[
      { required: true, message: '密码不能为空'},
    ]"
        >
          <el-input type="password" v-model.number="numberValidateForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
        >
          <el-input type="email" v-model.number="numberValidateForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="电话"
        >
          <el-input type="phone" v-model.number="numberValidateForm.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handCancle">取 消</el-button>
        <el-button type="primary" @click="submitForm('numberValidateForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["that"],
  data() {
    return {
         numberValidateForm: {
          name: '',
          password:"",
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
            // this.numberValidateForm.id=this.that.totalTableData.length;
            // this.that.totalTableData.push(this.numberValidateForm);
            // this.$message.success("数据添加成功");
            // this.$emit("addData",this.dialogVisible);
            this.$refs[formName].resetFields();
          } 
        });
      },
      handCancle() {
        
      }
  }
};
</script>
<style scope>
</style>