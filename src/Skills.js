import React from "react";
import data from "./data";
export default function Contacts() {
  return (
    <div className="skills-main">
      <h1>My Skills are ....</h1>
      <div className="skill-column">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="skills">
                <h2 className="title">{item.title}</h2>
                <h4>{item.level}</h4>
              </div>
              {/*<img src = {item.coverImg} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
