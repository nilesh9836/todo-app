import { createRouter, createWebHistory} from 'vue-router';
import Home from "../views/Home";
import CompletedTask from "../views/CompletedTask";

//Vue.use(VueRouter);

const routes =[{
	path: '/', component: Home
},{
	path: '/completed', component: CompletedTask
}]

const router=new createRouter({
	routes,
	history: createWebHistory()
})


export default router;