// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.component('myBox', {
	template: ' <h1>mybox</h1> '
})
Vue.component('run', {
	template: '<div><img src="./static/images/flowers/25.png" height="300px" width="500px" alt=""/></div>'
})
Vue.component('apic', {
	template: '<div><img src="./static/images/flowers/8.png" height="300px" width="300px" alt=""/></div>'
})
Vue.component('yHeader', {
	template: '<div><h1>头部</h1></div>'
})
var gogo = {
	template: '<b>gogogo {{fruit}}</b>'
}
var lala = {
	template: ' <p>lalala <lala-child></lala-child></p> ',
	components: {
		'lala-child': gogo
	}
}
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
