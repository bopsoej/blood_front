<template>
<div>
  <br>
  <br>
  <el-row>
    <el-col :xs="8" class="font">
      预约时间：
    </el-col>
    <el-col :xs="14">
      <el-date-picker v-model="meetTime"  type="datetime" value-format="yyyy-MM-dd HH:mm:ss"   placeholder="选择时间" :picker-options="pickerOptions0"></el-date-picker>
    </el-col>
  </el-row>
  <br>
  <el-row>
    <el-col :xs="8" class="font">备注：</el-col>
    <el-col :md="4" :xs="14">
      <el-input v-model="msg"></el-input>
    </el-col>
  </el-row>
  <br>
  <el-row>
    <el-col :xs="2" :offset="17"><el-button @click="exchange_time" >确定</el-button></el-col>
  </el-row>
  <br>
  <hr style="border-top:1px solid #fff;">
</div>
</template>

<script>
    export default {
        name: "point-store",
      data(){
          return{
            msg:'这是积分商城',
            meetTime:'',
            // newD:new Date(),
            remark:'',
            pickerOptions0: {
              disabledDate(time) {
                return time.getTime() < Date.now()
              }
            },
          }
      },
      methods:{
          exchange_time(){
            if(this.meetTime==null || this.meetTime ==''){
              alert('请选择预约时间');
            }else{
              this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/exchangeProcess.php',{
                params:{
                  time:this.meetTime,
                  id_card:this.$store.state.id_card,
                  remark:this.remark,
                }
              }).then(response=>{
                console.log(response.data)
              },response=>{
                console.log(response.state)
              })
            }
          }
      }
    }
</script>

<style scoped>
  .font{
    line-height:50px;
  }
</style>
