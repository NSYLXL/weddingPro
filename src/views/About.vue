<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
	<div class="container-fluid">
		<my-header></my-header>
		<div class="container">		
			<div class="contant row no-gutters mb-5">
				<div class="col-lg-6 mt-3 pl-5">
					<img class="w-25" src="images/about/p6.png" >
					<div class="font_small my_font mt-3">
						<p>Wedding公司成立于2009年，至今已有十年历史。这十年来，我们秉承着顾客至上、服务至上的宗旨，十年如一日，全心全意为客户提供最完美的婚庆服务。公司发展至今，千图婚庆公司成立于2009年，至今已有十年历史。这十年来，我们秉承着顾客至上、服务至上的宗旨，十年如一日，全心全意为客户提供最完美的婚庆服务。公司发展至今，千图婚庆公司成立于2009年，至今已有十年历史。</p>
						<p>这十年来，我们秉承着顾客至上、服务至上的宗旨，十年如一日，全心全意为客户提供最完美的婚庆服务。公司发展至今，十年如一日，全心全意为客户提供最完美的婚庆服务。公司发展至今，十年如一日，全心全意为客户提供最完美的婚庆服务。公司发展至今。</p>
					</div>
					<div>
						<ul class="list-unstyled d-flex justify-content-around text-center font_small mb-3">
							<li>
								<img src="images/about/p2.png" >
								<p class="pt-2 font-weight-bold">成立十年</p>
							</li>
							<li>
								<img src="images/about/p3.png" >
								<p class="pt-2 font-weight-bold">2888场策划</p>
							</li>
							<li>
								<img src="images/about/p4.png" >
								<p class="pt-2 font-weight-bold">3856对新人</p>
							</li>
							<li>
								<img src="images/about/p5.png" >
								<p class="pt-2 font-weight-bold">十佳婚庆</p>
							</li>
						</ul>
					</div>
					<div id="app">
						<p class="font_small pb-1 mb-0 text-info text-center">地址:上海市浦东新区某某街道888号</p>
						<div id="allmap" ref="allmap"></div>
					</div>				
				</div>
				<div class="col-lg-6 text-center mt-3">
					<img class="w-75" src="images/about/p1.png" >
				</div>
			</div>
		</div>
	</div>  
</template>
<script>
export default {
	name: 'App',
  methods: {
    map () {
      let map = new window.BMap.Map(this.$refs.allmap) // 创建Map实例
      map.centerAndZoom(new window.BMap.Point(121.474791,31.22506), 11) // 初始化地图,设置中心点坐标和地图级别
      map.addControl(new window.BMap.MapTypeControl({ // 添加地图类型控件
        mapTypes: [
          window.BMAP_NORMAL_MAP,
          window.BMAP_HYBRID_MAP
        ]
			}));
			// map.addControl(new window.BMap.NavigationControl());//平移缩放控件
      // map.setCurrentCity('上海') // 设置地图显示的城市
      map.enableScrollWheelZoom(true)// 开启鼠标滚轮缩放
    }
  },
  mounted () {
    this.map()
  }
}
</script>
<style scoped>
/* .container{
	padding-top: 100px;
} */
.container .contant{
	padding-top: 100px;
}
.w-25 {
  width: 15% !important;
}
.container .my_font{
	text-indent: 1.5rem;
}
#allmap {
  width:510px;
	height:180px;
	border:1px solid #ccc;
  /* overflow: hidden; */
}
</style>
