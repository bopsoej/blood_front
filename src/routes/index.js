import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import Home from '../components/home'
import Other from '../components/other'
import Apply from '../components/apply'
import Point from '../components/MyPoint'
import PointStore from '../components/PointStore'
import store from "../store";
import Register from "../components/register"
import Information from "../components/information"
import {getCookie,setCookie} from "../util/util";
import {loginCheck,fetch} from "../util/http";

Vue.use(Router)

const VueRoutes=new Router({
  routes:[
    {
      path:'/home',
      name:'home',
      component:Home,
      meta:{requireAuth:true},
      children:[
        {path:'/apply',name:'apply',meta:{requireAuth:true},component:Apply},
        {path:'/other',name:'other',meta:{requireAuth:true},component:Other},
        {path:'/data',name:'information',meta:{requireAuth:true},component:Information},
        {path:'/point',name:'point',meta:{requireAuth:true},component:Point},
        {path:'/store',name:'store',meta:{requireAuth:true},component:PointStore}
      ]
    },
    {path:'/login',name:'login',meta:{requireAuth:false},component:Login},
    {path:'/register',name:'register',mata:{requireAuth:false},component:Register},
    {path:'*',redirect:'/apply'}
  ]
});



VueRoutes.beforeEach(function(to,from,next){
  if(to.meta.requireAuth){
    var name=getCookie('name');
    var password=getCookie('password');
    console.log("进入路由")
    if(name!=null && password != null){
      fetch(name,password).then(res=>{
        console.log('1')
        if(res.returnJ){
              store.state.id_card=res.id_card;
              store.state.referee_id=res.referee_id;
              store.state.name=res.name;
              store.state.points=res.points;
              store.state.remark=res.remarks;
              store.state.phone=res.phone;
          next()
        }else{
          setCookie('name','',0);
          setCookie('password','',0)
          store.state.loginMsg=res.msg
          next({
            path:'/login',
            query:{redirect:to.fullPath}
          })
        }
      })
    }else{
      console.log(2)
    next({
      path:'/login',
      query:{redirect:to.fullPath}
    })
    }
  }else{
    next();
  }
})
  //   if (store.state.auth.IsLogin) {  // 通过vuex state获取当前的token是否存在
  //     // VueRoutes.push({path:'/home'})
  //
  //     next();
  //   } else {
  //     next(
  //       {path: '/login',
  //         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //         }
  //     )
  //   }
  //   }else {
  //   // console.log(1)
  //   next();
  // }}

// if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//   var name=getCookie('name');
//   var password=getCookie('password');
//   if(name!=null && password!=null){
//     if(store.state.auth.IsLogin){
//       next();
//       alert(store.state.auth.IsLogin)
//       console.log(test(name))
//     }else{
//       // alert(store.state.auth.IsLogin)
//       // setCookie('name','',0)
//       // setCookie('password','',0)
//       alert(1)
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//
//     }
//   }else {
//     next({
//       path: '/login',
//       query: {redirect: to.fullPath}
//     })
//   }}});


export default VueRoutes;
// VueRouter.beforeEach(function(to,from,next){
//       const nextRouter=['']
// })

