import Header from "./components/1/Header";
import Section1 from "./components/2/Section1";
import Section2 from "./components/2/Section2";
import Section3 from "./components/2/Section3";
import Section4 from "./components/2/Section4";
import Section5 from "./components/2/Section5";
import Footer from "./components/3/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </header>
    </div>
  );
}

export default App;
