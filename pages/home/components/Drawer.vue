<template>
	<view class="menu">
		<view class="title padding flex flex-direction justify-center align-center shadow shadow-lg bg-white radius   margin">
			<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
			<view class="margin-top">
				你的名字
			</view>
		</view>
		<view class="cu-list menu padding-lr margin-top margin-bottom radius">
			<view class="cu-item arrow" >
				<view class="content " @tap.stop="go('/pages/goods/index')">
					<text class="cuIcon-roundadd text-blue"></text>
					<text class="text-grey">新增种类</text>
				</view>
			</view>
			<view class="cu-item arrow margin-top" >
				<view class="content">
					<text class="cuIcon-repair text-grey"></text>
					<text class="text-grey">忘记密码</text>
				</view>
			</view>
			<view class="cu-item arrow margin-top" >
				<view class="content">
					<text class="cuIcon-unlock text-grey"></text>
					<text class="text-grey">修改密码</text>
				</view>
			</view>
			<view class="cu-item arrow margin-top" >
				<view class="content">
					<text class="cuIcon-repair text-grey"></text>
					<text class="text-grey">忘记密码</text>
				</view>
			</view>
			<view class="cu-item arrow margin-top" >
				<view class="content">
					<text class="cuIcon-unlock text-grey"></text>
					<text class="text-grey">修改密码</text>
				</view>
			</view>
			<view class="cu-item arrow margin-top" >
				<view class="content">
					<text class="cuIcon-repair text-grey"></text>
					<text class="text-grey">忘记密码</text>
				</view>
			</view>
		</view>
		<view class="padding-lr">
			<button class="bg-red">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			go(url){
				this.$emit('closeModal')
				this.$nextTick(() => {
					setTimeout(() => {
						uni.navigateTo({
							url:url
						})
					},300)
				})
			}
		}
	}   
</script>
 
<style scoped lang="scss">
	.menu{
		height: 100%;
	}
</style>
