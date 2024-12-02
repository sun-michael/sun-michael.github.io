import "./button.styles.scss";

const Button = ({ href, name }) => {
  return (
    <div className="button-container">
      <button type="button" class="btn btn-light">
        <a
          href={href}
          target="_blank"
          className="text-decoration-none text-body-secondary"
        >
          {name}
        </a>
      </button>
    </div>
  );
};

export default Button;
