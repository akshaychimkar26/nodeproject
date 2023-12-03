import Home from "./Pages/Home";
import Bollywood from "./Pages/Bollywood";
import Fitness from "./Pages/Fitness";
import Gaming from "./Pages/Gaming";
import Technology from "./Pages/Technology";
import Hollywood from "./Pages/Hollywood";
import RouteCompo from "../src/Utilities/Routes/RouteCompo";
import "./global.css";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <RouteCompo>
        <Home />
        <Bollywood />
        <Hollywood />
        <Technology />
        <Fitness />
        <Gaming />
      </RouteCompo>
    </div>
  );
}

export default App;