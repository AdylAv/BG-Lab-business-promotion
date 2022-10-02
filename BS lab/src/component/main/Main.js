import React, { useState } from "react";
import "./Main.css"
import background from "./background.JPG"


function Main(){
    const [open, setOpen] = useState(false);
    const [thanks, setThanks] = useState(false);




    return(<>
    
    <div className="wrapperMain">

        <div className="mainLeftSide">
            <ul>
                <li><span>6</span> <br/>лет успешной работы</li>
                <li><span>151</span> <br/> стратегий</li>
                <li><span>5</span>  <br/>спасенных репутации компании</li>
                <li><span>18</span>  <br/>человек в штате</li>
            </ul>
        </div>

        <div className="mainRightSide">
        <img className="mainBackground" src={background} alt=""></img>
        </div>


        
    </div>

<div className="request"> <h6 onClick={()=> setOpen (true)}> Оставить заявку ⸻⸻ </h6> <div className="request_child"></div></div>

{
    open && (<div className="overlay">


    <div className="modal">


        <div onClick={()=> setOpen (false)} className="closeModal">
        ×
        </div>

        <span>Начнем ваше продвежение ?</span>
        
        
        <div className="d-flex">

        <div><input placeholder="Ваше имя"></input>
        <input placeholder="Номер телефона"></input></div>
        
        <div><input placeholder="Описание"></input></div>

        </div>


        <button onClick={()=> setThanks (true)}>Оставить заявку</button>
    
    </div>





</div>)
}

{
    thanks && (
    
    
    <div className="overlay">
        
        <div className="modal_thx">
        <span className="modal_span">Спасибо ваша заявка принята! <br/>Ожидайте мы скоро свяжемся с вами!</span>
        <button onClick={()=> setThanks (false)} className="modal_btn">Назад</button>
    </div>
    
    <div/></div>)
}



</>
    )
}

export default Main;