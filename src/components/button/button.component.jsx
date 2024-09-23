const Button = ({ href, name }) => {
  return (
    <button type="button" class="btn btn-light">
      <a
        href={href}
        target="_blank"
        className="text-decoration-none text-body-secondary"
      >
        {name}
      </a>
    </button>
  );
};

export default Button;
