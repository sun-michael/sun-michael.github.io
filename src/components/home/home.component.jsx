import About from "../about/about.component";
import Details from "../details/details.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container row">
      <div className="col-md-6 sticky-top bg-light d-md-none">
        <About />
      </div>

      <div className="col-md-6 sticky-top bg-transparent d-none d-md-block">
        <About />
      </div>

      {/* <div className="col-md-6 sticky-top bg-light">
        <About />
      </div> */}
      <div className="col-md-6 custom-mt">
        <Details />
      </div>
    </div>
  );
};

export default Home;
