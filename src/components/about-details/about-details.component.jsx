import "./about-details.styles.scss";

const AboutDetails = () => {
  return (
    <div className="about-detail-container custom-px bg-white">
      <div id="list-example" className="list-group years-list">
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-1"
        >
          2025
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-2"
        >
          2024
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-3"
        >
          2023
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-4"
        >
          2022
        </a>
      </div>
    </div>
  );
};

export default AboutDetails;
