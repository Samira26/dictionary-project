import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        Hi, this is the header
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Samira Mohamed</footer>
      </div>
    </div>
  );
}
