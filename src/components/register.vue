<template>
<div>
  <h1>注册</h1>
  <br>
<el-row type="flex" justify="start">
  <el-col :md="6" :xs="7"  class="title">
    姓名：&nbsp;
  </el-col>
  <el-col :md="14" :xs="12">
    <el-input v-model="name.value" @blur="checkName"></el-input>
  </el-col>
  <el-col :xs="4" v-show="name.switch" class="hint">{{name.msg}}</el-col>
</el-row>
  <br>
  <el-row type="flex" justify="start">
    <el-col :md="4" :xs="7"class="title">
      密码：&nbsp;
    </el-col>
    <el-col :md="14" :xs="12">
      <el-input v-model="password.value" type="password"></el-input>
    </el-col>
    <el-col :xs="4" v-show="password.switch" class="hint">{{password.msg}}</el-col>
  </el-row>
  <br>
  <el-row type="flex" justify="start">
    <el-col :xs="7" class="title">确认密码：&nbsp;</el-col>
    <el-col :xs="12"><el-input type="password"  v-model="passW2.value"  @blur="checkPassword_T"></el-input></el-col>
    <el-col :xs="4" v-show="passW2.switch" class="hint">{{passW2.msg}}</el-col>
  </el-row>
  <br>
  <el-row type="flex" justify="start">
    <el-col :xs="7" class="title">手机号：&nbsp;</el-col>
    <el-col :xs="12"><el-input v-model="phone.value" @blur="checkPhone" type="phone"></el-input></el-col>
    <el-col :xs="4" v-show="phone.switch" class="hint">{{phone.msg}}</el-col>
  </el-row>
  <br>
  <el-row type="flex" justify="start">
    <el-col :xs="7" class="title">身份证号：&nbsp;</el-col>
    <el-col :xs="12"><el-input v-model="id_card.value" @blur="checkId_Card"></el-input></el-col>
    <el-col :xs="4" v-show="id_card.switch" class="hint">{{id_card.msg}}</el-col>
  </el-row>
  <br>
  <el-row type="flex" justify="start">
    <el-col :xs="7" class="title">推荐人姓名：&nbsp;</el-col>
    <el-col :xs="12"><el-input v-model="referee.value" @blur="checkIsReferee"></el-input></el-col>
    <el-col :xs="4" v-show="referee.switch" class="hint">{{referee.msg}}</el-col>
  </el-row>
  <br>
  <el-row type="flex" justify="center">
    <el-col :xs="5"><el-button @click="tologin()">返回</el-button></el-col>
    <el-col :xs="2">&nbsp</el-col>
    <el-col :xs="5"><el-button @click="createAC_retard">确定</el-button></el-col>
  </el-row>
  <br>
<!--{{count}}-->
</div>
</template>

