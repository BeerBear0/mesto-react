import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import '../index.css'





function App() {
  return (
      <body className="root">
      <Header />
      <Main />
      <Footer />

      <template className="card-template">
        <article className="element">
          <div className="element__btn-image">
            <button type="button" className="element__delete-btn" />
            <button type="button" className="element__open-image">
              <img className="element__image" src="#" alt="Фото" />
            </button>
          </div>
          <div className="element__info">
            <h2 className="element__title" />
            <div className="element__like-counter">
              <button type="button" className="element__like-btn" />
              <span className="element__handle-like">0</span>
            </div>
          </div>
        </article>
      </template>

      </body>
  );
}

export default App;
