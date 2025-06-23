import { useState } from "react";
import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ....${keyword}`);
  }

  function handleKeywordUpdate(event) {
    console.log(event.target.value);
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
    </div>
  );
}
