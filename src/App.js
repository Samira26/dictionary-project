import Dictionary from "./Dictionary.js";
import "./App.css";
import dictionaryBook from "./dictionaryBook.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mt-5"></header>
        <img
          src={dictionaryBook}
          className="dictionary-image img-fluid"
          alt="Dictionary"
        />
        <h1>Dictionary App</h1>
        <main className="mt-3">
          <Dictionary defaultKeyword="word" />
        </main>
        <footer className="text-center">
          Coded by{" "}
          <a
            href="https://github.com/Samira26"
            target="_blank"
            rel="noreferrer"
          >
            Samira Mohamed
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/Samira26/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://project-dictionaryapp.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
