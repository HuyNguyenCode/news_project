import Home from '../pages/Homepage';
// import Login from '../containers/Auth/Login';
// import System from '../pages/System';
import Homepage from '../pages/Homepage';

const publicRoutes = [
    { path: '/', component: Homepage },
    // { path: '/login', component: Login },
    // { path: '/system'},
    // { path: '/homepage', component: Homepage },
];

const privateRputes = [];

export { publicRoutes, privateRputes };
