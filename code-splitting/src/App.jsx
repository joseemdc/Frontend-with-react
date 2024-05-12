import React,{lazy, Suspense} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
// import About from "./components/About";
 //import Home from "./components/home";

const About = lazy(() => import('./components/About' /* webpackChunkName:"about" */));
const Home = lazy(() => import('./components/home'  /* webpackChunkName:"home" */));

export default () =>(
<BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>

    <Routes>
        <Route path="/" exact={true} element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
    </Routes>
    </Suspense>
</BrowserRouter>
);