import React, { useState } from "react";
import items from "./cardsTestDB";
import "./cardsTest.css"

 const Product = () => {

    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState (false)
    const changeContent = (el) => {
        setpopupcontent([el]);
        setpopuptogle(!popuptogle);}

    return(
        <div className="allWraper">
        <div className="wrapperCard">

            {items.map(el => (
                
                <div onClick={()=> changeContent(el)} className="cardFirst">

                    <div className="cardTitle">{el.tittle}</div>
                    <div className="detailed">{el.info}</div>
                    <text>{el.text}</text>

                  </div>
                  
            ))}
            
        </div>

        {popuptogle&&<div className="pop_up_container"onClick = {changeContent}> 
            <div className="pop_up_body">
                <div className="pop_up_header">
                        <div onClick={changeContent}>x</div>
                    </div>
                    <div className="pop_up_content">
                    {popupcontent.map((pop)=>{
                        return(


                            <div className="pop_up_card">

                                    <p className="name_custom">Название услуги: {pop.tittle}</p>
                                    
                                    <p className="description_custom">Описание: {pop.text}</p>

                                    <p className="btn_custom">Клик: {pop.info}</p>
                
                            </div>
                        )
                    })}
                    </div></div>
                    
                </div>} 
      


        </div>
        )}



export default Product;