<template>
  <div class="container">
    <my-header></my-header>
    <div class="contant">
      <table border="1px" width="500px">
        <thead>
          <tr>
            <th><input type="checkbox" @change="checkedAll" v-model="isCheckedAll"/>全选</th>
            <th>商品</th>
            <th>总数量</th>
            <th>单价</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) of products" :key="i">
            <td><input type="checkbox" v-model="item.checked" @change="checkOne"/></td>
            <td>
              <!-- <img src="images/order/p1_sm.jpg"/> -->
              <!-- <span>{{item.text}}</span> -->
              <span>
                <img :src="item.img" alt="">
              </span>
              <span class="font_small">{{item.title}}</span>
            </td>
            <td>
              <!-- <button @click="minus">-</button>
              <span>{{count}}</span>
              <button @click="add">+</button> -->
              <my-count></my-count>
            </td>
            <td>¥{{item.price.toFixed(2)}}</td>
            <td>¥{{(item.count*item.price).toFixed(2)}}</td>
            <td>
              <a href="#">删除</a>
            </td>
          </tr>
          <!-- <tr>
            <td><input type="checkbox" /></td>
            <td>
              <img src="images/order/p2_sm.jpg"/>
              <span class="font_small">商品名称:瑰逸丽姿主婚纱</span>
            </td>
            <td>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </td>
            <td>¥599</td>
            <td>¥599</td>
            <td>
              <a href="#">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td>
              <img src="images/order/p3_sm.jpg"/>
              <span class="font_small">商品名称:瑰逸丽姿主婚纱</span>
            </td>
            <td>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </td>
            <td>¥599</td>
            <td>¥599</td>
            <td>
              <a href="#">删除</a>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td>
              <img src="images/order/p1_sm.jpg"/>
              <span class="font_small">商品名称:瑰逸丽姿主婚纱</span>
            </td>
            <td>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </td>
            <td>¥599</td>
            <td>¥599</td>
            <td>
              <a href="#">删除</a>
            </td>
          </tr> -->
          <tr>
            <td colspan="4">
              <span style="text-left">已选商品:<em class="text-danger">{{checkNum}}</em>件</span>
            </td>
            <td class="font-weight-bold text-danger">¥{{totalPrice.toFixed(2)}}</td>
            <td>
              <a href="#" class="text-primary">结算</a>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <div>
        <span>已选商品:<em class="text-danger">{{checkNum}}</em>件</span>
      </div> -->
    </div>   
  </div>
</template>
<script>
export default {
   data(){
     return{
       isCheckedAll:false,
       products:[
         {img:'images/order/p1_sm.jpg',title:'商品名称:瑰逸丽姿主婚纱',count:1,price:599},
         {img:'images/order/p2_sm.jpg',title:'商品名称:瑰逸丽姿主婚纱',count:2,price:399},
         {img:'images/order/p3_sm.jpg',title:'商品名称:瑰逸丽姿主婚纱',count:3,price:699},
         {img:'images/order/p1_sm.jpg',title:'商品名称:瑰逸丽姿主婚纱',count:3,price:699},
         {img:'images/order/p2_sm.jpg',title:'商品名称:瑰逸丽姿主婚纱',count:3,price:699},
         {img:'images/order/p3_sm.jpg',title:'商品名称:瑰逸丽姿主婚纱',count:3,price:699}
       ],
     }
   },
   methods: {
     checkedAll(){
       this.products.forEach((item)=>{
         item.checked=this.isCheckedAll;
       });
      },
      checkOne(){
        if(this.products.length==this.checkNum){
          this.isCheckedAll=true;
        }else{
          this.isCheckedAll=false;
        }
      },
    },
    computed: {
        checkNum(){
          let num=0;
          this.products.forEach((item)=>{
            if(item.checked) num++;
          });
          return num;
        },
        totalPrice() {
          let total = 0;
          this.products.forEach((item) => {
            if (item.checked) total += item.price * item.count;
          });
          return total;
        },
      },
}
</script>
<style scoped>
.contant{
  padding-top: 120px;
}
table{
  width: 100%;
  text-align: center;
  border-top:5px solid #fc93a3;
}
table a{
  color: #fc93a3;
}
table a:hover{
  text-decoration: none;
  color: #f34a63;
}
table span{
  padding:0 10px;
}
/* table button{
  border: 1px solid #ecaeb8;
  background-color: #f7d7dc;
}
table button:hover{
  border: 1px solid #ecaeb8;
  background-color: #fc93a3;
} */
</style>