import "./App.css";

const demonsData = [
  {
    name: "Bael",
    photoName: process.env.PUBLIC_URL + "/demons/1.png",
  },
  {
    name: "Agares",
    photoName: process.env.PUBLIC_URL + "/demons/2.png",
  },
  {
    name: "Vassago",
    photoName: process.env.PUBLIC_URL + "/demons/3.png",
  },
  {
    name: "Gamigin",
    photoName: process.env.PUBLIC_URL + "/demons/4.png",
  },
  {
    name: "Marbas",
    photoName: process.env.PUBLIC_URL + "/demons/5.png",
  },
  {
    name: "Valefar",
    photoName: process.env.PUBLIC_URL + "/demons/4.png",
  },  
  {
    name: "Amon",
    photoName: process.env.PUBLIC_URL + "/demons/5.png",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <DemonCards />
    </div>
  );
}

function Header() {
  return (
    <header>
      <ul className="wrapper">
        <li>
          <i className="fa-solid fa-moon"></i>
        </li>
        <li>History</li>
        <li>Log In</li>
      </ul>
    </header>
  );
}

function DemonCards() {
  return (
    <ul className="demons-cards wrapper">
      {demonsData.map((demon) => (
        <Demon demonObj={demon} key={demon.name} />
      ))}
    </ul>
  );
}

function Demon(props) {
  return (
    <li className="demon-card">
      <img src={props.demonObj.photoName} alt={props.demonObj.name}></img>
      <h3>{props.demonObj.name}</h3>
    </li>
  );
}

export default App;
