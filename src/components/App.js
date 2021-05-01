import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import ImagePopup from "./ImagePopup";


import '../index.css';
import PopupWithForm from "./PopupWithForm";



function App() {

    // стейты попапов
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)

    const [selectedCard, setSelectedCard] = React.useState(null);

    function  handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }
    function  handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    function  handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleCardClick (card)  {
        setIsImagePopupOpen(true)
        setSelectedCard(card)
    }

    function closeAllPopup() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }

  return (
      <body className="root">
      <Header />
      <Main
          onEditAvatar={() => {handleEditAvatarClick()}}
          onEditProfile={() => {handleEditProfileClick()}}
          onAddPlace={() => {handleAddPlaceClick()}}
          onCardClick={(card) => {handleCardClick(card)}}
      />
      <Footer />


      <PopupWithForm
          title="Редактировать Профиль"
          name="Edit-profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
      >
          <input
              className="popup__input popup__input_type_name"
              type="text"
              name="name"
              id="name-input"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
          />
          <span className="popup__input-error" id="name-input-error" />
          <input
              className="popup__input popup__input_type_about"
              type="text"
              name="about"
              id="about-input"
              placeholder="Работа"
              minLength="2"
              maxLength="200"
              required
          />
          <span className="popup__input-error popup__input-error_two" id="job-input-error" />
          <button className="popup__submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
          title="Новое место"
          name="New-place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}
      >
          <input
              className="popup__input popup__input_type_title"
              type="text"
              name="title"
              id="title-input"
              placeholder="Название"
              minLength="1"
              maxLength="30"
              required
          />
          <span className="popup__input-error" id="title-input-error"/>
          <input
              className="popup__input popup__input_type_url"
              type="url"
              name="url"
              id="url-input"
              placeholder="Ссылка"
              required
          />
          <span className="popup__input-error popup__input-error_two" id="url-input-error" />
          <button className="popup__submit" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm
          title="Обновить Аватар"
          name="edit-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
      >
          <input
              className="popup__input popup__input_type_avatar"
              type="url"
              name="avatar"
              id="url-avatar"
              placeholder="Ссылка"
              required
          />
          <span className="popup__input-error" id="url-avatar-error" />
          <button className="popup__submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
          title="ВЫ уверены?"
          name="delete-card">
          <button className="popup__submit" type="submit">Да</button>
      </PopupWithForm>

      {selectedCard && <ImagePopup
          name={`open-imagePopup`}
          card={selectedCard}
          isOpen={isImagePopupOpen}
          isClose={closeAllPopup}
      />}

      </body>

  );
}

export default App;
