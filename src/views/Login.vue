<template>
  <div class="container-fluid">
			<div class="bgpic">
				<div class="box">
					<table class="font_small">
						<tr>
							<td>
								<img class="h-75" src="images/login/login.png" >
							</td>
							<td class="d-flex">
								<input type="text" name="" id="" v-model="uname" @blur="checkuname" placeholder="请输入用户名"/>
								<span :class="unameSpan">{{unameMsg}}</span>
							</td>
						</tr>
						<tr>
							<td class="pt-3">
								<img class="h-75" src="images/login/mima.png" >
							</td>
							<td class="pt-3 d-flex">
								<input type="password" name="" id="" v-model="upwd" @blur="checkupwd" placeholder="请输入密码"/>
								<span :class="upwdSpan">{{upwdMsg}}</span>
							</td>
						</tr>
						<tr>
							<td class="pt-2" colspan="2">
								<a class="text-white forgetUpwd" href="#">忘记密码 ?</a>
							</td>
						</tr>
						<tr>
							<td class="pt-3" colspan="2">
								<button class="btn_quik" @click="loginTo">快速登录</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
</template>
<script>
export default {
  data(){
    return{
			uname:"",
			upwd:"",
			unameSpan:{
				success:false,
			  fail:false,
			},
			upwdSpan:{
				success:false,
			  fail:false,
			},
			unameMsg:"",
			upwdMsg:"",
    }
	},
	methods: {
		checkuname(){
			// 正则判断
			var reg=/^[0-9A-Za-z]{6,12}$/;
			if(reg.test(this.uname)==true){
				// 如果正确,打钩
				this.unameSpan={
					success:true,
				  fail:false
				}				
				this.unameMsg="√";
				return true;
			}else{
				this.unameSpan={
					success:false,
				  fail:true
				}				
				this.unameMsg="×";
        return false;
			}
		},
		checkupwd(){
			var reg=/^[0-9A-Za-z]{6,12}$/;
			if(reg.test(this.upwd)==true){
				// 如果正确,打钩
				this.upwdSpan={
					success:true,
				  fail:false
				}				
				this.upwdMsg="√";
				return true;
			}else{
				//如果错误,打叉
				this.upwdSpan={
					success:false,
				  fail:true
				}				
				this.upwdMsg="×";
				return false;
			}
		},
		loginTo(){
			if(this.checkuname() && this.checkupwd()){
				this.axios.get('/login','uname='+this.uname+'&upwd='+this.upwd).then(res=>{
					if(res.data.code==1){
						this.$router.push("/");
					}else{
						alert("用户名或密码错误");
					}
				});
				// if(this.uname=="linlin" && this.upwd=="123456"){
				// 	this.$router.push("/");
				// }else{
				// 	alert("用户名或密码错误");
				// }
			}
		}
	},
}
</script>
<style scoped>
.container-fluid .bgpic{
	background:url("../assets/Login/bg.jpg") no-repeat;
  width:100%;
  height:100%;
  position:fixed;
  background-size:cover;
}
.container-fluid .box{
	width: 15rem;
	height: 10rem;
  padding-top: 20rem;
	padding-left: 21rem;
}
.container-fluid .box>table input{
	border:1px solid #fc93a3;
	padding: 0.2rem 0.2rem;
}
.container-fluid .box>table button{
	border: 1px solid #f76997;
	border-radius: 0.3rem;
	background-color: #f76997;
	color: #fff;
	padding: 0.3rem 3rem;
}
.container-fluid .box>table button:hover{
	border: 1px solid #000000;
	background-color: #000000;
}
.success{
	display: block;
	width: 20px;
	height: 20px;
	background-color: green;
	border-radius: 50%;
	color: #fff;
	font-size: 16px;
	text-align: center;
	line-height: 1.2;
	margin-top: 3px;
	margin-left: 2px;
}
.fail{
	display: block;
	width: 20px;
	height: 20px;
	background-color: red;
	border-radius: 50%;
	color: #fff;
	font-size: 20px;
	text-align: center;
	line-height: 0.8;
	margin-top: 3px;
	margin-left: 2px;
}
/* .fail{
	display: block;
	width: 50px;
	height: 20px;
	color:red;
	font-size: 8px;
	text-align: center;
	margin-top: 3px;
	margin-left: 2px;
} */
.forgetUpwd{
	margin-left: 120px;
}
.btn_quik{
	margin-left: 25px;
}
</style>