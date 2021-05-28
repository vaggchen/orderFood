<template>
	<div class="bg-gradual-blue">
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
						<cu-custom bgColor="bg-gradual-blue" >
							<!-- <block slot="backText">返回</block> -->
							<block slot="content">首页</block>
						</cu-custom>
			<view class='padding margin text-center'>
				<view class='cu-btn bg-green lg block shadow radius margin-xl' @tap="showModal" data-target="viewModal">
					打开抽屉
				</view>
			</view>
			
			<view class="action padding-tb bg-white">
				<text class="cuIcon-title text-blue"></text>
				饭
			</view>
			<view class="flex padding-lr-xs padding-tb">
				<view class="magin-tb padding-lr-xs">
					<uni-button class="cu-btn radius " :class="currId==1?'bg-green':'line-gray'" @tap="currId==1?currId='':currId=1">
						套饭
					</uni-button>
				</view>
				<view class="magin-tb padding-lr-xs">
					<uni-button class="cu-btn radius" :class="currId==2?'bg-green':'line-gray'" @tap="currId==2?currId='':currId=2">
						盖浇饭
					</uni-button>
				</view>
				
			</view>
			<view class="action padding-tb bg-white">
				<text class="cuIcon-title text-blue"></text>
				饭
			</view>
			<view class="flex padding-lr-xs padding-tb">
				<view class="magin-tb padding-lr-xs">
					<uni-button class="cu-btn radius line-gray">
						套饭
					</uni-button>
				</view>
				<view class="magin-tb padding-lr-xs">
					<uni-button class="cu-btn radius line-gray">
						盖浇饭
					</uni-button>
				</view>
				
			</view>
		</scroll-view>
		
		<view class="footer bg-white padding flex justify-between" :class="modalName=='viewModal'?'':'show'">
			<view class="">
				当前选中:{{currId}}
			</view>
			<view class="">
				<button class="cu-btn sm bg-green">确定</button>
			</view>
		</view>
		
		<scroll-view class="DrawerWindow" :class="modalName=='viewModal'?'show':''"  @tap="showModal" data-target="viewModal">
			<Drawer @closeModal="hideModal" />
		</scroll-view>
		
		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
	</div>
</template>

<script>
	import Drawer from './components/Drawer.vue'
	export default {
		data(){
			return {
				modalName:'',
				currId:''
			}
		},
		components:{
			Drawer
		},
		methods:{
			showModal(e) {
				uni.hideTabBar()
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(){
				console.log('22')
				uni.showTabBar()
				this.modalName = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
		page {
			// background-image: var(--gradualBlue);
			width: 100vw;
			overflow: hidden;
		}
	
		.DrawerPage {
			position: fixed;
			width: 100vw;
			height: 100vh;
			left: 0vw;
			background-color: #f1f1f1;
			transition: all 0.4s;
		}
	
		.DrawerPage.show {
			transform: scale(0.9, 0.9);
			left: 85vw;
			box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
			transform-origin: 0;
		}
	
		.DrawerWindow {
			position: absolute;
			width: 85vw;
			height: 100vh;
			left: 0;
			top: 0;
			transform: scale(0.9, 0.9) translateX(-100%);
			opacity: 0;
			pointer-events: none;
			transition: all 0.4s;
			// padding: 100upx 0;
			overflow: auto;
		}
	
		.DrawerWindow.show {
			transform: scale(1, 1) translateX(0%);
			opacity: 1;
			pointer-events: all;
		}
	
		.DrawerClose {
			position: absolute;
			width: 40vw;
			height: 100vh;
			right: 0;
			top: 0;
			color: transparent;
			padding-bottom: 30upx;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
			letter-spacing: 5px;
			font-size: 50upx;
			opacity: 0;
			pointer-events: none;
			transition: all 0.4s;
		}
	
		.DrawerClose.show {
			opacity: 1;
			pointer-events: all;
			width: 15vw;
			color: #fff;
		}
	
		.DrawerPage .cu-bar.tabbar .action button.cuIcon {
			width: 64upx;
			height: 64upx;
			line-height: 64upx;
			margin: 0;
			display: inline-block;
		}
	
		.DrawerPage .cu-bar.tabbar .action .cu-avatar {
			margin: 0;
		}
	
		.DrawerPage .nav {
			flex: 1;
		}
	
		.DrawerPage .nav .cu-item.cur {
			border-bottom: 0;
			position: relative;
		}
	
		.DrawerPage .nav .cu-item.cur::after {
			content: "";
			width: 10upx;
			height: 10upx;
			background-color: currentColor;
			position: absolute;
			bottom: 10upx;
			border-radius: 10upx;
			left: 0;
			right: 0;
			margin: auto;
		}
	
		.DrawerPage .cu-bar.tabbar .action {
			flex: initial;
		}
		.footer{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			opacity: 0;
			transition: all 0.4s;
		}
		.footer.show{
			opacity: 1;
		}
</style>
