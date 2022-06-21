import React from "react";
//CSS
import * as divfooterStyle from "./divfooter.module.css";

function DivFooter({ person }) {
  return (
    <div className={divfooterStyle.container}>
      <a className={divfooterStyle.link} href={person.github}>
        Github
      </a>

      <a className={divfooterStyle.link} href={person.linkedin}>
        Linkedin
      </a>
    </div>
  );
}

export default DivFooter;
