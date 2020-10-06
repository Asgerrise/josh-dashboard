import React from "react";
import { render } from "react-dom";

import Course from "./components/Course";
import BoxWImg from "./components/BoxWImg";
import Header from "./components/Header";

import avatar from "./img/avatar.svg";
import spain from "./img/spanish.svg";

import "./scss/style.scss";
import Arrows from "./components/Arrows";
import AllCourses from "./components/AllCourses";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="section">
          <BoxWImg
            img={avatar}
            title="Hello Josh!"
            text="It's good to see you again."
          />
          <div className="courseWArrows">
            <Course
              modifier="course_4-items"
              img={spain}
              title="Spanish B2"
              author="Alejandro Velazquez"
              completion="83%"
              btn="Continue"
            />
            <Arrows />
          </div>
          <AllCourses />
        </section>
        <section className="section"></section>
      </main>
    </>
  );
};

render(<App />, document.querySelector("#root"));
