
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login/Login.vue";
import Home from "../components/page/Home.vue";
import HomeList from "../components/page/HomeList";
import JurisdictionList from "../components/page/JurisdictionList.vue";
import RoleList from "../components/page/RoleList.vue"
import { Message } from 'element-ui';
import GoodsList from "../components/page/GoodsList.vue";
import GoodsCate from "../components/page/GoodsCate.vue";
import GoodsFL from "../components/page/GoodsFL.vue";
import Order from "../components/page/Order.vue";
import Echars from "../components/page/Echars.vue"
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
const router = new VueRouter({
    routes:[
        {
            path:"/login",
            component:Login
        },
        {
            path:"/",
            redirect:"/login"
        },
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"/",
                    redirect:"/homeList"
                },
                {
                    path:"/homeList",
                    component:HomeList
                },
                {
                    path:"/jurisdictionList",
                    component:JurisdictionList
                },
                {
                    path:"/role",
                    component:RoleList
                },
                {
                    path:"/goodsList",
                    component:GoodsList
                },
                {
                    path:"/goodsCate",
                    component:GoodsCate
                },
                {
                    path:"/goodsFL",
                    component:GoodsFL
                },
                {
                    path:"/goodsOrder",
                    component:Order
                },
                {
                    path:"/echars",
                    component:Echars
                }
            ]
        }
    ]
})
router.beforeEach((to,from,next)=>{
   
    if(to.path=="/login"){
     next();
    }else{
        const token=localStorage.getItem("token");
        
        if(!token){
          router.push("/login");
          Message.success("成功")
        }else{
            next();
        }
    }
})
export default router;