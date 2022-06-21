import React from "react";
//CSS
import * as divinfoStyle from "./divinfo.module.css";

function DivInfo({ person }) {
  return (
    <div className={divinfoStyle.container}>
      <h1 className={divinfoStyle.title}>
        {person.name} {person.lastname}
      </h1>
      <h2 className={divinfoStyle.job}>Frontend Developer</h2>
      <h3 className={divinfoStyle.country}>based in {person.country}</h3>
      <p className={divinfoStyle.info}>{person.info}</p>
    </div>
  );
}

export default DivInfo;
