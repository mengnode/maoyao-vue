<template>
	<div class="ActingStaff">
		<div class="title">{{ActingStaff.celebrity.name_en}}&nbsp;&nbsp;&nbsp;{{ActingStaff.celebrity.name}}</div>
		<div class="herd">
			<img :src="ActingStaff.celebrity.avatars.medium">
			<h3>影星资料</h3>
			<p>{{ActingStaff.celebrity.name}}</p>
			<p>{{ActingStaff.celebrity.name_en}}</p>
			<div></div>
			<div class="staff" v-for="item in ActingStaff.works">
				<div>
					<img :src="item.subject.images.medium">
				</div>
				<div>
					<p v-for="it in item.roles">{{it}}</p>
					<p>{{item.subject.year}}</p>
				</div>
				<div>
					<star :score="item.subject.rating.average"></star>
					{{item.subject.rating.average}}分
					{{item.subject.collect_count}}人评价
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import star from './star'
	export default{ 
		data(){
			return{
				ActingStaff:{
					celebrity:{
						name:"",
						name_en:"",
						avatars:{
							medium:""
						}
					},
					works:[{
						roles:[],
						subject:{
							rating:{
								average:''
							},
							collect_count:'',
							title:'',
							images:{
								medium:''
							},
							year:''
						}
					}]

				}
			}
		},
		components: {
			star:star
		},
		mounted:function () {
			var id = this.$route.params.id
			this.$http.jsonp("https://api.douban.com//v2/movie/celebrity/"+id+"/works?apikey=0b2bdeda43b5688921839c8ecb20399b").then(function(response) {
				console.log(response)
				this.ActingStaff = response.body;
			})
		}
	}
</script>

<style scoped>
	.title{
		background: #e54847;
		height: 38px;
		padding: 6px;
		line-height: 38px;
		text-align: center;
	}
</style>