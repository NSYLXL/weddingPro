<template>
  <div class="container-fluid">
			<!-- 上部分 -->
			<div class="bg">
				<div class="text-center pt-5">
					<p class="text-white">联系我们</p>
					<img src="images/footer/Line.png" >
					<p class="text-white font-italic">Lorem IpsupsumLorem Ipsumm</p>
				</div>
				<div class="font_small text-center pt-5">
					<input class="pl-2" type="text" placeholder="你的姓名:"/>
					<input class="pl-2" type="text" placeholder="你的地址:"/>
					<input class="pl-2" type="text" placeholder="你的留言:"/>
				</div>
				<div class="text-center pt-4 font_small">
					<button type="button">提交申请</button>
				</div>
			</div>
			<!-- 下部分 -->
			<div class="pinkBg d-flex font_small text-white justify-content-center pt-2">
				<div>
					<p>服务热线 : 021-88888888</p>
					<p>邮箱 : wedding@sina.com</p>
					<p>地址 : 上海市浦东新区某某街道888号</p>
					<div>
						<ul class="breadcrumb">
							<li class="breadcrumb-item"><router-link to="/question">常见问题</router-link></li>
							<li class="breadcrumb-item"><router-link to="/propose">意见建议</router-link></li>
							<li class="breadcrumb-item"><router-link to="/help">帮助中心</router-link></li>
						</ul>
					</div>
				</div>
				<div class="ml-5 text-center">
					<img src="images/footer/code.png" >
					<p>微信二维码</p>
				</div>
			</div>
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
.container-fluid .bg{
	width: 100%;
	height:75%;
	background: url("../assets/Footer/bg.png") no-repeat;
	background-size:cover;
	padding-bottom: 6rem;
}
.container-fluid .pinkBg{
	width: 100%;
	height:25%;
	background-color: #fc93a3;
}
.pt-5{
  padding-top: 5rem !important;
}
.container-fluid button{
	border: 1px solid #ff627d;
	border-radius: 0.3125rem;
	background-color: #ff627d;
	padding: 0.2rem 1rem;
	color: #fff;
}
.container-fluid button:hover{
	cursor: pointer;
	background-color: #fc93a3;
	border-color: #fc93a3;
}
.breadcrumb{
	width: 100%;
	padding: 0;
	margin-bottom: 0;
	background-color: rgba(0,0,0,0);
	border-radius: 0;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: "|";
	color: #fff;
}
.breadcrumb>.breadcrumb-item>a{
	color: #fff;
}
.breadcrumb>.breadcrumb-item>a:hover{
	color: #000;
	text-decoration: none;
}
</style>