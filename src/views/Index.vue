<template>
  <div class="container-fluid">
		<my-header></my-header>
		 <div class="contant"></div>
			<!-- 顶部 -->
			<div class="pic">
				<router-link class="p1" to="/question"><img src="images/index/btn.png" ></router-link>
				<router-link class="p2" to="/question"><img src="images/index/btn.png" ></router-link>
			</div>
			<!-- 中间花环 -->
			<div>
				<img class="w-100 mt-5" src="images/index/p1.png" >
			</div>
			<!-- 不一样的婚礼 -->
			<div class="container">
				<div class="box mb-5">
					<div class="row no-gutters">
						<div class="col-lg-6 col-md-6 col-sm-6">
							<img class="my_img w-100 pt-lg-3 pl-lg-3" src="images/index/p2.png" >
							<div class="my_padding">
								<p class="font_sizeA">2020新款婚纱 </p>
								<p class="font_sizeB">香肩蝴蝶花朵简约梦纱</p>
								<a class="my_detail" href="detail">了解详情</a>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6">
							<div class="pb-lg-5 pl-lg-5">
								<p class="font_sizeA">2020新款婚纱 </p>
								<p class="font_sizeB">一字肩拖尾奢华结婚简约星空</p>
								<router-link class="my_detail" to="/detail">了解详情</router-link>
							</div>
							<img class="my_img w-100 pr-3 pt-5" src="images/index/p3.png" >
						</div>
					</div>					
				</div>
				<!-- 私人订制 -->
				<div class="row no-gutters">
					<!-- 左边 -->
					<div class="col-lg-3 col-sm-3">
						<!-- 左上 -->
						<div>
							<div>
								<img class="w-100" src="images/index/p4.png" >
							</div>
							<div>
								<p class="pt-2 m-0 font_small">婚纱2020新款新娘礼服A</p>
								<p class="font-weight-bold text-danger">¥1999</p>
								<a class="my_detail" href="detail">查看详情</a>
							</div>
						</div>
						<!-- 左下 -->
						<div class="pt-4">
							<div>
								<img class="w-100" src="images/index/p7.png" >
							</div>
							<div>
								<p class="pt-2 m-0 font_small">婚纱2020新款新娘礼服B</p>
								<p class="font-weight-bold text-danger">¥2999</p>
								<router-link class="my_detail" to="/detail">查看详情</router-link>
							</div>
						</div>
					</div>
					<!-- 中间 -->
					<div class="col-lg-6  col-sm-6">
						<div class="text-center">
							<p class="font_sizeC">专属私人订制服务</p>
							<img src="images/footer/Line.png" >
							<p class="pt-4">高贵典雅奢华品质</p>
						</div>
						<!-- 轮播图 -->
						<div id="demo" class="carousel pl-lg-3 pr-lg-3 pt-5" data-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<a href="javascript:;"><img class="w-100" src="images/index/pb2.png" ></a>
								</div>
								<div class="carousel-item">
									<a href="javascript:;"><img class="w-100" src="images/index/p5.png" ></a>
								</div>
								<div class="carousel-item">
									<a href="javascript:;"><img class="w-100" src="images/index/pb4.png" ></a>
								</div>
								<div class="carousel-item">
									<a href="javascript:;"><img class="w-100" src="images/index/pb3.png" ></a>
								</div>
							</div>
							<!-- 指示器 -->
							<ul class="carousel-indicators">
								<li data-slide-to="0" data-target="#demo" class="active"></li>
								<li data-slide-to="1" data-target="#demo"></li>
								<li data-slide-to="2" data-target="#demo"></li>
								<li data-slide-to="3" data-target="#demo"></li>
							</ul>
						</div>
					</div>
					<!-- 右边 -->
					<div class="col-lg-3 col-sm-3">
						<!-- 右上 -->
						<div>
							<div>
								<img class="w-100" src="images/index/p6.png" >
							</div>
							<div>
								<p class="pt-2 m-0 font_small">婚纱2020新款新娘礼服C</p>
								<p class="font-weight-bold text-danger">¥3999</p>
								<router-link class="my_detail" to="/detail">查看详情</router-link>
							</div>
						</div>
						<!-- 右下 -->
						<div class="pt-4">
							<div>
								<img class="w-100" src="images/index/p8.png" >
							</div>
							<div>
								<p class="pt-2 m-0 font_small">婚纱2020新款新娘礼服D</p>
								<p class="font-weight-bold text-danger">¥6999</p>
								<router-link class="my_detail" to="/detail">查看详情</router-link>
							</div>
						</div>
					</div>
				</div>
				<!-- 约惠520 -->
				<div class="text-center">
					<p class="font_sizeC">约惠520,浪漫价给你</p>
					<img src="images/footer/Line.png" >
					<p class="pt-4">高贵典雅奢华品质</p>
				</div>
				<div class="row no-gutters">
					<div class="col-lg-3 col-md-3 col-sm-3">
						<div class="my_image">
							<div>
								<a class="image_child iconfont icon-chakan" href="detail"></a>
							</div>
						</div>
						<div class="text-center">
							<p class="pt-2 m-0 font_small">2019新款新娘森系超仙小礼服抹胸</p>
							<p class="text-danger font-weight-bold">¥499</p>	
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3">
						<div class="my_image2">
							<div>
								<router-link class="image_child iconfont icon-chakan" to="/detail"></router-link>
							</div>
						</div>
						<div class="text-center">
							<p class="pt-2 m-0 font_small">2019新款新娘森系超仙小礼服抹胸</p>
							<p class="text-danger font-weight-bold">¥599</p>	
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3">
						<div class="my_image3">
							<div>
								<router-link class="image_child iconfont icon-chakan" to="/detail"></router-link>
							</div>
						</div>
						<div class="text-center">
							<p class="pt-2 m-0 font_small">2019新款新娘森系超仙小礼服抹胸</p>
							<p class="text-danger font-weight-bold">¥699</p>	
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3">
						<div class="my_image4">
							<div>
								<router-link class="image_child iconfont icon-chakan" to="/detail"></router-link>
							</div>
						</div>
						<div class="text-center">
							<p class="pt-2 m-0 font_small">2019新款新娘森系超仙小礼服抹胸</p>
							<p class="text-danger font-weight-bold">¥899</p>	
						</div>
					</div>
				</div>
			</div>
			<my-footer></my-footer>
		</div>
