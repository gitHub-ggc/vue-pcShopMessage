<template>
  <div>
    <el-dialog title="分配权限" :visible.sync="that.RightDialogVisible" width="30%" @open="rightOpen()">
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="defaultCheck"
        :props="defaultProps"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="handOkRight()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ["that"],
  data() {
    return {
      dialogVisible: false,
       data: [],
         defaultProps: {
          children: 'children',
          label: 'authName'
        },
        idArr:[],
        defaultCheck:[54,41,23,7,16,33]
    };
  },
  methods: {
    rightOpen() {
      this.data=this.that.rightData;
    },
    handOkRight() {
      this.$emit("RoleDlog", this.dialogVisible);
    }
  }
};
</script>
<style scope>
</style>