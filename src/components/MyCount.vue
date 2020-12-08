<template>
  <div>
    <button @click="minus">-</button>
    <span>{{count}}</span>
    <button @click="add">+</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      count:1
    }
  },
  methods: {
    minus(){
      if(this.count>1) this.count--;
    },
    add(){
      this.count++;
    }
  },
}
</script>
<style scoped>
button{
  border: 1px solid #ecaeb8;
  background-color: #f7d7dc;
}
button:hover{
  border: 1px solid #ecaeb8;
  background-color: #fc93a3;
}
span{
  padding:0 15px;
}
</style>