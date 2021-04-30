import React from "react";
import avatar from "../images/Avatar.jpg";
import editBtn from "../images/EditButton.svg";
import addBtn from "../images/addBtn.svg";


function Main() {
    return (
        <main className="content">

            <section className="profile">
                <div className="profile__image">
                    <img src={avatar} alt="Фото" className="profile__avatar" />
                    <button type='button' className="profile__avatar-btn" />
                </div>
                <div className="profile__info">
                    <div className="profile__name-btn">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-btn">
                            <img src={editBtn} alt="КнопкаРедактирования" className="profile__edit-btn-image" />
                        </button>
                    </div>
                    <p className="profile__infoname">Исследователь океана</p>
                </div>
                <button type="button" className="profile__add">
                    <img className="profile__add-btn" src={addBtn} alt="Кнопка добавления" />
                </button>
            </section>

            <section className="elements">
            </section>


            <section className="popups">

                <div className="popup popup_edit-profile">
                    <form className="popup__container popup__container_edit-profile" action="#" method="post" noValidate>
                        <button type="reset" className="popup__close-btn" aria-label="закрыть" />
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <div className="popup__form">
                            <input
                                placeholder="Имя"
                                id="inputName"
                                type="text"
                                name="inputName"
                                className="popup__input  popup__input_name-value"
                                minLength="2"
                                maxLength="40"
                                required />
                            <span className="popup__input-error" id="inputName-error" />
                            <input
                                placeholder="Работа"
                                id="inputAbout"
                                type="text"
                                name="inputAbout"
                                className="popup__input popup__input_infoname-value"
                                minLength="2"
                                maxLength="200"
                                required />
                            <span className="popup__input-error popup__input-error_two" id="inputAbout-error" />
                            <button type="submit" className="popup__submit">Сохранить</button>
                        </div>
                    </form>
                </div>

                <div className="popup popup_add-card">
                    <form className="popup__container popup__container_add-card form" action="#" method="post" noValidate>
                        <button type="reset" className="popup__close-btn" aria-label="закрыть" />
                        <h2 className="popup__title">Новое место</h2>

                        <div className="popup__form popup__form_add">
                            <input
                                placeholder="Название"
                                id="inputMesto"
                                type="text" name="inputMesto"
                                className="popup__input popup__input_mesto-value"
                                minLength="2"
                                maxLength="30"
                                required />
                            <span className="popup__input-error" id="inputMesto-error" />
                            <input placeholder="Ссылка на картинку"
                                   id="inputUrl"
                                   type="url"
                                   name="inputUrl"
                                   className="popup__input popup__input_image-value"
                                   required />
                            <span className="popup__input-error popup__input-error_two" id="inputUrl-error" />
                            <button type="submit" className="popup__submit popup__submit_add-card">Создать</button>
                        </div>
                    </form>
                </div>

                <div className="popup popup_type-image">
                    <div className=" popup__image-container">
                        <button type="reset" className="popup__close-btn" aria-label="закрыть" />
                        <img src="#" className="popup__image" alt="фото" />
                        <p className="popup__image-name" />
                    </div>
                </div>

                <div className="popup popup_delete-card">
                    <button type="reset" className="popup__close-btn" aria-label="закрыть" />
                    <div className="popup__container popup__container_delete-card">
                        <h2 className="popup__title">Вы уверены?</h2>
                        <button className="popup__submit popup__submit_delete-card">Да</button>
                    </div>
                </div>

                <div className="popup popup_avatar">
                    <form className="popup__container popup__container_avatar" action="#" method="post" noValidate>
                        <button type="reset" className="popup__close-btn" aria-label="закрыть" />
                        <h2 className="popup__title">Обновить аватар</h2>
                        <div className="popup__form popup__form_add">
                            <input
                                className="popup__input popup__input_avatar"
                                placeholder="Ссылка на аватар"
                                id="avatarInput"
                                type="url"
                                name="avatarInput"
                                required />
                            <span className="popup__input-error" id="avatarInput-error" />
                            <button type="submit" className="popup__submit popup__submit_add-card">Сохранить</button>
                        </div>
                    </form>
                </div>
            </section>

        </main>
    )
}

export default Main