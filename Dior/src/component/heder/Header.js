import React from "react"
import "./Header.css"
import logo from "./hamburger.JPG"
import line from "./logo.JPG"
import minus from "./headerLine.JPG"



function Header() {
return(
<>
<div className="headerWrapper">
    
    
    <div className="leftSide">
    
    <div className="headerMenu">

    <a href="/"><img className="hamburger"  src={logo} alt=""/></a>

   


</div>

<div className="heraderLogo"> 

<a className="wrapperLogo" href="/"><img className="logo" src={line} alt=""/></a>


</div>

</div>



<div className="rightSide">

<div className="mail"><a href="mailto:hi@labs.ru"><p>hi@labs.ru</p></a></div>
<div className="minus"><img src={minus} alt=""></img></div>
<div className="tel"><a href="tel:+79196406400">+7  919  640  6400</a></div>

</div>


</div>
</>
)
}

export default Header;