import React from "react";
import line from "./logo_footer.JPG"
import "./footer.css"


 function Footer(){
    return(
    <div className="footer_wrapper">


        <div className="footer_left">
        <a className="footer_logo" href="/"><img className="logor" src={line} alt=""/></a>
        <span className="footer_description">© Aslab Лаборатория интернет продвижения</span>
        </div>



        <div className="footer_middle">
        <div className="flex">
            <a className="index" href="/">Главная</a>
            <a className="index" href="/">Мы</a>
            <a className="index" href="/">Делаем</a></div>
        
        </div>

        

     <div className="footer_contacts">
     <div className="location">Бишкек, ул. Профсоюзная, д 23Б</div>
     <a href="mailto:ad@LABBS.RU">Почта: AS@LABBS.RU</a>
     <a href="tel:+7777777777">Телефон: +7 777 777 777</a>
     </div>

    </div>
    )
}

export default Footer;