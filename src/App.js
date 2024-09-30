import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import Counter from "./components/Counter";
import Colors from "./components/Colors";
import Form from "./components/Form";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Users from "./components/Users";

const user = {
  name: "Ahmet Çalık",
  city: "Ankara",
  age: 26,
};

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        Merhaba
        {/* <User name="Sefa Yeşilarslan" age={25} city="Konya" />
        <User name="Sultan" age={22} city="Ankara" /> */}
        <User data={user} friends={["Sefa", "Sultan"]} />
        <Header />
        {isVisible && <Counter />}
        <button onClick={() => setIsVisible(!isVisible)}>Göster / Gizle</button>
        <br></br>
        <Colors />
        <br></br>
        <Form />
        <br></br>
        <Users/>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
