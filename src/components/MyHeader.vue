<template>
  <div class="container">
			<div class="text-center mt-2 mb-3">
				<img class="w-25" src="images/header/logo.png" >
			</div>
			<div class="row no-gutters">
				<div class="box col-lg-9 col-md-9 col-sm-9">
					<ul class="list-unstyled d-flex justify-content-around font_small mt-1">
						<li><router-link to="/">首页</router-link></li>
						<li><router-link to="/photo">婚纱摄影</router-link></li>
						<li><router-link to="/service">婚礼服务</router-link></li>
						<li><router-link to="/travel">全球旅拍</router-link></li>
						<li>
							<a href="javascript:;">
								<img class="h-75 text-center pb-1" src="images/header/liebiao.png" >
								关于
							</a>
							<ul class="list-unstyled">
								<li class="pb-1"><router-link to="/about">关于我们</router-link></li>
								<li><router-link to="/news">新闻资讯</router-link></li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-3 d-flex pl-5 mt-1">
					<!-- <div>
						<img class="w-75" src="images/header/phone.png" >
					</div> -->
					<div class="pl-2 font_small d-flex">
						<!-- <p>咨询热线:400-888-888</p> -->
						<div class="pl-2">
							<span><router-link to="/login">登录</router-link></span>
							<span>|</span>
							<span><router-link to="/register"> 注册</router-link></span>
						</div>					
					</div>
				</div>
			</div>
		</div>
</template>
<style scoped>
.container{
	position: absolute;
	z-index: 1;
	margin-left: 75px;
}
.w-25 {
  width: 15% !important;
}
.container .box{
	width: 6.25rem;
	height: 2rem;
	border: 1px solid #fc93a3;
	border-radius: 1.25rem;
}
.container .box>ul>li>a{
	color: #7d7d7d;
}
.container .box>ul>li>a:hover{
	color: #fc93a3;
	text-decoration: none;
}
.container span>a{
	color: #fc93a3;
	padding-right: 0.35rem;
}
.container span>a:hover{
	color: #ff4662;
	text-decoration: none;
}
.container .box>ul>li:last-child>a{
	display: block;
	width: 5rem;
	height: 1.2rem;
	background-color:#fc93a3;
	text-align: center;
	color: #fff;
	border-radius: 0.2rem;
}
.container .box>ul>li:last-child:hover>a{
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}
.container .box>ul>li:last-child>ul{
	width: 5rem;
	height: 5rem;
	background-color: #fc93a3;
	text-align: center;
	border-bottom-left-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
	padding-top: 1rem;
}
.container .box>ul>li:last-child>ul>li>a{
	color: #fff;
	text-decoration: none;
}
.container .box>ul>li:last-child>ul>li>a:hover{
	color: yellow;
}
.container .box>ul>li:last-child>ul{
	/* display: none; */
	opacity: 0;
	 /* transition:top .5s linear, opacity .2s linear; */
}
.container .box>ul>li:last-child:hover>ul{
	/* display: block; */
	opacity: 1;
}

.container .box>ul>li:last-child>ul{
  width:0px;
  height:0px;
  overflow:hidden;
}
.container .box>ul>li:last-child:hover>ul{
  width:5rem;
  height:5rem;
}
</style>