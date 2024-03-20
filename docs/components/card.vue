<template>
  <div class="container" >
    <a class="card" v-for="(item , index) in props.dataList" :key="index" :href="item.href" target="_blank">
      <div class="image-wrap">
        <img :src="item.image"  width="36" height="36">
      </div>
      <div class="text-wrap">
        <div class="name">{{item.name}}</div>
        <div class="lable ellipsis">{{item.text}}</div>
      </div>
    </a>

  
  </div>
</template>

<script setup>
const props = defineProps({
  dataList:Object
})

</script>
<style scoped>
a {
   text-decoration: none;
}
.ellipsis {
   /* white-space: nowrap; 不换行 */
   overflow: hidden; /* 内容超过元素大小时隐藏 */
   text-overflow: ellipsis; /* 使用省略号表示被隐藏的内容 */
}
.container{
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 15px;
  gap: 15px;
}
.card {
  width: 250px;
  height: 90px;
  padding:10px;
  transition: 0.5s ease-out;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
 background-color:var(--vp-c-bg-soft);
}
.dark .card{
  /* background-color:var(--vp-card-dark); */
}

.image-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  /* background-color: var(--vp-c-text-1); */

}

.text-wrap {
  padding-left:10px;
}

.name {
  color:var(--vp-c-text-1);
  font-weight: 700;
  font-size: 18px;
line-height: 20px;
  height: 20px;
}

.lable {
  color:var(--vp-c-text-2);
  width:160px;
  height:40px;
  line-height: 20px;
  font-size: 12px;
}

.card:hover {
  border: 1px solid #1e90ff; 
}
</style>