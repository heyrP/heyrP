import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
