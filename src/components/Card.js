import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContexts";

function Card({onCardDelete, onCardLike, onCardClick, card}) {
const currentUser = React.useContext(CurrentUserContext)
    function handleImageClick() {
        onCardClick(card);
    }
    function  handleLikeClick() {
        onCardLike(card)
    }
    function handleDeleteClick() {
        onCardDelete(card)
    }

    const isOwn = card.owner._id === currentUser._id

    const cardDeleteButtonClassName  = (`element__delete-btn ${isOwn ? 'element__delete-btn_active' : '' }`);
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName  = `element__like-btn ${isLiked ? 'element__like_active' : ''}`;

    return (
        <div className="card-template">
            <article className="element">
                <div className="element__btn-image">
                    <button type="button" className={cardDeleteButtonClassName } onClick={handleDeleteClick} />
                    <button type="button" className="element__open-image">
                        <img className="element__image" onClick={() => {handleImageClick()}} src={card.link} alt={card.name} />
                    </button>
                </div>
                <div className="element__info">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-counter">
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
                        <span className="element__handle-like">{card.likes.length > 0 ? `${card.likes.length}` : 0}</span>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Card