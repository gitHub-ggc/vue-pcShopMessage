<template>
  <div id="login">
      <el-form label-position="top" label-width="80px" :model="form" status-icon :rules="rules" ref="ruleForm">
        <h1>登入页面</h1>
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <div class="loginButtom">
            <el-button type="primary" @click="submitForm('ruleForm')">登入</el-button>
            <el-button  @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form>
    </div>
</template>

<script>
import {dengRu} from "../../assets/interface/interface";
export default {
  data() {
     var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('输入用户名'));
        } else {
          if (this.form.name !== '') {
            this.$refs.ruleForm.validateField('pass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
    return {
      form: {
        name: "",
        password: ""
      },
      rules: {
          name: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass2, trigger: 'blur' }
          ],
         
        }
    };
  },
  components: {},
  methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             var mesage=dengRu(this.form.name,this.form.password);
             console.log(mesage)
            if(this.form.name==mesage.name && this.form.password ==mesage.password){
              localStorage.setItem("token",mesage.token);
              localStorage.setItem("name",mesage.name);
              this.$message(mesage.mes || mesage);
              this.form.name="";
              this.form.password="";
              this.$router.push("/home");
            }else {
            this.$message.error("用户名或者密码错误");
            return false;
          }
         } 
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      } 
  }
};
</script>

<style scoped>
#login {
  padding: 0;
  margin: 0;
}
h1{
    text-align: center;
}
.el-form {
  width:500px;
  margin:0 auto;
  margin-top:200px;
  padding:10px;
  background-color: skyblue;
}
.el-form-item{
    text-align:center;
}
.loginButtom{
    margin-top:10px;
    text-align:center;
}
</style>