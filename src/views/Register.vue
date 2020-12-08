<template>
  <div class="container-fluid">
			<div class="bgpic1">
				<div class="box">
					<p>用户注册</p>
					<table class="font_small text-right">
						<tr>
							<td class="pr-2 pb-2"><span class="text-danger">*</span>用户名</td>
							<td class="pb-2">
								<input type="text" name="" id="" v-model="uname" placeholder="请输入用户名"/>
							</td>
							<td><span :class="unameSpan">{{unameMsg}}</span></td>
						</tr>
						<tr>
							<td class="pr-2 pb-2"><span class="text-danger">*</span>邮箱</td>
							<td class="pb-2">
								<input type="email" name="" id="" v-model="email" placeholder="请输入邮箱"/>
							</td>
							<td><span :class="emailSpan">{{emailMsg}}</span></td>
						</tr>
						<tr>
							<td class="pr-2 pb-2"><span class="text-danger">*</span>手机号</td>
							<td class="pb-2">
								<input type="text" name="" id="" v-model="phone" placeholder="请输入手机号"/>
							</td>
							<td><span :class="phoneSpan">{{phoneMsg}}</span></td>
						</tr>
						<tr>
							<td class="pr-2 pb-2"><span class="text-danger">*</span>密码</td>
							<td class="pb-2">
								<input type="password" name="" id="" v-model="upwd1" placeholder="请输入密码"/>
							</td>
							<td><span :class="upwd1Span">{{upwdMsg1}}</span></td>
						</tr>
						<tr>
							<td class="pr-2"><span class="text-danger">*</span>确认密码</td>
							<td class="pb-2">
								<input type="password" name="" id="" v-model="upwd2" placeholder="请重新输入密码"/>
							</td>
							<td><span :class="upwd2Span">{{upwdMsg2}}</span></td>
						</tr>
						<tr>
							<td colspan="2">
								<input type="checkbox" v-model="isAgree">同意所有解释权归本网站所有<br/>
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<button :disabled="isAgree==false" @click="handleReg">快速注册</button>
							</td>
						</tr>
					</table>
				</div>
				<!-- 弹框 -->
				<div class="pop" v-show="isShow">
					<p class="mt-2">注册成功!</p>
					<p class="font_small text-info">将自动为您跳转...</p>
       </div>
			</div>
		</div>
</template>
<script>
export default {
	data(){
		return{
			isAgree:false,
			uname:"",
			email:"",
			phone:"",
			upwd1:"",
			upwd2:"",
			unameMsg:"",
			emailMsg:"",
			phoneMsg:"",
			upwdMsg1:"",
			upwdMsg2:"",
			unameSpan:{
				success:false,
			  fail:false,
			},
			emailSpan:{
				success:false,
			  fail:false,
			},
			phoneSpan:{
				success:false,
			  fail:false,
			},
			upwd1Span:{
				success:false,
			  fail:false,
			},
			upwd2Span:{
				success:false,
			  fail:false,
			},
			isShow:false,
		}
	},
	methods:{
		checkUname(){
			var reg=/^[0-9A-Za-z]{6,12}$/;
			if(reg.test(this.uname)==true){
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
				this.unameMsg="用户名必须6~12位";
				return false;
			}
		},
		checkEmail(){
			var reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if(reg.test(this.email)==true){
				this.emailSpan={
					success:true,
				  fail:false
				}
				this.emailMsg="√";
				return true;
			}else{
				this.emailSpan={
					success:false,
				  fail:true
				}				
				this.emailMsg="邮箱格式错误";
				return false;
			}
		},
		checkPhone(){
			var reg=/^1[3-9]\d{9}$/;
			if(reg.test(this.phone)==true){
				this.phoneSpan={
					success:true,
				  fail:false
				}
				this.phoneMsg="√";
				return true;
			}else{
				this.phoneSpan={
					success:false,
				  fail:true
				}
				this.phoneMsg="手机格式错误";
				return false;
			}
		},
		checkUpwd1(){
			var reg=/^[0-9A-Za-z]{6,12}$/;
			if(reg.test(this.upwd1)==true){
				this.upwd1Span={
					success:true,
				  fail:false
				}
				this.upwdMsg1="√";
				return true;
			}else{
				this.upwd1Span={
					success:false,
				  fail:true
				}
				this.upwdMsg1="密码必须6~12位";
				return false;
			}
		},
		checkUpwd2(){
			if(this.upwd1==this.upwd2){
				this.upwd2Span={
					success:true,
				  fail:false
				}
				this.upwdMsg2="√";
				return true;
			}else{
				this.upwd2Span={
					success:false,
				  fail:true
				}
				this.upwdMsg2="两次密码不一致";
				return false;
			}
		},
		handleReg(){
			if(this.checkUname() && this.checkEmail() && this.checkPhone() && this.checkUpwd1() && this.checkUpwd2()){
				this.isShow=true;
				setTimeout(function(){
					 window.location.href="/login";
				},1000)
			}else{
				this.isShow=false;
			}
		}
	},
	watch:{
		uname(){
			this.checkUname();
		},
		email(){
			this.checkEmail();
		},
		phone(){
			this.checkPhone();
		},
		upwd1(){
			this.checkUpwd1();
		},
		upwd2(){
			this.checkUpwd2();
		},
	}
}
</script>
<style scoped>
.container-fluid>.bgpic1{
	width: 100%;
	height: 100%;
	background: url("../assets/Register/bg.jpg") no-repeat;
  position: fixed;
	background-size: cover;
}
.container-fluid>.bgpic1>.box{
	width: 30rem;
	height: 25rem;
	position: absolute;
	left: 16rem;
	top: 11rem;
}
.container-fluid>.bgpic1>.box>p{
	text-align: center;
	font: 2rem 宋体;
	font-weight: bold;
	color: #7db9b9;
}
.container-fluid>.bgpic1>.box table{
	margin-left: 100px;
}
.container-fluid>.bgpic1>.box table input{
	border: 1px solid #7db9b9;
	padding:.2rem .2rem;
}
.container-fluid>.bgpic1>.box table button{
	/* border: 1px solid #7db9b9;
	background-color: #7db9b9;
	color: #fff; */
	margin-top: 1rem;
	padding: .2rem 1rem;
	cursor: pointer;
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
	color:red;
}
.pop{
	width:200px; height:80px;
	position:fixed;
	top:50%;
	left:50%;
	margin-left:-150px;
	margin-top:-30px;
	background-color: rgba(0,0,0,.7);
	color:#fff;
	text-align:center;
	border-radius: 4px;
}
.pop>.close{
	float:right;
	padding:5px 10px;
	cursor:pointer;
}
</style>