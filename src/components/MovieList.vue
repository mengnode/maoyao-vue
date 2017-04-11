<template>
  <div>
    <div class="hade">
      <div class="logo">
        <img src="../assets/logo.png">
      </div>
      <div class="slongen">
        <h5>狗眼电影</h5>
        <p>查影讯，上狗眼电影就够了！</p>
      </div>
    </div>
    <div class="partition">
        <h3><a href="">正在热映</a></h3>
        <h4><a href="">即将上映</a></h4>
    </div>
    <div class="MovieList">
      <div class="item" v-for="movie in MovieList" v-on:click="gotoDeail(movie.id)">
        <div class="cover">
          <img v-bind:src="movie.images.medium">
        </div>
          <div class="title">
            {{movie.title}}
          </div>
          <star v-bind:num="movie.rating.stars"></star>
          <p class="score">
            {{movie.rating.average}}分
          </p>
          <div class="director">
            导演：{{movie.directors[0].name}}
          </div>
          <div class="starring">
            主演：
              <span v-for="cast in movie.casts">
                {{cast.name}}
              </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from './star'
export default {
  name: 'MovieList',
  data () {
    return {
     MovieList:[

     ]
    }
  },
  components:{
    star:star
  },
  mounted(){
    this.$http.get("http://localhost:8080/static/data.json").then(function(response) {
    //this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters").then(function(response) {
      this.MovieList = response.body.subjects;
      
    })
  },
  filters: {
    capitalize: function (value) {
     
    }
  },
  methods:{
    gotoDeail:function(id){
      this.$router.push({ name:'MovieDetail', params: { id:id }})
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hade{
  padding: 10px 20px;
  background-color: #e5e9f2;
  overflow: hidden;
}
.logo img{
  width: 43px
}
.logo{
  float: left;
  margin-right: 5px;
}
.slongen{
  height: 40px;
  display: table-cell;
  vertical-align: bottom;
}
.slongen h5{
  font-size: 17px;
  font-weight: 700;
  color: #333;
}
.slongen p{
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.partition{
  overflow: hidden;
  background-color: #df2d2d;
  height: 35px
}
.partition h3,h4{
  width: 50%;
  text-align: center;
  line-height: 35px;
  font-size: 20px; 
}
.partition h3 a,h4 a{
  color:#f9fafc;
  text-decoration: none;
}
.partition h3{
  float: left;
}
.partition h4{
  float: right;
}
.item{
  overflow: hidden;
}
.cover{
  float: left;
  padding: 10px
}
.item{
  border-bottom: 1px solid #ddd;
  padding: 10px 0px;
}
/*.cover{
  overflow: hidden;
}*/
.item p{
  color: #666;
  font-size: 14px;
  line-height: 22px;
}
.item .title{
  color: #666;
  font-weight: 500px;
  margin-bottom: 10px;
}


</style>
