<template>
	<div class="MovieDetail">
		<div class="head">
			<a href="./"><</a>
			{{MovieDetail.title}}
		</div>
		<div class="infor">
	          <img class="cover" v-bind:src="MovieDetail.images.medium">
				<star v-bind:num="MovieDetail.rating.stars"></star>
				<p>{{MovieDetail.title}}</p>
				<p>{{MovieDetail.rating.average}}({{MovieDetail.collect_count}}人评论)</p>
				<p>{{MovieDetail.year}}年</p>
				<p>{{MovieDetail.genres.join(",")}}</p>
				<P>{{MovieDetail.countries[0]}}</P>
				<p>{{MovieDetail.pubdates[2]}}</p>
			</div>
			<div class="main">
				<div class="want">
					<div class="item">
						{{MovieDetail.wish_count}}人想看
					</div>
					<div class="item">
						{{MovieDetail.reviews_count}}人看过
					</div>
				</div>
				<p class="summary">
					{{MovieDetail.summary}}
				</p>
				<h6>演职人员</h6>
				<ul class="casts">
					<li class="items" v-for="item in MovieDetail.directors" v-on:click="doThis(item.id)">
						<img v-bind:src="item.avatars.small" :alt="item.alt">
						<p>{{item.name}}</p>
					</li>
					<li v-for="cast in MovieDetail.casts" v-on:click="doThis(cast.id)">
						<img v-bind:src="cast.avatars.small">
						<p>{{cast.name}}</p>
					</li>
				</ul>
				<h6>热门短评</h6>
				<div class="comments">
					<div class="item" v-for="c in MovieDetail.popular_comments">
						<p class="t">
							<star class="star" v-bind:num="c.rating.value*10"></star>
							<span>{{c.created_at}}</span>
						</p>
						<p class="c">{{c.content}}</p>
						<p class="a"><img v-bind:src="c.author.avatar">
						<span>{{c.author.name}}</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import loading from './loading'
	import star from './star'
	export default{
		data(){
			return {
				MovieDetail:{
					title:"",
					images:{
						medium:""
					},
					rating:{
						stars:0
					},
					pubdates:"",
					countries:[],
					genres:[],
					year:"",
					 directors: [
			            {
			              avatars: {
			                'medium': ''
			              },
			             name: ''
			            }
			          ],
				}
				
			}
		},
		components:{
			loading:loading,
			star:star
		},
		mounted:function () {
			var id = this.$route.params.id;

			this.$http.jsonp("https://api.douban.com/v2/movie/subject/"+id+"?apikey=0b2bdeda43b5688921839c8ecb20399b").then(function(response) {
			 	
				//console.log(response)
				this.MovieDetail = response.body;
			})
		},
		methods:{
			doThis:function(id){
				this.$router.push({name:'ActingStaff',params:{id:id}})
			}
		}

	}
</script>


<style scoped>
	.head{
		height: 38px;
		padding: 6px;
		background-color: #e54847;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 20px;
	}
	.head a{
		display: inline-block;
		float: left;
		color:#fff;
		font-size: 20px;
		text-decoration: none;
	}
	.infor{
		background-color: #b4b1b1;
		color: #6b6868;
		padding: 15px;
		overflow: hidden;
	}
	.infor .cover{
		float: left;
		border: 1px solid #fff;
		margin-right: 20px;
	}
	.main{
		background: #e5e9f2;
		padding: 20px;
	}
	.main .want{
		text-align: center;
	}
	.main .want .item{
		margin: 0px 10px;
		width: 120px;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #fff;
		background-color: #e54847;
		border-radius: 5px;
		display: inline-block;
		text-align: center;
	}
	.main .summary{
		margin-top: 10px;
		font-size: 14px;
		line-height: 1.5em;
	}
	.main h6{
		font-size: 15px;
		font-weight: 700;
		color: 666;
		margin: 10px 0px;
	}
	.main .casts{
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
	}
	.main .casts .items{
		display: inline-block;
		margin-right: 0px;
	}
	.main .casts li{
		display: inline-block;
		margin-right: 5px;
	}
	.main .casts li p{
		width: 70px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 12px;
	}
	.main .casts li img{
		width: 70px;
	}
	.main .comments .item{
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
	}
	.main .comments .item .star{
		display: inline-block;
	}
	.main .comments .item .t *{
		vertical-align: bottom;
	}
	.main .comments .item .t span{
		font-size: 12px;
		line-height: 21px;
	}
	.main .comments .item .a *{
		vertical-align: middle;
		font-size: 14px;
	}
	.main .comments .item .a img{
		width: 24px;
		border-radius: 12px;
	}
</style>