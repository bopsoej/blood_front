<template>
<div>
  <br>
  <br>
  <br>
<el-row>
  <el-col :xs="2">&nbsp;</el-col>
  <el-col :xs="5" class="title">姓名：</el-col>
  <el-col :xs="12">
    <el-input :disabled="true" v-model="name"></el-input>
  </el-col>
</el-row>
  <br>
  <el-row>
    <el-col :xs="2">&nbsp;</el-col>

    <el-col :xs="5" class="title">手机号：</el-col>
    <el-col :xs="12">
      <el-input :disabled="inputS" v-model="phone.value" @blur="checkPhone"></el-input>
    </el-col>
    <el-col :xs="4"><i class="el-icon-check" v-if="pass" style="margin-top:10px;color:green"></i><span  class="hint" v-if="phone.switch">{{phone.msg}}</span></el-col>
    <!--<el-col :xs="1">&nbsp;</el-col>-->
    <!--<el-col v-if="inputS" :xs="3"><el-button size="mini"  style="margin-top:4px;" @click="changeS">修改</el-button></el-col>-->
    <!--<el-col v-if="!inputS" :xs="3"><el-button size="mini" type="primary" style="margin-top:4px;">确定</el-button></el-col>-->
  </el-row>
  <br>
  <el-row >
    <el-col :xs="1">&nbsp;</el-col>

    <el-col :xs="6" class="title">身份证号：</el-col>
    <el-col :xs="12">
      <el-input :disabled="true" v-model="id_card"></el-input>
    </el-col>
  </el-row>
  <br>
  <el-row>
    <el-col :xs="2">&nbsp;</el-col>
    <el-col :xs="5" class="title">推荐人：</el-col>
    <el-col :xs="12">
      <el-input :disabled="true" v-model="referee"></el-input>
    </el-col>
  </el-row>
  <br>
  <el-row>
    <el-col :xs="2">&nbsp;</el-col>
    <el-col :xs="5" class="title">备注：</el-col>
    <el-col :xs="12">
      <el-input :disabled="inputS" v-model="remark"></el-input>
    </el-col>
  </el-row>
  <br>
  <el-row type="flex" justify="center ">
    <el-col v-if="inputS" :xs="6"><el-button @click="changeS">修改</el-button></el-col>
    <el-col v-if="!inputS" :xs="6"><el-button @click="UpdateP">确定</el-button></el-col>
    <el-col :xs="6"><el-button @click="reset">重置</el-button></el-col>
  </el-row>
  <!--{{this.$store.state.phone}}-->
  <!--<br>-->
  <!--{{phone.value}}-->
</div>
</template>

<script>
  import {mapState} from 'vuex';
    export default {
        name: "information",
       data(){
          return{
            msg:'',
            pass:false,
            inputS:true,
            phone:{value:this.$store.state.phone,switch:false,msg:''},
            id_card:this.$store.state.id_card,
            referee:this.$store.state.referee_id,
            remark:this.$store.state.remark
         }
       },
      computed:mapState({name:'name'}),
      methods:{
          changeS(){
            this.inputS=false;
            // this.phone.msg='该号码已经存在'
          },
        checkPhone(){
          console.log(this.phone)
          if(this.phone=="" || this.phone == null){
            this.phone.switch=true;
            this.msg="手机号不能为空"
          }else{
            this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/registerProcess.php',{
              params:{
                model:'3',
                phone:this.phone.value
              }
            }).then(response=>{
              if(response.data==1){
                this.phone.switch=true;
                this.phone.msg='该号码已经存在'
              }else if(response.data==2){
                this.pass=true;

              }else{
                this.msg='查询失败'
              }
            },response=>{
              console.log(response.state)
            })
          }
        },
        UpdateP() {
          if (this.phone.switch == true) {
            alert(this.phone.msg)
          } else {
            if (this.phone.value == this.$store.state.phone) {
              alert("(O.O)")
            } else {
              // alert(1)
              this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/registerProcess.php', {
                params:{
                  model: '6',
                  phone: this.phone.value,
                  remark: this.remark,
                  id_card:this.$store.state.id_card
                }
              }).then(response => {
                if (response.data == 1) {
                  this.$store.state.phone=this.phone.value;
                  alert('更新成功')
                } else {
                  console.log(response.data)
                  alert('插入失败')
                }
              }, response => {
                console.log(response.state)
              })
            }
          }
        },
        reset(){
           this.inputS=true;
           this.phone.msg='';
           this.phone.value=this.$store.state.phone;
        }
      },
    }
</script>

<style scoped>
.title{
  margin-top:6px;
  text-align:right;
}
  .hint{
    font-size:0.9em;
    color:red;
    margin:1px;
  }
</style>