<script>
    export default {
        name: "register",
      data(){
          return{
            name:{value:'',msg:'',switch:false}, //需检查唯一性
            password:{value:'',msg:'11',switch:false},
            id_card:{value:'',msg:'',switch:false},//需检查唯一性
            phone:{value:'',msg:'',switch:false}, //需检查唯一性
            referee:{value:'',msg:'',switch:false}, //需检查存不存在
            passW2:{value:'',msg:'密码不一样',switch:false},
            test:[],
            arrs:[[],[],],
          }
      },
      computed:{
        count(){
          // var arrs;
          this.arrs[0][0]=this.name.switch;
          this.arrs[0][1]=this.password.switch;
          this.arrs[0][2]=this.passW2.switch;
          this.arrs[0][3]=this.phone.switch;
          this.arrs[0][4]=this.id_card.switch;
          this.arrs[0][5]=this.referee.switch;
          this.arrs[1][0]=this.name.msg;
          this.arrs[1][1]=this.password.msg;
          this.arrs[1][2]=this.passW2.msg;
          this.arrs[1][3]=this.phone.msg;
          this.arrs[1][4]=this.id_card.msg;
          this.arrs[1][5]=this.referee.msg;
          return this.arrs;
        }
      },
      methods:{
          checkName(){
            if(this.name.value=="" || this.name.value == null){
              this.name.switch=true;
              this.name.msg="姓名不能为空"
            }else{
              this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/registerProcess.php',{
                params:{
                  model:'1',
                  name:this.name.value
                }
              }).then(response=>{
                if(response.data==1){
                  this.name.switch=true;
                  this.name.msg="姓名已存在"
                }else{
                  this.name.switch=false;
                }
              },response=>{
                console.log(response.state)
              })
            }
          },
        checkPhone(){
          if(this.phone.value=="" || this.phone.value == null){
            this.phone.switch=true;
            this.phone.msg="手机号不能为空"
          }else{
           var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
           if(!myreg.test(this.phone.value))
           {
             this.phone.msg="手机格式不正确";this.phone.switch=true;
           }else{
             this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/registerProcess.php',{
               params:{
                 model:'3',
                 phone:this.phone.value
               }
             }).then(response=>{
               if(response.data==1){
                 this.phone.switch=true;
                 this.phone.msg="该号码已存在"
               }else{
                 this.phone.switch=false;
               }
             },response=>{
               console.log(response.state)
             })
           }
           }

        },
        checkId_Card(){
          if(this.id_card.value=="" || this.id_card.value == null){
            this.id_card.switch=true;
            this.id_card.msg="身份证号不能为空"
          }else{
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if(!reg.test(this.id_card.value)){
              this.id_card.msg="身份证格式不正确";
              this.id_card.switch=true;
            }else{
              this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/registerProcess.php',{
                params:{
                  model:'2',
                  id_card:this.id_card.value
                }
              }).then(response=>{
                if(response.data==1){
                  this.id_card.switch=true;
                  this.id_card.msg="身份证号已存在"
                }else{
                  this.id_card.switch=false;
                }
              },response=>{
                console.log(response.state)
              })
            }

          }
        },
        checkIsReferee() {
          if (this.referee.value == "" || this.referee.value == null) {
            this.referee.switch = false;
          } else {
            this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/registerProcess.php', {
              params: {
                model: '4',
                referee: this.referee.value
              }
            }).then(response => {
              if (response.data == 2) {
                this.referee.switch = true;
                this.referee.msg = "推荐人不存在"
              } else {
                this.referee.switch = false;
              }
            }, response => {
              console.log(response.state)
            })
          }
        },
          checkPassword_T(){
              if(this.passW2.value!=this.password.value){
                  this.passW2.switch=true;
              }else{
                this.passW2.switch=false;
              }
          },
        checkNull(){
          if(this.name.value==null || this.name.value==''){this.name.msg='姓名不能为空';this.name.switch=true; };
          if(this.password.value==null || this.password.value==''){this.password.msg='密码不能为空';this.password.switch=true; };
          if(this.phone.value==null || this.phone.value==''){this.phone.msg='电话不能为空';this.phone.switch=true; };
          if(this.id_card.value==null || this.id_card.value==''){this.id_card.msg='身份证号不能为空';this.id_card.switch=true; };

        },
        createAC_retard(){
            setTimeout(this.createAC,1000)
        },
        createAC(){
          this.checkNull();
          var t;
          var s;
          var i=0;
          for(;i<this.count[0].length;i++){
            if(this.count[0][i]==true){
              t=this.count[0][i];
              s=this.count[1][i];
              break;
            }else{
              t=false;
            }
          }
          if(t==true){
            alert(s)
          }else{
            this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/registerProcess.php',{
              params:{
                model:'5',
                name:this.name.value,
                password:this.password.value,
                phone:this.phone.value,
                id_card:this.id_card.value,
                referee:this.referee.value,
              }
            }).then(response=>{
              this.$store.state.name=this.name.value;
              this.$store.state.id_card=this.id_card.value;
              this.$store.state.phone=this.phone.value;
              this.$store.state.referee_id=this.referee.value;
              this.$store.state.auth.IsLogin=true;
              console.log(response.data)
              this.$router.push({path:'/apply'})
            },response=>{
              console.log(response.state)
            })
          }

          },
        tologin(){
            this.$router.push({path:'/login'})
        }
      }
    }
</script>

<style scoped>
  .hint{
    font-size:0.9em;
    color:red;
    margin:1px;
  }
  .title{
    margin-top:6px;
    text-align:right;
  }
</style>
