import React from "react";

import Course from "./Course";

import figma from "../img/figma.svg";
import photography from "../img/photography.svg";
import instagram from "../img/instagram.svg";
import pencil from "../img/pencil.svg";
import photoshop from "../img/photoshop.svg";

const AllCourses = () => {
  return (
    <section className="courses">
      <h2 className="courses__title">Courses</h2>
      <ul className="courses__menu">
        <li className="courses__menu-item courses__menu-item_active">
          All Courses
        </li>
        <li className="courses__menu-item">The Newest</li>
        <li className="courses__menu-item">Top Rated</li>
        <li className="courses__menu-item">Most Popular</li>
      </ul>
      <div className="container">
        <Course
          img={figma}
          title="Learn Figma"
          author="Christopher Morgan"
          time="🕓 6h 30min"
          popularity="🔥 4,9"
          btn="View course"
          hidden="hidden"
        />
        <Course
          img={photography}
          title="Analog photography"
          author="Gordon Norman"
          time="🕓 3h 15min"
          popularity="🔥 4,7"
          btn="View course"
          hidden="hidden"
        />
        <Course
          img={instagram}
          title="Master Instagram"
          author="Sophie Gill"
          time="🕓 7h 40min"
          popularity="🔥 4,6"
          btn="View course"
          hidden="hidden"
        />
        <Course
          img={pencil}
          title="Basics of drawing"
          author="Jean Tate"
          time="🕓 11h 30min"
          popularity="🔥 4,8"
          btn="View course"
          hidden="hidden"
        />
        <Course
          img={photoshop}
          title="Photoshop - Essence"
          author="David Green"
          time="🕓 5h 35min"
          popularity="🔥 4,7"
          btn="View course"
          hidden="hidden"
        />
      </div>
    </section>
  );
};

export default AllCourses;
