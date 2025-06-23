import Dictionary from "./Dictionary.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container m-5 text-center">
        <header className="App-header"></header>
        <em>Hi, this is the header still needs to be styled</em>
        <main className="mt-3">
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Samira Mohamed</footer>
      </div>
    </div>
  );
}
