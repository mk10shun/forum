import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
import Login from '../components/login/Login'
import Signup from '../components/login/Signup'
import Forum from '../components/forum/Forum'
import Logout from '../components/login/Logout'

const routes = [
  { path: '/login', component: Login },
  { path: '/logout', component: Logout},
  { path: '/signup', component: Signup },
  { path: '/forum', component: Forum, name: 'forum'}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`,
  hashbang: false,
  mode: 'history'
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
// const app = new Vue({
//   router
// }).$mount('#app')

// Now the app has started!
export default router
