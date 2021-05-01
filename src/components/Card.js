import React from "react";

function Card({onCardClick, card}) {
    function handleImageClick() {
        onCardClick(card);
    }

    return (
        <template className="card-template">
            <article className="element">
                <div className="element__btn-image">
                    <button type="button" className="element__delete-btn" />
                    <button type="button" className="element__open-image">
                        <img className="element__image" onClick={() => {handleImageClick()}} src={card.link} alt="Фото" />
                    </button>
                </div>
                <div className="element__info">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-counter">
                        <button type="button" className="element__like-btn" />
                        <span className="element__handle-like">0</span>
                    </div>
                </div>
            </article>
        </template>
    )
}

export default Card