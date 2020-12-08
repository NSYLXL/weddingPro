<template>
  <div class="container">
		<my-header></my-header>
		    <!-- 大图 -->
				<div class="position-absolute" :class="{'d-none':hide}" style="left: 520px;top:100px;width: 402px;height: 430px;z-index: 100;" :style="{'background-image':`url(/${pics[i].lg})`,'background-position':`-${parseInt(maskStyle.left)*2}px -${parseInt(maskStyle.top)*2}px`}">
				</div>
			  <div class="contant row no-gutters pb-2">
			  	<!-- 左边 -->
					<div class="col-lg-6 col-md-6 col-sm-6">
						<div class="text-center maskFather">
							<img :src="pics[i].md">
							<div class="mask" :class="{'d-none':hide}" :style="maskStyle"></div>
							<div class="superMask" @mouseover="toggle" @mouseout="toggle" @mousemove="move"></div>
					  </div>						
					<!-- 左下图3个 -->
					<div class="pic_btn mt-2 d-flex">
						<button class="mr-2" @click="moveRight">&lt;</button>
						<div style="width:196px; overflow:hidden">
							<ul class="list-unstyled d-flex" :style="{width:pics.length*49+'px','margin-left':-49*times+'px'}" @mouseover="changei">
								<li v-for="(p,i) of pics" :key="i">
									<img class="pb-1 pr-1" :src="p.sm" :data-i='i'>
								</li>
							</ul>
						</div>												
						<!-- <img class="pb-1 pr-1" src="images/detail/p2_sm.jpg" >
						<img class="pb-1 pr-1" src="images/detail/p2_sm.jpg" >
						<img class="pb-1 pr-1" src="images/detail/p2_sm.jpg" >
						<img class="pb-1 pr-1" src="images/detail/p2_sm.jpg" >
						<img class="pb-1" src="images/detail/p3_sm.jpg" > -->
						<button class="ml-2" @click="moveLeft">&gt;</button>
					</div>
				</div>
				<!-- 右边 -->
				<div class="col-lg-6 col-md-6 col-sm-6">
					<p class="h5 mb-3 text_hidden">瑰逸丽姿主婚纱2020新款新娘拖尾气质超仙梦幻礼服</p>
					<div class="jumbotron">
						<div class="d-flex">
							<p class="pt-2">价格:</p>
							<span class="font_color pl-3 h3">3999.00</span>
						</div>	
					</div>

					<!-- 尺码 -->
					<div class="size_btn d-flex">
						<p class="text-muted">尺码:</p>
						<button class="ml-3 font_small">XS/155</button>
						<button class="ml-3 font_small">S/160</button>
						<button class="ml-3 font_small">M/165</button>
						<button class="ml-3 font_small">L/170</button>
						<button class="ml-3 font_small">XL/175</button>
						<button class="ml-3 font_small text_hidden">定制请联系客服</button>
					</div>
					<!-- 颜色 -->
					<div class="d-flex">
						<p class="text-muted">颜色:</p>
						<p class="font_small p-1 ml-2">白色</p>
					</div>
					<!-- 数量 -->
					<div class="size_btn2 d-flex">
						<p class="text-muted">数量:</p>
						<button class="ml-3 mr-2" @click="minus">-</button>
						<input type="text" name="" id="" v-model="count" />
						<button class="ml-2" @click="add">+</button>
					</div>
					<!-- 购买 -->
					<div class="d-flex mt-5">
						<a class="pay" href="#">立即购买</a>
						<router-link class="cart ml-2" to="Order">加入购物车</router-link>
					</div>
					<!-- 服务承诺 -->
					<div class="mt-5 d-flex">
						<p class="text-muted text_hidden">服务承诺:</p>
						<p class="ml-3 font_small pt-1 text_hidden">正品保证</p>
						<p class="ml-3 font_small pt-1 text_hidden">极速退款</p>
						<p class="ml-3 font_small pt-1 text_hidden">材质保真险</p>
						<p class="ml-3 font_small pt-1 text_hidden">七天无理由退换</p>
					</div>
					<!-- 解释 -->
					<!-- <p class="font_small text-muted">*退货补运费*30天无忧退货*48小时快速退款*72小时发货，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息。</p>	
				</div> -->
			</div>		
		</div>
  </div>
