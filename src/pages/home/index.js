import React from "react";
import Header from "../header";
import BestRecipers from "../bestRecipers";
import BestServices from '../bestServices';
import Blog from '../blog';
import Join from '../join';
import Footer from '../footer';

function Home (){
    return(
        <>
       <Header/> 
       <BestRecipers/>
       <BestServices/>
       <Blog/>
       <Join/>
       <Footer/>
       </>
    )
}

export default Home