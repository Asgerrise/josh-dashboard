import React from "react";

const Course = ({
  modifier,
  img,
  title,
  author,
  completion,
  time,
  popularity,
  btn,
  hidden,
}) => {
  return (
    <article className={`course ${modifier}`}>
      <img src={img} alt="Course" className="course__img" />
      <div className="course__text">
        <h2 className="course__title">{title}</h2>
        <p className="course__author">by {author}</p>
      </div>
      <div className="course__info">
        <div
          className={`course__info-item course__info-item_completion ${hidden}`}
        >
          {completion}
        </div>
        <div className="course__info-item course__info-item_time">{time}</div>
        <div className="course__info-item course__info-item_popularity">
          {popularity}
        </div>
      </div>
      <button className="btn">{btn}</button>
    </article>
  );
};

export default Course;
