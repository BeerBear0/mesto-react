import React from "react";

function ImagePopup ({card, isOpen, isClose}) {
    return (
        <div className={"popup popup_type-image"`${isOpen ? 'popup__opened' : ''}`}>
            <div className=" popup__image-container">
                <button type="reset" className="popup__close-btn" aria-label="закрыть" onClick={isClose}/>
                <img src={`${card.link}`} className="popup__image" alt={card.name} />
                <p className="popup__image-name">{card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup