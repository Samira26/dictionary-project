import React from "react";
import Meanings from "./Meanings.js";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <h2>{props.definition.word}</h2>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
