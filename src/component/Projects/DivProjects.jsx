import React from "react";
//CSS
import * as divprojectsStyle from "./divprojects.module.css";

function Div({ item }) {
  return (
    <div className={divprojectsStyle.container}>
      <h1 className={divprojectsStyle.title}>{item.title}</h1>
      <p className={divprojectsStyle.info}>{item.project_info}</p>
      <a className={divprojectsStyle.link} href={item.link}>
        {item.link}
      </a>
    </div>
  );
}

export default Div;
