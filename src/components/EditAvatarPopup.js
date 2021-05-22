import React from 'react'
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault()
        onUpdateAvatar({
            avatar: avatarRef.current.value
        })
    }
    return (
        <PopupWithForm
            title="Обновить Аватар"
            name="edit-avatar"
            isOpen={isOpen}
            onClose={onClose}
            onSabmit={handleSubmit}

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
    )
}

export default EditAvatarPopup