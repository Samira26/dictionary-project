import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meanings.css";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <li className="definition">{definition.definition}</li>

            <Examples example={definition.example} />

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
