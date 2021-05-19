import React from 'react'
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContexts";

function EditProfilePopup(isOpen, onClose, onUpdateUser, isLoading) {

    const currentUser = React.useContext(CurrentUserContext)

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleNameUpdate(e) {
        setName(e.target.value);
    }

    function handleDescriptionUpdate(e) {
        setDescription(e.target.value)
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);
    function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
        name: name,
        about: description
    })

    }

    return (
        <PopupWithForm
            title="Редактировать Профиль"
            name="Edit-profile"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}
        >
            <input
                onChange={handleNameUpdate}
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
                onChange={handleDescriptionUpdate}
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
        </PopupWithForm>
    )
}

export default EditProfilePopup