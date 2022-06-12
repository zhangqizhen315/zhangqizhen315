<template>
  <div class="test">
    <div class="warpper">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
// 以上引入模块


const myData = reactive({
  name : '张三',
  
})
console.log(myData);

// 以上定义数据


// 以上定义方法


</script>

<style scoped lang="less">

</style>
