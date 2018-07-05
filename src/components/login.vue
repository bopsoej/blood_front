<template>
    <div id="form">
      <div class="cc">
        <el-container>
          <el-header>

          </el-header>
          <el-main >
            <el-row type="flex"  justify="center">
              <el-col :xs="15" :lg="6" >
                <el-input v-model="nameInput" placeholder="请输入手机号/身份证号"></el-input>
              </el-col>
            </el-row>
            <br>
            <el-row type="flex" justify="center">
              <el-col :xs="15" :lg="6">
                <el-input v-model="passwordInput" type="password" placeholder="请输入密码"></el-input>
              </el-col>
            </el-row>
            <br>
            <el-row type="flex" justify="center">
              <el-col :xs="15" :lg="6">
                <el-button @click="login">登录</el-button>
                <el-button @click="toRegister">注册</el-button>
              </el-col>
            </el-row>
            <br>
            <el-row type="flex" justify="center">
              <el-col>{{this.$store.state.loginMsg}}</el-col>
              <!--<el-col>{{this.$store.state.auth.IsLogin}}</el-col>-->
            </el-row>
          </el-main>
        </el-container>
      </div>
    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import {setCookie,getCookie} from "../util/util";
  import {loginCheck,fetch} from "../util/http";

  export default {
        name: "login",
        data(){
          return{
            msg:"",
            nameInput:'',
            passwordInput:''
          }
        },
      computed:{
          c(){
            return this.$store.state.auth.IsLogin //没用
          }
      },
      methods:{
          toRegister(){
            this.$router.push({path:'/register'})
          },
          login(){
              setCookie('name',this.nameInput,'7');
              setCookie('password',this.passwordInput,'7');
              this.$router.push({path:'/apply'})
            // fetch(this.nameInput,this.passwordInput).then(res=>{
            //   if(res.returnJ){
            //     console.log(res.returnJ)
            //     this.$router.push({path:'/apply'})
            //   }else{
            //     this.msg=res.msg
            //   }
            // })
            // this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/visit.php', {
            //   params: {
            //   name:this.nameInput,
            //     password:this.passwordInput
            //   }
            // }).then(response=>{
            //   if(!response.data.returnJ){
            //     this.msg=response.data.msg
            //     // console.log(this.$store.state.count)
            //   }else{
            //     this.$store.state.auth.IsLogin=response.data.returnJ;
            //     // localStorage.IsLogin=true;
            //     // localStorage.name=3;
            //     // var cname1='test1'
            //     setCookie('name',this.nameInput,7);
            //     setCookie('password',this.passwordInput,7)
            //     // this.$store.commit('setCookie','password',this.passwordInput,2);
            //     this.$store.state.id_card=response.data.id_card;
            //     this.$store.state.referee_id=response.data.referee_id;
            //     this.$store.state.name=response.data.name;
            //     this.$store.state.points=response.data.points;
            //     this.$store.state.remark=response.data.remarks;
            //     this.$store.state.phone=response.data.phone;
            //     this.$router.push({path:'/apply'})
            //   }
            // },response=>{
            //   console.log(response.state)
            // })
          }
      },
      mounted(){


      }
    }
</script>

<style scoped>

</style>
