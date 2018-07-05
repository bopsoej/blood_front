<template>
<div>
  <br>
  <br>
<el-row type="flex" justify="center">
  <el-col :lg="10" class="title">预约报名</el-col>
</el-row>
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
    <el-col :xs="2" :offset="17"><el-button @click="applyInfo">确定</el-button></el-col>
  </el-row>
  <br>
  <hr style="border-top:1px solid #fff;">
  <!--{{meetTime}}-->
  <!--<br>-->
  {{this.$store.state.test}}
</div>

</template>

<script>
    export default {
        name: "apply",
      data(){
          return{
            msg:'',
            meetTime:'',
            newD:new Date(),
            pickerOptions0: {
              disabledDate(time) {
                return time.getTime() < Date.now()
              }
            },
          }
      },
      computed:{
          s(){

          }
      },
      methods:{
          applyInfo(){
            if(this.meetTime==null || this.meetTime==''){
              alert('请选择参加时间');
            }else{
              this.$http.get('http://www.arkenvmc.com.cn/blood_staiton/applyUp.php',{
                params:{
                  card:this.$store.state.id_card,
                  cut_time:this.meetTime,
                  remarks:this.msg
                }
              }).then(response=>{
                alert()
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
  *{
    font-family:"微软雅黑"
  }
  .title{
    font-size:25px;
  }
.input-title{
  line-height:50px;
  text-align:right;
}
  .font{
    line-height:50px;
  }
</style>
