import "./modal.css"



function Modal(){
    return(
    <div className="overlay">


        <div className="modal">


            <div className="closeModal">
                X
            </div>

            <span>Начнем ваше продвежение ?</span>
            
            
            <div className="d-flex">

            <div><input placeholder="Ваше имя"></input>
            <input placeholder="Номер телефона"></input></div>
            
            <div><input placeholder="Описание"></input></div>

            </div>


            <button>Оставить заявку</button>
        
        </div>
    </div>
    )
}


export default Modal;