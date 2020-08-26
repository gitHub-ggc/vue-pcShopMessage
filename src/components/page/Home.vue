<template>
  <div class="content">
    <el-container>
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <img src="../../assets/img/logo.png" alt width="100%" height="50" />
            </div>
          </el-col>
          <el-col :span="19">
            <div class="grid-content bg-purple-light">电商后台管理</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <span :style="{'margin-right':'10px'}">{{name}}</span>
              <span @click.prevent="home_back">退出</span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            router
            unique-opened
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handSelect"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/homeList">
                <i class="el-icon-user"></i>用户列表
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="/role">
                <i class="el-icon-s-goods"></i>角色列表
              </el-menu-item>
              <el-menu-item index="/jurisdictionList">
                <i class="el-icon-star-on"></i>权限列表
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-grid"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="/goodsList">
                <i class="el-icon-menu"></i>商品列表
              </el-menu-item>
              <el-menu-item index="/goodsCate">
                <i class="el-icon-d-caret"></i>分类参数
              </el-menu-item>
              <el-menu-item index="/goodsFL">
                <i class="el-icon-share"></i>商品分类
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="goodsOrder">
                <i class="el-icon-date"></i>订单列表
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-folder-opened"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item index="/echars">
                <i class="el-icon-folder-add"></i>数据报表
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-tabs v-model="editableTabsValue" type="card" closable  @edit="handleTabsEdit">
            <el-tab-pane
              :key="i"
              v-for="(item,i) in editableTabs"
              :label="item.title"
              :name="item.name"
            ></el-tab-pane>
          </el-tabs>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getMeauData } from "../../assets/interface/interface";
export default {
  data() {
    return {
      name: "",
      meauData: [],
      editableTabsValue: '1',
      editableTabs: [{
          title: '用户列表',
          name: '1',
          path: '/homeList'
        }],
        tabIndex: 2,
        tiname:[
          {path:"/homeList",title:"用户列表"},
          {path:"/role",title:"角色列表"},
          {path:"/jurisdictionList",title:"权限列表"},
          {path:"/goodsList",title:"商品列表"},
          {path:"/goodsCate",title:"分类参数"},
          {path:"/goodsFL",title:"商品分类"},
          {path:"/goodsOrder",title:"订单列表"},
          {path:"/echars",title:"数据统计"}
        ]
    };
  },
  created() {
    this.getUserName();
    this.loginJudge();
    this.getHomeMeau();
  },
  methods: {
    getUserName() {
      const name = localStorage.getItem("name");
      this.name = name;
    },
    loginJudge() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.$router.push("/login");
      }
    },
    home_back() {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      this.$router.push("/login");
    },
    getHomeMeau() {
      this.meauData = getMeauData();
    },
    handSelect(keyPath) {
      for(var j=0;j<this.editableTabs.length;j++){
        if(this.editableTabs[j].path==keyPath){
          return;
        } 
      }
      for(var i=0;i<this.tiname.length;i++){
         if(this.tiname[i].path==keyPath){
            let newTabName = ++this.tabIndex + '';
           this.editableTabs.push({title:this.tiname[i].title,name:newTabName,path:keyPath})
           this.editableTabsValue = newTabName;
         }
      }
    },
    // sss
    handleTabsEdit(targetName, action) {
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
  }
};
</script>
<style scrop>
.el-header {
  background-color: pink;
}
.el-aside {
  background-color: green;
}
.el-main {
  /* background-color: #ccc; */
}
.bg-purple {
  margin-top: 5px;
}
.bg-purple-light {
  text-align: center;
  line-height: 59px;
  font-size: 20px;
  color: #fff;
}
.bg-purple {
  line-height: 50px;
  color: #fff;
}
.content,
.el-menu,
.el-container {
  height: 100%;
}
.content .el-submenu .el-menu-item {
  min-width: 199px;
}
</style>