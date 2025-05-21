import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <ul className="demon-cards">
      <li>
        <i class="fa-solid fa-moon"></i>
      </li>
      <li>History</li>
      <li>Log In</li>
    </ul>
  );
}

export default App;
