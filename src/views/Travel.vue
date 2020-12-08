<template>
  <div class="container-fluid">
		<my-header></my-header>
		 <div class="contant"></div>
			<!-- 轮播图 -->
			<div id="demo" class="carousel" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<a href="#"><img class="w-100" src="images/travel/banner.png" ></a>
					</div>
					<div class="carousel-item">
						<a href="#"><img class="w-100" src="images/travel/banner2.png" ></a>
					</div>
					<div class="carousel-item">
						<a href="#"><img class="w-100" src="images/travel/banner3.png" ></a>
					</div>
				</div>
				<!-- 指示器 -->
				<ul class="carousel-indicators">
					<li data-slide-to="0" data-target="#demo" class="active"></li>
					<li data-slide-to="1" data-target="#demo"></li>
					<li data-slide-to="2" data-target="#demo"></li>
				</ul>
				<!-- 箭头 -->
				<a data-slide="next" class="carousel-control-next" href="#demo">
					<span class="carousel-control-next-icon"></span>
				</a>
				<a data-slide="prev" class="carousel-control-prev" href="#demo">
					<span class="carousel-control-prev-icon"></span>
				</a>	
			</div>
			<!-- 品牌故事 -->
			<div class="container">
				<div class="row no-gutters mt-3">
					<div class="col-lg-6 col-sm-12">
						<div class="story_text">
							<p class="font_color font-weight-bold">品牌故事</p>
							<p class="font_small font-weight-bold">高水镇的摄影技术和良好的服务感受</p>
							<p class="font_small pr-lg-2">>>>Wedding集团旗下的婚纱摄影创立于2019年5月20号,座落在上海市浦东新区,是一家从事人像婚纱摄影服务及商业广告摄影的专业影像设计服务公司,旗下拥有众多业内顶尖策划师,摄影师,化妆师及强大的设计制作团队。给到客户旗的体验和拍的感受,它代表了高水准的摄影技术和良好的服旁感受,用双影像的方式记录下人生每一个画面的阶段。</p>
						</div>
					</div>
					<div class="col-lg-6 col-sm-12">
						<img class="w-75" src="images/travel/p1.png" >
					</div>
				</div>
				<!-- 房车 -->
				<div class="text-center mt-5 mb-5">
					<p class="font_color font-weight-bold">首创房车出行旅拍理念</p>
					<p class="font_small text-muted font-weight-bold">真正实现即有旅的感受，又有拍的体验</p>
				</div>
				<div class="row no-gutters">
					<div class="col-lg-6 col-sm-6">
						<div class="row no-gutters">
							<div class="col-lg-6 col-sm-6">
								<img class="w-100" src="images/travel/p3.png" >
								<img class="w-100" src="images/travel/p15.png" >
							</div>
							<div class="col-lg-6 col-sm-6">
								<img class="w-100" src="images/travel/p16.png" >
								<img class="w-100" src="images/travel/p4.png" >
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-sm-6">
						<img class="w-100" src="images/travel/p2.png" >
					</div>
				</div>
				<!-- 双影像 -->
				<div class="text-center mt-5 mb-5">
					<p class="font_color font-weight-bold">双影像、双静态双拍摄</p>
					<p class="font_small text-muted font-weight-bold">打破了传统的婚纱照拍摄模式</p>
					<p class="font_small text-muted pl-5 pr-5">创新提出双影像拍摄。静态照片加动态视频拍摄，用动态的方式制西人物的情绪，丰富情感的交流可以更好的融入我们的生活。让每一个幸福啊问都不容错过。拍摄记录下来的花絮是送给未来的自己最好的礼物，那些声情并茂的画面，在十年、二十年后再看，一定会带来无限的感动和回忆。让我们在未来荣米油盐酱疆茶的生活中。不断的复习爱情。</p>
				</div>
				<!-- 各类婚纱照类型 -->
				<div>
					<img class="w-100" src="images/travel/banner5.png" >
					<img class="w-100 mt-5 mb-5" src="images/travel/p17.png" >
				</div>
			</div>
			<!-- 拒绝任何形式代拍 -->
			<div class="bg-dark w-100 h-25 text-center pt-3">
				<p class="text-white font-weight-bold">拒绝任何形式代拍</p>
				<p class="text-white font_small">代拍是一种旅拍的低端形式， 千圈出资2000万打造全新旅拍风格店，拍摄全程一对服务，不满意无条件重拍。</p>
			</div>
			<img class="w-100" src="images/travel/banner1.png" >
			<div class="text-center bg-white w-100 h-75"><img class="w-50" src="images/travel/p14.png" ></div>
			<my-footer></my-footer>			
		</div>
</template>
<style scoped>
/* .container-fluid{
	padding-top: 100px;
} */
.contant{
	padding-top: 100px;
}
.story_text{
	padding-left: 9rem;
	padding-top: 3rem;
}
.h-25 {
  height: 15% !important;
}
</style>