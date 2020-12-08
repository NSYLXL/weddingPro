<template>
  <div class="container-fluid">
		<my-header></my-header>
		 <div class="contant"></div>
			<!-- 轮播图 -->
			<div id="demo" class="carousel" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<a href="#"><img class="w-100" src="images/service/banner2.png" ></a>
					</div>
					<div class="carousel-item">
						<a href="#"><img class="w-100" src="images/service/banner.png" ></a>
					</div>
				</div>
				<!-- 指示器 -->
				<ul class="carousel-indicators">
					<li data-slide-to="0" data-target="#demo" class="active"></li>
					<li data-slide-to="1" data-target="#demo"></li>
				</ul>
				<!-- 箭头 -->
				<a data-slide="next" class="carousel-control-next" href="#demo">
					<span class="carousel-control-next-icon"></span>
				</a>
				<a data-slide="prev" class="carousel-control-prev" href="#demo">
					<span class="carousel-control-prev-icon"></span>
				</a>	
			</div>			
			<div class="container">
				<!-- 婚礼策划 -->
				<div class="d-flex mt-5">
					<div class="text-center ml-5 pl-5">
						<img class="w-100" src="images/service/p7.png" >
					</div>		
					<div class="ml-5 mr-5 pr-5">
						<div class="d-flex">
							<img class="lg_width" src="images/service/logo.png" >
							<p class="ml-3">婚礼策划</p>
						</div>
						<p class="font_small">是指为客人量身打造婚礼而进行的策划，涵盖各种婚礼形式和各种婚礼形式的组合体。婚礼策划师根据每位新人的不同爱好、追求或诉求点而为新人量身定做的婚礼，并非简单的流程组合加会场布置此类简单的婚礼服务项目组合，而是依据新人的兴趣和要求，整个婚礼围统一至两个主题或两至三个侧重点进行。</p>
					</div>
				</div>
				<!-- 婚礼跟拍 -->
				<div class="d-flex mt-5">							
					<div class="ml-5 mr-5 pl-5">
						<div class="d-flex">
							<img class="lg_width" src="images/service/logo.png" >
							<p class="ml-3">婚礼跟拍</p>
						</div>
						<p class="font_small">是指为客人量身打造婚礼而进行的策划，涵盖各种婚礼形式和各种婚礼形式的组合体。婚礼策划师根据每位新人的不同爱好、追求或诉求点而为新人量身定做的婚礼，并非简单的流程组合加会场布置此类简单的婚礼服务项目组合，而是依据新人的兴趣和要求，整个婚礼围统一至两个主题或两至三个侧重点进行。</p>
					</div>
					<div class="text-center mr-5">
						<img class="w-100" src="images/service/p8.png" >
					</div>
				</div>			
				<!-- 一张图片 -->
				<div>
					<img class="w-100" src="images/service/p13.png" >
				</div>
				<!-- 婚礼定制 -->
				<div class="text-center font_color font-weight-bold mt-5">
					<p>婚礼定制</p>
					<img src="images/service/line.png" >
				</div>
				<!-- <div class="row no-gutters mt-5">
					<div class="col-lg-4 col-md-4 col-sm-4">
						<img class="w-50 pr-2 pb-2" src="images/service/p6.png" >
						<img class="w-100 pr-2" src="images/service/p3.png" >
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4">
						<img class="w-100 pr-2 pb-2" src="images/service/p1.png" >
						<img class="w-100 pr-2" src="images/service/p4.png" >
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4">
						<img class="w-100 pr-2 pb-2" src="images/service/p2.png" >
						<img class="w-100 pr-2" src="images/service/p5.png" >
					</div>
				</div> -->
				<!-- 卡片轮播图 -->
				<div class="mt-3">
					<el-carousel :interval="4000" type="card" height="350px">
					<el-carousel-item v-for="item in imgs" :key="item">
					  <img class="w-100" :src="item.url"/>
					</el-carousel-item>
				</el-carousel>	
				</div>				
				<!-- 4个 -->
				<div class="mt-5">
					<ul class="list-unstyled font_small text-center d-flex justify-content-around">
						<li>
							<img src="images/service/p9.png" >
							<p class="mt-3">金牌管家</p>
						</li>
						<li>
							<img src="images/service/p10.png" >
							<p class="mt-3">金牌管家</p>
						</li>
						<li>
							<img src="images/service/p11.png" >
							<p class="mt-3">金牌管家</p>
						</li>
						<li>
							<img src="images/service/p12.png" >
							<p class="mt-3">金牌管家</p>
						</li>
					</ul>
				</div>			
			</div>
			<my-footer></my-footer>
		</div>
</template>
<script>
export default {
	data(){
		return{
      imgs:[
				{url:require('../assets/Service/pic1.png')},
				{url:require('../assets/Service/pic2.png')},
				{url:require('../assets/Service/pic3.png')},
				{url:require('../assets/Service/pic4.png')},
				{url:require('../assets/Service/pic5.png')},
			]
		}
	}
}
</script>
<style scoped>
/* .container-fluid{
	padding-top: 100px;
} */
.contant{
	padding-top: 100px;
}
.lg_width{
	width: 3rem;
	height: 1.5rem;
}
</style>