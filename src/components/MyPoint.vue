<template>
<div>
  <p>您当前的积分为：{{point}}</p>
</div>
</template>

<script>
    export default {
        name: "my-point",
      data(){
          return{
            msg:'这是个人积分页',
            point:this.$store.state.points
        }
      }
    }
</script>

<style scoped>

</style>
