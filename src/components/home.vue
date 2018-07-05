<template>
    <div>
      <el-container>
        <el-header></el-header>
        <el-container>
          <el-col :xl="6" :lg="4" class="hidden-sm-and-down">
            <el-aside ></el-aside>
          </el-col>
          <el-col :xl="12" :lg="16" :xs="24" >
            <el-main style="padding:0;"  >

                <el-menu :default-active="activeIndex" mode="horizontal" router menu-trigger="click">
                  <!--<el-row type="flex" justify="center">-->
                    <el-col :lg="8" :xs="2" :offset="1" style="border:solid 1px white">
                      <div></div>
                    </el-col>
                    <el-menu-item class="el-menu-demo" index="1" style="width:100px;" route="/apply"  >
                      <!--<router-link class="link" to="/apply">预约报名</router-link>-->
                      <template slot="title" ><span class="title">预约报名</span></template>
                      <!--<h3>其他页</h3>-->

                    </el-menu-item>
                    <!--<el-menu-item class="el-menu-demo" index="2">-->
                    <!--</el-menu-item>-->
                  <el-submenu  index="2" style="width:100px;" >
                    <template slot="title">积分</template>
                    <el-menu-item  index="2-1" route="/point">我的积分</el-menu-item>
                    <el-menu-item index="2-2" route="/store">积分商城</el-menu-item>
                  </el-submenu>
                  <el-submenu index="3"  @open="test" >
                    <template slot="title">我的</template>
                    <el-menu-item index="3-1" route="/data">
                      <!--<router-link class="link" to="/other">我的资料</router-link>-->
                      我的资料
                    </el-menu-item>
                  </el-submenu>


                  <!--</el-row>-->
                </el-menu>

              <router-view/>
            </el-main>
          </el-col>
          <el-col :xl="6" :lg="4" class="hidden-sm-and-down">
            <el-aside ></el-aside>
          </el-col>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "home",
      data(){
          return{
            activeIndex:'',
            Isrouter:"true",
            value:'ssss'
        }
      },
      methods:{
        test(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
/*.el-menu-demo{*/
  /*height:80px;*/
  /*line-height:80px;*/
  /*width:100px;*/
/*}*/
  .link{
    text-decoration:none;
    font-size:1.2em;
    /*font-family: 微软雅黑;*/
  }
  .title{
    font-size:1.3em;
    /*color:gray;*/
  }


</style>
