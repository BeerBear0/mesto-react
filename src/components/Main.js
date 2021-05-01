import React from "react";
import editBtn from "../images/EditButton.svg";
import addBtn from "../images/addBtn.svg";

import PopupWithForm from "./PopupWithForm";
import {api} from "../utils/Api";
import Card from "./Card";

function Main(props) {
const { onEditAvatar, onEditProfile, onAddPlace, onCardClick} = props;

const [userName, setUserName] = React.useState('Жак-Ив Кусто');
const [userDescription, setUserDescription] = React.useState('Иследователь океана');
const [avatar, setAvatar] = React.useState('defaultAvatarPatch');
const [initialCards, setInitialCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then( (fetchResult) => {
                setUserName(fetchResult.name);
                setUserDescription(fetchResult.about);
                setAvatar(fetchResult.avatar);
            })
            .catch(error => console.log(error));
    }, []);


    React.useEffect(() => {
        api.getInitialCards()
            .then( (fetchResult) => {
                setInitialCards(fetchResult);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__image">
                    <img src={avatar} alt="Фото" className="profile__avatar" />
                    <button type='button' className="profile__avatar-btn" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__name-btn">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-btn" onClick={onEditProfile}>
                            <img src={editBtn} alt="КнопкаРедактирования" className="profile__edit-btn-image" />
                        </button>
                    </div>
                    <p className="profile__infoname">{userDescription}</p>
                </div>
                <button type="button" className="profile__add" onClick={onAddPlace}>
                    <img className="profile__add-btn" src={addBtn} alt="Кнопка добавления" />
                </button>
            </section>
            <PopupWithForm />
            <section className="elements">
                {initialCards.map((cardObj) => {
                    return (
                        <Card key={cardObj._id} card={cardObj} onCardClick={onCardClick} />
                    )
                })}
            </section>

        </main>
    )
}

export default Main