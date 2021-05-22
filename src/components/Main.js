import React from "react";
import editIcon from "../images/EditButton.svg";
import addIcon from "../images/addBtn.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContexts";
function Main( props ) {
    const { cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete} = props;

    const currentUser = React.useContext(CurrentUserContext);

    // const [cards, setCards] = React.useState([]);
    // const [currentUser, setCurrentUser] = React.useState({});

    // React.useEffect(() => {
    //     // api.getUserInfo()
    //     //     .then(userData => {
    //     //         setCurrentUser(userData)
    //     //     })
    //     //     .catch(err => console.error(err))
    //
    //     api.getInitialCards()
    //         .then(fetchResult => {
    //             setCards(fetchResult)
    //         })
    //         .catch(err => console.error(err))
    // }, [])


    return (
        <main className="content">

            <section className="profile">
                <div className="profile__image">
                    <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar" />
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

            <section className="elements">
                {
                    cards.map((card, idx) => {
                        return (
                            <Card
                              card={card}
                              key={idx}
                              onCardClick={onCardClick}
                              onCardLike={onCardLike}
                              onCardDelete={onCardDelete}
                            />
                        )
                    })
                }

                }

            </section>

        </main>
    )
}

export default Main