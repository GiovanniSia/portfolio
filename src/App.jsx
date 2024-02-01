import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Start from "./components/start/Start";
import Us from "./components/us/Us";
import "./styles/normalize.css";
import Portfolio from "./components/portfolio/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Start />
      <Us />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
