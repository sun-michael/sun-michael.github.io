import About from "../about/about.component";
import AboutNested from "../about-nested/about-nested.component";
import Details from "../details/details.component";
import ConfettiWithImages from "../confetti-logo/confetti-logo.component";
import "./home.styles.scss";
import AboutDetails from "../about-details/about-details.component";

const Home = () => {
  return (
    <div className="home-container row">
      <ConfettiWithImages />
      <div className="col-md-4 sticky-top bg-white bg-md-transparent">
        {/* <About /> */}
      </div>
      <div className="col-md-4 sticky-top bg-white bg-md-transparent">
        <AboutNested />
      </div>
      {/* <div className="col-md-4 sticky-top bg-white bg-md-transparent">
      </div> */}
      <div className="col-md-4 custom-mt">
        <Details />
      </div>
    </div>
  );
};

export default Home;
