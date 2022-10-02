import React from "react";
import shef from "./shef.JPG"
import "./about.css"


export default function About(){
    return(
    <div className="wrapperAbout">
    
    <div className="wrapperAboutLeft">
        
        <div className="d-flex-left"> <img src={shef} alt=""></img></div>
        <div className="aboutP"><p>Директор</p></div>
        <div className="d-felx-shef"><span>Сергей Бодров</span> <div className="aboutRequest"> <h6> Наша команда ⸻ </h6> </div></div>


    </div>


        <div className="wrapperAboutRight">
            <h5 className="bsLab">Бс Лаб</h5>
        <p>Наша специализация — комплексные диджитал стратегии
в интернете.</p>
        <p>Как это работает — вы заняты рабочими вопросами, мы
привлекаем новых клиентов.</p>
        <p>Мы придумываем крутые и долгоиграющие идеи для проектов,
которые эффективно продвигаем на каналах в интернете.</p>
        <p>Ежедневно генерим кучу идей и текстов, рисуем,
разрабатываем, продвигаем, анализируем действия и главное
— делаем выводы.</p>
        </div>


    </div>
    
    )
}