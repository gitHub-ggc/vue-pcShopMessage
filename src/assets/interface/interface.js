import axios from "axios";
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let AUTH_TOKEN =localStorage.getItem("token");
  if(config.url !="login"){
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  }
  if(config.url !="login" && AUTH_TOKEN){
   this.$router.push("/login")
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {  
  return Promise.reject(error);
});
// 登入接口的假数据
export function dengRu(name,password){
   if(name =="admin" && password ==123){
    return {mes:'登入成功',name:"admin",password:"123",token:"abcdefg"};
   }else if(name =="ggc" && password ==123456){
    return {mes:'登入成功',name:"ggc",password:"123456",token:"abcdefg"};
   }else {
    return "用户名或者密码错误";
   }
}
//获取用户列表数据接口
export function userList(){
    return {data:[{
        id:1,
        date: '2016-05-02',
        name: '王小虎1',
        phone:"15879106420",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:2,
        date: '2016-05-04',
        name: '王小虎2',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:true,
        opreation:"123"
      }, {
        id:3,
        date: '2016-05-01',
        name: '王小虎3',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
          id:4,
        date: '2016-05-03',
        name: '王小虎4',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:true,
        opreation:"123"
      }, {
        id:5,
        date: '2016-05-03',
        name: '王小虎21',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:true,
        opreation:"123"
      }, {
        id:6,
        date: '2016-05-03',
        name: '王小虎20',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:7,
        date: '2016-05-03',
        name: '王小虎19',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:8,
        date: '2016-05-03',
        name: '王小虎18',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:9,
        date: '2016-05-03',
        name: '王小虎17',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:true,
        opreation:"123"
      }, {
        id:10,
        date: '2016-05-03',
        name: '王小虎16',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:11,
        date: '2016-05-03',
        name: '王小虎15',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:12,
        date: '2016-05-03',
        name: '王小虎14',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:13,
        date: '2016-05-03',
        name: '王小虎13',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:true,
        opreation:"123"
      }, {
        id:14,
        date: '2016-05-03',
        name: '王小虎5',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:true,
        opreation:"123"
      }, {
        id:15,
        date: '2016-05-03',
        name: '王小虎12',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:16,
        date: '2016-05-03',
        name: '王小虎11',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:17,
        date: '2016-05-03',
        name: '王小虎10',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:true,
        opreation:"123"
      }, {
        id:18,
        date: '2016-05-03',
        name: '王小虎9',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:true,
        opreation:"123"
      }, {
        id:19,
        date: '2016-05-03',
        name: '王小虎6',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:20,
        date: '2016-05-03',
        name: '王小虎7',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }, {
        id:21,
        date: '2016-05-03',
        name: '王小虎8',
        phone:"15879106422",
        email:"3294047670@qq.com",
        userState:false,
        opreation:"123"
      }],total:21}
}
//角色下拉框数据
export function roleList(){
  return ["青铜","白银","黄金","铂金","钻石","星耀","王者"]
}
//权限列表数据
export function quanXianData(){
  return [
    {
      date: "商品管理",
      name: "goods",
      address: "0",
      id:43
    },
    {
      date: "订单管理",
      name: "orders",
      address: "0",
      id:66
    },
    {
      date: "权限管理",
      name: "rights",
      address: "0",
      id:49
    },
    {
      date: "商品列表",
      name: "goods",
      address: "1",
      id:88
    },
    {
      date: "添加商品",
      name: "goods",
      address: "2",
      id:25
    },
    {
      date: "订单列表",
      name: "orders",
      address: "1",
      id:43
    },
    {
      date: "添加订单",
      name: "orders",
      address: "2",
      id:89
    },
    {
      date: "用户列表",
      name: "users",
      address: "1",
      id:7
    },{
      date: "订单管理",
      name: "orders",
      address: "0",
      id:66
    },
    {
      date: "权限管理",
      name: "rights",
      address: "0",
      id:49
    },
    {
      date: "商品列表",
      name: "goods",
      address: "1",
      id:88
    },
    {
      date: "添加商品",
      name: "goods",
      address: "2",
      id:25
    },{
      date: "商品管理",
      name: "goods",
      address: "0",
      id:43
    },
    {
      date: "订单管理",
      name: "orders",
      address: "0",
      id:66
    },
    {
      date: "权限管理",
      name: "rights",
      address: "0",
      id:49
    },
    {
      date: "商品列表",
      name: "goods",
      address: "1",
      id:88
    },
    {
      date: "添加商品",
      name: "goods",
      address: "2",
      id:25
    },
    {
      date: "订单列表",
      name: "orders",
      address: "1",
      id:43
    },
    {
      date: "添加订单",
      name: "orders",
      address: "2",
      id:89
    },
    {
      date: "用户列表",
      name: "users",
      address: "1",
      id:7
    },{
      date: "订单管理",
      name: "orders",
      address: "0",
      id:66
    },
    {
      date: "权限管理",
      name: "rights",
      address: "0",
      id:49
    },
    {
      date: "商品列表",
      name: "goods",
      address: "1",
      id:88
    },
    {
      date: "添加商品",
      name: "goods",
      address: "2",
      id:25
    }
  ]
}
//角色列表数据
export function jiaoSheData(){
  return [
    {
      date: "主管",
      name: "技术负责人",
      id:0,
      children:[
        {
          id:1,
          authName:"商品管理1",
          path:"null",
          children:[
             {
              id:2,
              authName:"商品列表1",
              path:"null",
              children:[
                {
                  id:3,
                  authName:"添加商品1",
                  path:"null",
                }, {
                  id:4,
                  authName:"添加商品2",
                  path:"null",
                }, {
                  id:5,
                  authName:"添加商品3",
                  path:"null",
                }, {
                  id:6,
                  authName:"添加商品4",
                  path:"null",
                }, {
                  id:7,
                  authName:"添加商品4",
                  path:"null",
                }, {
                  id:8,
                  authName:"添加商品4",
                  path:"null",
                }, {
                  id:9,
                  authName:"添加商品4",
                  path:"null",
                }, {
                  id:10,
                  authName:"添加商品4",
                  path:"null",
                }, {
                  id:11,
                  authName:"添加商品4",
                  path:"null",
                }, {
                  id:12,
                  authName:"添加商品4",
                  path:"null",
                }
              ]
            },{
              id:13,
              authName:"商品列表2",
              path:"null",
              children:[
                {
                  id:14,
                  authName:"添加商品1",
                  path:"null",
                }, {
                  id:15,
                  authName:"添加商品2",
                  path:"null",
                }, {
                  id:16,
                  authName:"添加商品3",
                  path:"null",
                }, {
                  id:17,
                  authName:"添加商品4",
                  path:"null",
                }
              ]
            },
            {
              id:18,
              authName:"商品列表3",
              path:"null",
              children:[
                {
                  id:19,
                  authName:"添加商品1",
                  path:"null",
                }, {
                  id:20,
                  authName:"添加商品2",
                  path:"null",
                }, {
                  id:21,
                  authName:"添加商品3",
                  path:"null",
                }, {
                  id:22,
                  authName:"添加商品4",
                  path:"null",
                }
              ]
            }
          ]
        }
      ]
    },{
      date: "测试角色",
      name: "测试角色描述",
      address: "0",
      id:23,
      children:[
        {
          id:24,
          authName:"商品管理2",
          path:"null",
          children:[
             {
              id:25,
              authName:"商品列表1",
              path:"null",
            },{
              id:26,
              authName:"商品列表2",
              path:"null",
            },
            {
              id:27,
              authName:"商品列表3",
              path:"null",
              children:[
                {
                  id:28,
                  authName:"添加商品1",
                  path:"null",
                }, {
                  id:29,
                  authName:"添加商品2",
                  path:"null",
                }, {
                  id:30,
                  authName:"添加商品3",
                  path:"null",
                }, {
                  id:31,
                  authName:"添加商品4",
                  path:"null",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      date: "测试角色2",
      name: "测试描述2",
      address: "0",
      id:32,
      children:[
        {
          id:33,
          authName:"商品管理3",
          path:"null",
          children:[
             {
              id:34,
              authName:"商品列表1",
              path:"null",
            },{
              id:35,
              authName:"商品列表2",
              path:"null",
            },
            {
              id:36,
              authName:"商品列表3",
              path:"null",
              children:[
                {
                  id:37,
                  authName:"添加商品1",
                  path:"null",
                }, {
                  id:38,
                  authName:"添加商品2",
                  path:"null",
                }, {
                  id:39,
                  authName:"添加商品3",
                  path:"null",
                }, {
                  id:40,
                  authName:"添加商品4",
                  path:"null",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      date: "超级管理员",
      name: "超级管理员",
      address: "1",
      id:41,
      children:[
        {
          id:42,
          authName:"商品管理4",
          path:"null",
          children:[
             {
              id:43,
              authName:"商品列表1",
              path:"null",
            },{
              id:44,
              authName:"商品列表2",
              path:"null",
            },
            {
              id:45,
              authName:"商品列表3",
              path:"null",
              children:[
                {
                  id:46,
                  authName:"添加商品1",
                  path:"null",
                }, {
                  id:47,
                  authName:"添加商品2",
                  path:"null",
                }, {
                  id:48,
                  authName:"添加商品3",
                  path:"null",
                }, {
                  id:49,
                  authName:"添加商品4",
                  path:"null",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      date: "test",
      name: "test",
      address: "2",
      id:50,
      children:[
        {
          id:51,
          authName:"商品管理5",
          path:"null",
          children:[
             {
              id:52,
              authName:"商品列表1",
              path:"null",
            },{
              id:53,
              authName:"商品列表2",
              path:"null",
            },
            {
              id:54,
              authName:"商品列表3",
              path:"null",
              children:[
                {
                  id:55,
                  authName:"添加商品1",
                  path:"null",
                }, {
                  id:56,
                  authName:"添加商品2",
                  path:"null",
                }, {
                  id:57,
                  authName:"添加商品3",
                  path:"null",
                }, {
                  id:58,
                  authName:"添加商品4",
                  path:"null",
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
//设置动态导航
export function getMeauData(){
  return (
    [
      {id:1,meauItem:"用户管理",children:["用户列表"]},
      {id:2,meauItem:"权限管理",children:["权限列表","角色列表"]},
      {id:1,meauItem:"商品管理",children:["商品列表","分类参数","商品分类"]},
      {id:1,meauItem:"订单管理",children:["订单列表"]},
      {id:1,meauItem:"数据统计",children:["数据报表"]},
    ]
  )
}
//商品分类数据
export function shopType(){
  return [{
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致'
      }, {
        value: 'fankui',
        label: '反馈'
      }, {
        value: 'xiaolv',
        label: '效率'
      }, {
        value: 'kekong',
        label: '可控'
      }]
    }, {
      value: 'daohang',
      label: '导航',
      children: [{
        value: 'cexiangdaohang',
        label: '侧向导航'
      }, {
        value: 'dingbudaohang',
        label: '顶部导航'
      }]
    }]
  }, {
    value: 'zujian',
    label: '组件',
    children: [{
      value: 'basic',
      label: 'Basic',
      children: [{
        value: 'layout',
        label: 'Layout 布局'
      }, {
        value: 'color',
        label: 'Color 色彩'
      }, {
        value: 'typography',
        label: 'Typography 字体'
      }, {
        value: 'icon',
        label: 'Icon 图标'
      }, {
        value: 'button',
        label: 'Button 按钮'
      }]
    }, {
      value: 'form',
      label: 'Form',
      children: [{
        value: 'radio',
        label: 'Radio 单选框'
      }, {
        value: 'checkbox',
        label: 'Checkbox 多选框'
      }, {
        value: 'input',
        label: 'Input 输入框'
      }, {
        value: 'input-number',
        label: 'InputNumber 计数器'
      }, {
        value: 'select',
        label: 'Select 选择器'
      }, {
        value: 'cascader',
        label: 'Cascader 级联选择器'
      }, {
        value: 'switch',
        label: 'Switch 开关'
      }, {
        value: 'slider',
        label: 'Slider 滑块'
      }, {
        value: 'time-picker',
        label: 'TimePicker 时间选择器'
      }, {
        value: 'date-picker',
        label: 'DatePicker 日期选择器'
      }, {
        value: 'datetime-picker',
        label: 'DateTimePicker 日期时间选择器'
      }, {
        value: 'upload',
        label: 'Upload 上传'
      }, {
        value: 'rate',
        label: 'Rate 评分'
      }, {
        value: 'form',
        label: 'Form 表单'
      }]
    }, {
      value: 'data',
      label: 'Data',
      children: [{
        value: 'table',
        label: 'Table 表格'
      }, {
        value: 'tag',
        label: 'Tag 标签'
      }, {
        value: 'progress',
        label: 'Progress 进度条'
      }, {
        value: 'tree',
        label: 'Tree 树形控件'
      }, {
        value: 'pagination',
        label: 'Pagination 分页'
      }, {
        value: 'badge',
        label: 'Badge 标记'
      }]
    }, {
      value: 'notice',
      label: 'Notice',
      children: [{
        value: 'alert',
        label: 'Alert 警告'
      }, {
        value: 'loading',
        label: 'Loading 加载'
      }, {
        value: 'message',
        label: 'Message 消息提示'
      }, {
        value: 'message-box',
        label: 'MessageBox 弹框'
      }, {
        value: 'notification',
        label: 'Notification 通知'
      }]
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'menu',
        label: 'NavMenu 导航菜单'
      }, {
        value: 'tabs',
        label: 'Tabs 标签页'
      }, {
        value: 'breadcrumb',
        label: 'Breadcrumb 面包屑'
      }, {
        value: 'dropdown',
        label: 'Dropdown 下拉菜单'
      }, {
        value: 'steps',
        label: 'Steps 步骤条'
      }]
    }, {
      value: 'others',
      label: 'Others',
      children: [{
        value: 'dialog',
        label: 'Dialog 对话框'
      }, {
        value: 'tooltip',
        label: 'Tooltip 文字提示'
      }, {
        value: 'popover',
        label: 'Popover 弹出框'
      }, {
        value: 'card',
        label: 'Card 卡片'
      }, {
        value: 'carousel',
        label: 'Carousel 走马灯'
      }, {
        value: 'collapse',
        label: 'Collapse 折叠面板'
      }]
    }]
  }, {
    value: 'ziyuan',
    label: '资源',
    children: [{
      value: 'axure',
      label: 'Axure Components'
    }, {
      value: 'sketch',
      label: 'Sketch Templates'
    }, {
      value: 'jiaohu',
      label: '组件交互文档'
    }]
  }]
}
//获取商品参数
export function getShopParameter(){
  return [
    {id:1,name:"板式",children:["a","b","c","d"]},
    {id:1,name:"内存",children:["aa","ba"]},
    {id:1,name:"CPU主频",children:["bbb","ccc","ddd"]}
  ]
}
//商品分类数据
export function getShopFL(){
  return  [{
    id: '12987122',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987123',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987125',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987126',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  },{
    id: '12987122',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987123',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987125',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987126',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  },{
    id: '12987122',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987123',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987125',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }, {
    id: '12987126',
    name: '好滋好味鸡蛋仔',
    category: '江浙小吃、小吃零食',
    desc: '荷兰优质淡奶，奶香浓而不腻',
    address: '上海市普陀区真北路',
    shop: '王小虎夫妻店',
    shopId: '10333'
  }]
}