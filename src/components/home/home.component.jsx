import About from "../about/about.component";
import Details from "../details/details.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container row ">
      <div className="col-md-6 sticky-top bg-white border-bottom border-5">
        <About />
      </div>
      <div className="col-md-6 custom-mt">
        <Details />
      </div>
    </div>
  );
};

export default Home;
