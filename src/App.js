import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./Navigation";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  return (
    <>
      <Navigation />
      {AOS.init()}
    </>
  );
}

export default App;
