import Carousel from "./../Components/Carousel";
import Cards from "../Components/Cards";
// import Cards2 from "../Components/Cards2";
import Card from "../Components/Card";
import Cards2 from "../Components/Cards2";
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const goToSavingsCalculator = () => {
   
    window.scrollTo(0, 0);
    navigate("/calculator");
  };

  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
      <Carousel />

      <Cards />
      <Card />
      <Cards2 />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <button
                className="btn btn-primary m-2"
                onClick={goToSavingsCalculator}
              >
                <strong>Savings Calculator</strong>
              </button>
      </div>
    </div>
  );
};

export default HomePage;
