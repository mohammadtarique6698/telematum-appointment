import "./App.css";
import { useEffect, useState } from "react";
import Header from "./assets/Components/Header.jsx";
import Hero from "./assets/Components/HeroSection.jsx";
import DetailOfPatients from "./assets/Components/Detail.jsx";
import Footer from "./assets/Components/Footer.jsx";

const App = () => {
  const [info, setInfo] = useState([]);

  const funcForFetchData = async () => {
    const response = await fetch("./patientDetails.json");
    const data = await response.json();
    //console.log(data);
    setInfo(data);
  };

  useEffect(() => {
    funcForFetchData();
  }, []);

  return (
    <>
      <div className="w-full px-10 sm:px-20 py-8">
        <Header />
        <Hero />
        <DetailOfPatients
          info={info}
          color={info.map((item) =>
            item.Action == "Booked" ? "green" : "orange"
          )}
        />
      </div>
      <div className="w-full my-20">
        <Footer />
      </div>
    </>
  );
};

export default App;
