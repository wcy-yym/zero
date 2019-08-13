import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myHome from '@/components/Home'
import myGame from '@/components/Game'
import myAnimation from '@/components/Animation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
	{
		path: '/',
		name: 'root',
		components: {
			main: myHome
		}
	},
	{
		path: '/game',
		name: 'myGame',
		components: {
			main: myGame
		}
	},
	{
		path: '/animation',
		name: 'myAnimation',
		components: {
			main: myAnimation
		}
	}
  ]
})
