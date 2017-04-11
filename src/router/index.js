import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/MovieList'
import MovieDetail from '@/components/MovieDetail'
import ActingStaff from '@/components/ActingStaff'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieList',
      component: MovieList
    },
    {
    	path:"/movie/:id",
    	name:'MovieDetail',
    	component:MovieDetail
    },{
    	path:"/movie/celebrity/:id",
    	name:"ActingStaff",
    	component:ActingStaff
    }
  ]
})
