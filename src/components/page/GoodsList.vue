<template>
  <div class="goodsList">
    <MyBread :that="this" />
    <div v-if="defaultContent == 'show'">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-button @click.prevent="searchTableData" slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="success" plain @click.prevent="addGoodsList()">添加按钮</el-button>
      <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column property="date" label="商品名称" width="120"></el-table-column>
        <el-table-column property="name" label="商品价格(元)" width="120"></el-table-column>
        <el-table-column property="address" label="商品重量"></el-table-column>
        <el-table-column property="address" label="创建日期"></el-table-column>
        <el-table-column label="操作">
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
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="pages"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
    <div v-else>
      <div class="title">
        <el-button type="success" icon="el-icon-check" circle></el-button>&nbsp;&nbsp;
        <span>添加商品信息</span>
      </div>
      <el-steps :active="active * 1" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
      </el-steps>
      <el-tabs
        v-model="active"
        :tab-position="tabPosition"
        style="margin-top:10px;"
        @tab-click="tabChange()"
      >
        <el-tab-pane name="1" label="基本信息">
          <el-form label-position="top" label-width="80px" :model="formLabelAlign">
            <el-form-item label="商品名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="商品重量">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="商品数量">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="商品分类">
              <el-cascader v-model="value" :options="options"></el-cascader>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane name="2" label="商品参数">
          <div v-for="(item,index) in parameter" :key="index">
            <div>{{item.name}}</div>
            <el-checkbox-group v-model="checkList" style="margin:10px;">
              <el-checkbox
                v-for="(item2,index) in item.children"
                :key="index"
                :label="item2"
                border
              ></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-tab-pane>
        <el-tab-pane name="3" label="商品属性">商品属性</el-tab-pane>
        <el-tab-pane name="4" label="商品图片">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
           :on-success="handlePreview"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-tab-pane>
        <el-tab-pane name="5" label="商品内容">
          <el-button type="success">添加商品</el-button>
          <quill-editor></quill-editor>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import MyBread from "../orthers/MyBread";
import { shopType, getShopParameter } from "../../assets/interface/interface";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  data() {
    return {
      checkList: [],
      input3: "",
      title: "商品管理",
      title2: "商品列表",
      pages: 4,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      defaultContent: "show",
      active: "1",
      tabPosition: "left",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      value: [],
      options: [],
      parameter: null
    };
  },
  components: {
    MyBread,
    quillEditor
  },
  methods: {
    addGoodsList() {
      this.defaultContent = "hidden";
    },
    handleChoose(e) {
      console.log(e);
    },
    getShoppingType() {
      this.options = shopType();
    },
    tabChange() {
      if (this.active != "2") {
        return;
      }
      if (this.value.length != 3) {
        return;
      }
      this.parameter = getShopParameter();
    },
    handlePreview(response, file, fileList) {
        console.log(response, file, fileList);
      }
  },
  created() {
    this.getShoppingType();
  }
};
</script>
<style scope>
.goodsList .el-input-group {
  width: 40%;
  margin-top: 10px;
}
.el-button--success.is-plain {
  margin-left: 10px;
}
.el-pagination {
  margin-top: 10px;
}
.title {
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  background-color: #f0f7eb;
  text-align: center;
}
.title .el-button.is-circle {
  padding: 5px;
}
.title span {
  font-size: 12px;
  color: green;
}
.el-steps {
  margin-top: 10px;
}
.ql-editor{
  min-height: 300px;
}
</style>