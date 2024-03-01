import "./App.css";
import Header from "./assets/Components/Header.jsx";
import Hero from "./assets/Components/HeroSection.jsx";
import DetailOfPatients from "./assets/Components/Detail.jsx";
import Footer from "./assets/Components/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="w-full px-10 sm:px-20 py-8">
        <Header />
        <Hero />
        <DetailOfPatients />
      </div>
      <div className="w-full my-20">
        <Footer />
      </div>
    </>
  );
};

export default App;
