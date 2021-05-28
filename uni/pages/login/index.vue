<template>
	<view class="content flex justify-center padding-top-lg">
		<div class="loginBox margin-xl radius padding-lg shadow-warp bg-white" >
			<div class="flex solids-bottom line">
				<div class="label flex align-center">
					<text class="cuIcon-phone"></text>
				</div>
				<div class="margin-left-lg flex-sub flex align-center">
					<input class="flex-sub" v-model="phone" type="text" placeholder="请输入电话"  maxlength="11" />
				</div>
				
			</div>
			
			<div class="flex margin-top-lg solids-bottom line">
				<div class="label flex align-center">
					<text class="cuIcon-lock"></text>
				</div>
				<div class="margin-left-lg flex-sub flex align-center">
					
					<template v-if="pwType=='password'">
						<input class="flex-sub" type="password" v-model="pw" placeholder="请输入密码" maxlength="20" />
						<text class="cuIcon-attentionfill padding-lr-sm" @tap="pwType='text'"></text>
					</template>
					<template v-if="pwType=='text'">
						<input class="flex-sub" type="text" v-model="pw" placeholder="请输入密码" maxlength="20" />
						<text class="cuIcon-attention padding-lr-sm" @tap="pwType='password'"></text>
					</template>
				</div>
			</div>
			<div class="margin-top-lg" @tap="login">
				<button>登录</button>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pwType:'password',
				phone:'',
				pw:''
			}
		},
		onLoad() {
			
		},
		methods: {
			login(){
				uni.request({
					url:'http://192.168.0.199:3000/api/user/login',
					data:{
						phone:this.phone,
						pw:this.pw
					},
					header:{
						'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
					}, 
					method:"POST",
					success: (res) => {
						console.log(res.data);
						if(res.data.code == 200){
							let data = res.data
							uni.showToast({
								icon:'none',
								title:data.msg
							})
							
							// console.log(data.data,JSON.stringify(data.data) != "{}")
							if(JSON.stringify(data.data) != "{}"){
								//更新登陆状态
								uni.setStorage({
									key: 'userInfo',
									data:data.data,
									success: (res) => {
										
									}
								});
								uni.reLaunch({
									url:'/pages/home/index'
								})
							}
						}else{
							uni.showToast({
								icon:'none',
								title:'出问题啦！'
							})
						}
						
						
					}
				})
			}
		}
	}
</script> 

<style scoped lang="scss">
	
	.loginBox{
		width: 100%;
		.line{
			line-height: 100rpx;
			
		}
		.label{
			font-size: $uni-font-size-lg;
		}
		button{
			font-size: $uni-font-size-lg;
		}
		input{
			background: #fff;
			border: none !important;
			outline: none !important;
		}
	}
</style>
