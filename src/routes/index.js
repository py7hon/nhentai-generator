import Home     from "./Home/Home";
import About    from "./About/About";
import Faq      from "./Faq/Faq";
import Surprise from "./Surprise/Surprise";

const Routes = [
  {
    path     : '/',
    exact    : true,
    component: Home
  },
  {
    path     : '/home',
    exact    : true,
    component: Home
  },
  {
    path     : '/about',
    exact    : true,
    component: About
  },
  {
    path     : '/faq',
    exact    : true,
    component: Faq
  }
  ,
  {
    path     : '/surprise',
    exact    : true,
    component: Surprise
  }
];

export default Routes;