</template>
<script>
export default {
  data(){
    return{
      
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
my-header{
	padding-bottom: 100px;
}
.container-fluid>.pic{
	height: 40rem;
	background: url("../assets/Index/pic.png");
	background-size: cover;
}
.container-fluid>.pic>.p1>img{
	width: 8rem;
	margin-left: 63rem;
	margin-top: 4.6rem;
}
.container-fluid>.pic>.p2>img{
	width: 8rem;
	margin-left: 15rem;
	margin-top: 28.4rem;
}
.pb-4{
  padding-bottom: 8rem !important;
}
.container .box .font_sizeA{
	padding-top: 5rem;
	font: 4rem 宋体;
	font-weight: bold;
	color: #aa9ccf;
}
.container .box .font_sizeB{
	font-family: 宋体;
	font-size: 1.5rem;
}
.container .box .my_padding{
	padding-left: 8rem;
}
.container .my_detail{
	display: block;
	width: 6rem;
	height: 2rem;
	background-color: #ff627d;
	color: #fff;
	text-align: center;
	border-radius: 0.5rem;
	padding-top: 0.2rem;
}
.container .my_detail:hover{
	background-color: #000000;
	text-decoration: none;
}
.container .font_sizeC{
	font-size: 2rem;
}
.carousel-indicators li{
	background-color: rgba(255, 150, 164, 0.3);
}

.carousel-indicators .active {
  background-color: #ff627d;
}
.container .my_img:hover{
	cursor: pointer;
	cursor: pointer;
	transform: scaleX(1.1) scaleY(1.1);
	transition:all 1s ease 0s;
}
.my_image{
  background: url("../assets/Index/pb1.png");
	background-size: cover;
	overflow: hidden;
}
.my_image2{
  background: url("../assets/Index/pb6.png");
	background-size: cover;
	overflow: hidden;
}
.my_image3{
  background: url("../assets/Index/pb5.png");
	background-size: cover;
	overflow: hidden;
}
.my_image4{
  background: url("../assets/Index/pb7.png");
	background-size: cover;
	overflow: hidden;
}
.my_image,.my_image2,.my_image3,.my_image4{
	width: 275px;
	height: 400px;
	margin-right: 10px;
	position: relative;
}
.image_child{
	display: block;
	width: 275px;
	height: 400px;
	background-color: rgba(0, 0, 0, .5);
	text-align: center;
	line-height:370px;
	font-size: 80px;
	color: #ffb0ff;
	position:absolute;
	/* 定义要变化的元素的起始样式（带transition和overflow） */
	bottom:-400px;
	transition: all .5s linear;
}
.my_image:hover>div>.image_child{
	position: absolute;
	bottom: 0;
	text-decoration: none;
}
.my_image2:hover>div>.image_child{
	position: absolute;
	bottom: 0;
	text-decoration: none;
}
.my_image3:hover>div>.image_child{
	position: absolute;
	bottom: 0;
	text-decoration: none;
}
.my_image4:hover>div>.image_child{
	position: absolute;
	bottom: 0;
	text-decoration: none;
}
</style>

