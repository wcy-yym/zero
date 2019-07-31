import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myGame from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		name: 'myGame',
		components: {
			main: myGame
		}
	}
  ]
})
