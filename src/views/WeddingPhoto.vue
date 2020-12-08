<template>
  <div class="container-fluid">
		<my-header></my-header>
		<div class="contant"></div>
			<!-- banner -->
			<div>
				<img class="w-100" src="images/weddingPhoto/banner.jpg" >
			</div>			
			<div class="container">
				<!-- 最近拍摄的婚纱 -->
				<div class="text-center font_color font-weight-bold mt-5">
					<p>我们最近拍摄的婚纱</p>
					<img src="images/weddingPhoto/line.png" >
				</div>
				<div class="row no-gutters mt-3">
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="my_pic ">
              <div class="pic_child">
								<a class="btn btn-info" href="#">查看详情</a>
							</div>
            </div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="my_pic ">
              <div class="pic_child">
								<a class="btn btn-info" href="#">查看详情</a>
							</div>
            </div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="my_pic ">
              <div class="pic_child">
								<a class="btn btn-info" href="#">查看详情</a>
							</div>
            </div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="my_pic ">
              <div class="pic_child">
								<a class="btn btn-info" href="#">查看详情</a>
							</div>
            </div>
					</div>
				</div>
        <!-- 4张图 -->
        <div class="row no-gutters mt-3">
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="my_pic ">
              <div class="pic_child">
								<a class="btn btn-info" href="#">查看详情</a>
							</div>
            </div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="my_pic ">
              <div class="pic_child">
								<a class="btn btn-info" href="#">查看详情</a>
							</div>
            </div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="my_pic ">
              <div class="pic_child">
								<a class="btn btn-info" href="#">查看详情</a>
							</div>
            </div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-6">
						<div class="my_pic ">
              <div class="pic_child">
								<a class="btn btn-info" href="#">查看详情</a>
							</div>
            </div>
					</div>
				</div>
				<div class="text-center mt-3">
					<a class="font_small font_color" href="#">更多>></a>
				</div>
				<!-- 视频 -->
				<video width="100%" height="500" controls autoplay muted loop class="mt-3">
					<source src="../assets/WeddingPhoto/wedding_dress.mp4">
				</video>
				<!-- 三个 -->
				<div class="row no-gutters mt-5">
					<div class="col-lg-4 col-sm-4">
						<div class="text-center">
							<img class="w-25" src="images/weddingPhoto/gongsiyuanjing.png" type="video/mp4">
							<p class="mt-3">愿景</p>
						</div>			
					</div>
					<div class="col-lg-4 col-sm-4">
						<div class="text-center">
							<img class="w-25" src="images/weddingPhoto/zuanshi-5.png" >
							<p class="mt-3">价值观</p>
						</div>	
					</div>
					<div class="col-lg-4 col-sm-4">
						<div class="text-center">
							<img class="w-25" src="images/weddingPhoto/xunzhang.png" >
							<p class="mt-3">使命</p>
						</div>	
					</div>
				</div>
			</div>
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
.my_pic{
  width: 275px;
	height: 400px;
  background: url("../assets/WeddingPhoto/p1.png");
	background-size: cover;
  overflow: hidden;
	position: relative;
}
.my_pic>.pic_child{
  display: block;
	width: 275px;
	height: 400px;
	background-color: rgba(0, 0, 0, .5);
	text-align: center;
	line-height:370px;
	font-size: 20px;
	position:absolute;
	/* 定义要变化的元素的起始样式（带transition和overflow） */
	left: -275px;
	transition: all .5s linear;
}
.my_pic:hover>.pic_child{
  position: absolute;
	left: 0;
	text-decoration: none;
}
</style>