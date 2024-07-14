import About from "../about/about.component";
import Details from "../details/details.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container row ">
      <div className="col-6 sticky-top">
        <About />
      </div>
      <div className="col-6 custom-mt">
        <Details />
      </div>
    </div>
  );
};

export default Home;
