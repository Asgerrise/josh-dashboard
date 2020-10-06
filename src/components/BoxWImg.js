import React from "react";

const BoxWImg = ({ img, title, text }) => {
  return (
    <article className="boxWImg">
      <div className="boxWImg__text">
        <h2 className="boxWImg__title">{title}</h2>
        <p className="boxWImg__undertitle">{text}</p>
      </div>
      <img className="boxWImg__img" src={img} alt="Avatar" />
    </article>
  );
};

export default BoxWImg;
