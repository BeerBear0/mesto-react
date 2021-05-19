import React from "react";
import editIcon from "../images/EditButton.svg";
import addIcon from "../images/addBtn.svg";

import PopupWithForm from "./PopupWithForm";
import {api} from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContexts";

function Main(props) {
const { cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete} = props;
const currentUser = React.useContext(CurrentUserContext);

    // function handleCardLike(card) {
    //     // Снова проверяем, есть ли уже лайк на этой карточке
    //     const isLiked = card.likes.some(i => i._id === currentUser._id);
    //
    //     // Отправляем запрос в API и получаем обновлённые данные карточки
    //     api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
    //         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //     });
    // }
// const [userName, setUserName] = React.useState('');
// const [userDescription, setUserDescription] = React.useState('');
// const [avatar, setAvatar] = React.useState('');
// const [cards, setCards] = React.useState([]);

    // React.useEffect(() => {
    //     api.getUserInfo()
    //         .then( (fetchResult) => {
    //             setUserName(fetchResult.name);
    //             setUserDescription(fetchResult.about);
    //             setAvatar(fetchResult.avatar);
    //         })
    //         .catch(error => console.log(error));
    //     api.getInitialCards()
    //         .then( (fetchResult) => {
    //             setInitialCards(fetchResult);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__image">
                    <div style={{backgroundImage: `url(${currentUser.avatar}) `}} alt={currentUser.name} className="profile__avatar" />
                    <button type='button' className="profile__avatar-btn" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__name-btn">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" className="profile__edit-btn" onClick={onEditProfile}>
                            <img src={editIcon} alt="КнопкаРедактирования" className="profile__edit-btn-image" />
                        </button>
                    </div>
                    <p className="profile__infoname">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__add" onClick={onAddPlace}>
                    <img className="profile__add-btn" src={addIcon} alt="Кнопка добавления" />
                </button>
            </section>
            <PopupWithForm />
            <section className="elements">
                {cards.map((item, index) => {
                    <Card
                        key={index}
                        card={item}
                        onCardClick={onCardClick}
                        onCardDelete={onCardDelete}
                        onCardLike={onCardLike}
                    />
                })}
            </section>

        </main>
    )
}

export default Main