<template>
	<div class="star">
		<span v-bind:class="star" v-for="star in stars"></span>
	</div>
</template>

<script>
	export default{
		name:'star',
		props:['num'],
		computed:{
			stars:function () {
				var s = []
				var intHert = parseInt(this.num/10)
				var hertPart = (parseInt(this.num)/10 - intHert === 0)?false:true

				for (var i = 0; i < intHert; i++) {
					s.push("on")
				}
				if (hertPart) {
					s.push("half")
				}
				while (s.length < 5) {
					s.push("off")
				}
				return s 
			}
		}

	}
</script>

<style scoped>
	.star span{
		display: inline-block;
		width: 14px;
		height: 14px;
		background-size: 10px 10px;
		background-repeat: no-repeat;
	}
	.on{
		background-image: url("../assets/star36_on@2x.png");
	}
	.half{
		background-image: url("../assets/star36_half@2x.png");
	}
	.off{
		background-image: url("../assets/star36_off@2x.png");
	}
</style>