</template>
<script>
export default {
	data(){
		return{
			count:1,
			pics:[
				{sm:'images/detail/p1_sm.jpg',md:'images/detail/p1_md.jpg',lg:'images/detail/p1_lg.jpg'},
				{sm:'images/detail/p2_sm.jpg',md:'images/detail/p2_md.jpg',lg:'images/detail/p2_lg.jpg'},
				{sm:'images/detail/p3_sm.jpg',md:'images/detail/p3_md.jpg',lg:'images/detail/p3_lg.jpg'},
				{sm:'images/detail/p1_sm.jpg',md:'images/detail/p1_md.jpg',lg:'images/detail/p1_lg.jpg'},
				{sm:'images/detail/p1_sm.jpg',md:'images/detail/p1_md.jpg',lg:'images/detail/p1_lg.jpg'},
				{sm:'images/detail/p1_sm.jpg',md:'images/detail/p1_md.jpg',lg:'images/detail/p1_lg.jpg'},
			],
			times:0,
			i:0,
			// 同时动态控制小的遮罩层和大图片,所以绑定在一起
			hide:true,
			// 因为要修改mask的位置,所以为mask绑定style对象
			maskStyle:{
				left:0,
				top:0
			}
		}
	},
	methods:{
		minus(){
			if(this.count>1) this.count--;		
		},
		add(){
			this.count++;
		},
		moveLeft(){
			if(this.times<this.pics.length-4)
			this.times++;
		},
		moveRight(){
			if(this.times!=0)
			this.times--;
		},
		// 事件委托
		changei(e){
			// 只允许img元素触发事件
			if(e.target.nodeName=='IMG'){
				this.i=e.target.dataset.i;//元素身上自带的i
			}
		},
		toggle(){
			this.hide=!this.hide;
		},
		// 内部控制鼠标移动
		move(e){
			//console.log(e.offsetX,e.offsetY);//拿到鼠标位置
			// this.maskStyle.left=e.offsetX-50+'px';//超出范围
			// this.maskStyle.top=e.offsetY-50+'px';//超出范围
			var left=e.offsetX-81;
			var top=e.offsetY-108;
			if(left<0) left=0; else if(left>160) left=160;
			if(top<0) top=0; else if(top>215) top=215;
			this.maskStyle={
				left:left+'px',
				top:top+'px'
			}
		}
	}
}
</script>
<style scoped>
/* .container{
	padding-top: 100px;
} */
.container .contant{
	padding-top: 100px;
}
.pic_btn{
	margin-left: 155px;
}
.pic_btn>button{
	width: 1.5rem;
	height: 4rem;
	border: 1px solid lightgray;
	line-height: 1rem;
}
.pic_btn>button:hover{
	background-color: lightgray;
}
.jumbotron {
	width: 90%;
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}
.size_btn>button{
	height: 1.5rem;
	border: 1px solid gray;
}
.size_btn>button:hover{
	background-color: #ff627d;
	color: #fff;
	border: 1px solid #ff627d;
}
.size_btn2>button{
	width: 1.7rem;
	height: 1.5rem;
	border: 1px solid lightgray;
	line-height: 1rem;
}
.size_btn2>button:hover{
	background-color: #ff627d;
	color: #fff;
	border: 1px solid #ff627d;
}
.size_btn2>input{
	width: 2rem;
	height: 1.5rem;
	text-align: center;
}
.pay{
	display: block;
	width: 10rem;
	height: 2rem;
	background-color: #ffeded;
	border: 2px solid #ff627d;
	color: red;
	text-align: center;
}
.cart{
	display: block;
	width: 10rem;
	height: 2rem;
	background-color: #ff627d;
	border: 2px solid #ff627d;
	color: #fff;
	text-align: center;
}
.pay:hover,.cart:hover{
	text-decoration: none;
}
.pay:hover{
	color: #fff;
	background-color: #ff627d;
}
.cart:hover{
	color: #fff;
	background-color: red;
	border: 2px solid red;
}	
.maskFather{
	width: 323px;
	height: 430px;
	position: relative;
	left: 120px;
}
.mask{
	width: 162px;
	height: 215px;
	background-color: #ff627d;
	position: absolute;
	top: 0;
	opacity: .3;
}
.superMask{
	width: 323px;
	height: 430px;
	z-index: 110;
	position: absolute;
	/* background-color: green; */
	top: 0;
}
</style>