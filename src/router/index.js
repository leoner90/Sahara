import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/:catchAll(.*)",
    component: Home,
  },
 

]

const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior: function (to) {
    let mystring = to.path.replace('/','');
    if(mystring == '') {mystring = "Home"}
    console.log(mystring)
    var elmnt = document.getElementById(mystring);
    elmnt.scrollIntoView();
  },
})

 

export default router
