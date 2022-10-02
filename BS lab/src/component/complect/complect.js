import React from "react"

import "./complect.css"
import Header from "../heder/Header";
import Main from "../main/Main"
import About from "../about/about";
import Maked from "../maked/maked"
// import Cards from "../cards/cards";
import Product from "../cardsTest/cardsTest";
import Footer from "../footer/footer";


function Complect() {
return(
<div className="complectWrapper">
<Header/>
<Main/>
<About/>
<Maked/>
<Product/>
<Footer/>
</div>
)
}

export default Complect;
