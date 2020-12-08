<template>
  <div class="container-fluid">
			<div class="bg">
				<div class="content font_small">
					<p>EXCUSE ME</p>
					<p>你的页面可能去天空旅游了！请耐心等候!</p>
					<router-link to="/">返回首页</router-link>
				</div>
			</div>	
		</div>
</template>
<style scoped>
.container-fluid .bg{
	background:url("../assets/Erro/404.jpg") no-repeat;
  width:100%;
  height:100%;
  position:fixed;
  background-size:cover;
}
.container-fluid .bg .content{
	color: #fff;
	text-align: center;
	position: absolute;
	top: 28rem;
	left: 38rem;
}
.container-fluid .bg .content>a{
	display: block;
	width: 5rem;
	height: 1.5rem;
	color: #fff;
	text-align: center;
	border: 1px solid #fff;
	border-radius: 0.3125rem;
	margin-left: 5rem;
}
.container-fluid .bg .content>a:hover{
	color: #fc93a3;
	border: 1px solid #fc93a3;
	text-decoration: none;
}
</style>