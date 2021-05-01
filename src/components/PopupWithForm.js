import React from "react";

function PopupWithForm({name, title, isOpen, onClose, isLoading, children}) {
    return(
        <div className={`popup popup_type_${name} ${isOpen && 'popup__opened'}`} >
            <form
                className="popup__container"
                method="GET"
                name={`${name}`}
                action="#"
                noValidate
            >
                <button
                    className="popup__close-btn"
                    type="reset"
                    aria-label="закрыть"
                    onClick={onClose}
                />
                <h3 className="popup__title">{title}</h3>
                {children}
                {/*<button className="popup__submit" type="submit" />*/}
            </form>
        </div>

    )
}
export default PopupWithForm