import React from "react";
import "./cards.css"



function Cards(){




    return(

    <div className="warpperCards">

        <div className="firstColum">

            <div className="cardFirst">
                <div className="cardTitle">Реклама в Google и Yandex</div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Поисковая, баннерная, текстово-графическая, динамическая</text>

            </div>

            <div className="cardFirst">
                <div className="cardTitle">ORM</div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Управление репутацией в интернете</text>

            </div>


            <div className="cardFirst">
                <div className="cardTitle">Аудиореклама</div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Реклама при прослушивании музыки в социальных сетях</text>

            </div>


        </div>

<div className="secondColum">

            <div className="cardFirst">
                <div className="cardTitle">Реклама в социальных сетях</div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Таргетинговая реклама</text>
            </div>



            <div className="cardFirst">
                <div className="cardTitle">Smm</div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Комплекс работ с брендом в социальных сетях</text>
            </div>



            <div className="cardFirst">
                <div className="cardTitle">Внедрение CRM и оптимизация</div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Ведение полного цикла работы отдела продаж</text>
            </div>



        </div>

<div className="thirdColum">

            <div className="cardFirst">
                <div className="cardTitle"> SEO<br></br></div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Оптимизация сайта для поисковых систем Яндекс, Google</text>
            </div>

            <div className="cardFirst">
                <div className="cardTitle">Лидогенерация<br></br></div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Сбор заявок и номеров телефонов для базы клиента</text>
            </div>

            <div className="cardFirst">
                <div className="cardTitle">Создание сайтов<br></br></div>
                <div className="detailed">Узнать подробнее ⸻</div>
                <text>Находим смыслы и прорабатываем крутые сайты</text>
            </div>

        </div>


        <div className="new">

            <div>
                
            </div>

        </div>


    </div>
    
    
    )
}


export default Cards;