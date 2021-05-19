import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from '../contexts/CurrentUserContexts'
import { api } from '../utils/Api'
import EditProfilePopup from './EditProfilePopup'

function App() {

    // стейты
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
    const [isDeletePopupOpen, setIsDeletePopupOpen] =React.useState(false);

    const [currentUser, setCurrentUser] = React.useState({})
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [cards, setCards] = React.useState([]);
    const [cardDelete, setCardDelete] =React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false)

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
    function handleDeleteCardClick() {
        setIsDeletePopupOpen(true)
    }
    function handleUpdateUser(data) {
        setIsLoading(true)
        api.patchUserProfile(data)
            .then((res) => {
                    setCurrentUser(res)
                    setIsLoading(false)
                    closeAllPopup()
                }
            )
            .catch(err => console.log(err));
    }

    function closeAllPopup() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }
    function handleCardLike(card){
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        if (!isLiked) {
            api.putLike(card._id)
                .then((newCard) => {
                    const newCards = cards.map((c) => c._id === card._id ? newCard : c)
                    setCards(newCards)
                })
                .catch(err => console.log(err));

        } else {
            api.deleteLike(card._id)
                .then((newCard) => {
                    const newCards = cards.map((c) => c._id === card._id ? newCard : c)
                    setCards(newCards)
                })
                .catch(err => console.log(err));
        }
    }

    function handleCardDelete(card) {
        const isOwn = cardDelete.owner._id === currentUser._id;
        setIsLoading(true)

        api.deleteCard(cardDelete._id, !isOwn)
            .then((newCard) => {
                // Обновляем стейт
                setCards(cards.filter((c) => c._id === cardDelete._id ? !newCard : c));
                setIsLoading(false)
                closeAllPopup()
            })
            .catch(err => console.log(err));
    }
    function handleCardDelete(card) {
        setCardDelete(card);
        handleDeleteCardClick();
    }

    function handleAddPlaceSubmit(item){
        api.postUserCard(item)
            .then((res) => {
                    setCards([...cards, res]);
                closeAllPopup()
                }
            )
            .catch(err => console.log(err));
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading} />
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
      </PopupWithForm>

      <PopupWithForm
          title="ВЫ уверены?"
          name="delete-card"
          btnText="Да" />


      {selectedCard && <ImagePopup
          name={`open-imagePopup`}
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopup}
      />}

      </CurrentUserContext.Provider>

  );
}

export default App;