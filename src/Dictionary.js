import { useState } from "react";
import React from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordUpdate(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="enter a word.."
          autoFocus={true}
          onChange={handleKeywordUpdate}
        />
        <input type="submit" value="Search" />
      </form>
      <Results definition={definition} />
    </div>
  );
}
