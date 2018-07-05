import Vue from 'vue'
import Vuex from 'vuex'
import  axios from 'axios'
Vue.use(Vuex);

var state={
  count:10,
  auth:{
    IsLogin:false
  },
  switch:{
    name:false,
    password:false,
  },
  // test:localStorage.getItem('name'),
  test:'1',
  id_card:"310133333333",
  name:'',
  password:'',
  phone:'18201774118',
  referee_id:'',
  remark:'',
  points:'0',
  loginMsg:''
}

const mutations={
  loginUp(){
    axios.get('http://www.arkenvmc.com.cn/mysql_read/index.php',{
      params:{
        id:3
      }
    })
      .then(response=>{
        // alert(response.data)
        alert(1)
        console.log(response.data.name);
      },response=>{
        alert(2);
        console.log(response)
      })
  },
  // setCookie(name1,value,expiredays){
  //     var exdate=new Date()
  //     exdate.setTime(exdate.getTime()+(expiredays*24*60*60*1000));
  //     var expires='expires='+exdate.toUTCString();
  //     document.cookie=name1+'='+value+';'+expires;
  //     console.log('缓存成功')
  // },
  // getCookie(cname){
  //   var name=cname+'=';
  //   var ca=document.cookie.split(';');
  //   for(var i=0;i<ca.length;i++){
  //     var c=ca[i].trim();
  //     if(c.indexOf(name)==0)
  //      return c.substring(name.length,c.length)
  //
  //       // return state.test=c.substring(name.length,c.length)
  //
  //   }
  //   return null;
  //   // var arr,reg=new RegExp("(^| )"+cname+"=([^;]*)(;|$)");
  //   // if(arr=document.cookie.match(reg))
  //   //   return decode(arr[2]);
  //   // else
  //   //   return null;
  // }

};

const actions={
  // checkCookie:({commit,state},name)=>{
  //   let username=commit('getCookie',name);
  //   state.name=username;
  //   console.log(state.name)
    // let userpassword=commit('getCookie',password)
    // if(username!=null && username!=""){
    //   state.name=username;
    //   if(userpassword!=null && userpassword!=""){
    //     state.password=userpassword;
    //     console.log(username)
    //   }else{
    //     console.log('密码缓存为空')
    //   }
    // }else{
    //   console.log('帐号缓存为空')
    // }
    // alert(name)
  // },
  loginUp:({commit})=>{
    commit('loginUp')
  }
};

const getters={
  count(state){
    return state.count
  }
}

export default new Vuex.Store({
      state,
      mutations,
      actions,
      getters
})
