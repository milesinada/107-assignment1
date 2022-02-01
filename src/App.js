import "./App.css";
import NavBar from "./components/navBar";
import Thanks from "./components/footer";
import QuantityPicker from "./components/quantityPicker";

//css pallette #a6445d #021c41 #142f40 #d89b65 #bf835f

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to my Super Online Store</h1>
      <QuantityPicker></QuantityPicker>
      <Thanks></Thanks>
    </div>

  );
}

export default App;
