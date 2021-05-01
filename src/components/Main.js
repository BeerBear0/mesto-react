import React from "react";
import avatar from "../images/Avatar.jpg";
import editBtn from "../images/EditButton.svg";
import addBtn from "../images/addBtn.svg";

import PopupWithForm from "./PopupWithForm";

function Main(props) {
const { onEditAvatar, onEditProfile, onAddPlace} = props;

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__image">
                    <img src={avatar} alt="Фото" className="profile__avatar" />
                    <button type='button' className="profile__avatar-btn" onClick={onEditAvatar}/>
                </div>
                <div className="profile__info">
                    <div className="profile__name-btn">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-btn" onClick={onEditProfile}>
                            <img src={editBtn} alt="КнопкаРедактирования" className="profile__edit-btn-image" />
                        </button>
                    </div>
                    <p className="profile__infoname">Исследователь океана</p>
                </div>
                <button type="button" className="profile__add" onClick={onAddPlace}>
                    <img className="profile__add-btn" src={addBtn} alt="Кнопка добавления" />
                </button>
            </section>
            <PopupWithForm />
            <section className="elements">
            </section>

        </main>
    )
}

export default Main