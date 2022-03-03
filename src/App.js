import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  document.title = "Aapki Dukaan";
  return (
    <div className="App">
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
