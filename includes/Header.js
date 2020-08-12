export default function Header({ options }) {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand w-auto" href="#">
          <img
            src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
            className="img-fluid w-25"
            alt="Logo Next"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {options.map((option, index) => {
              return (
                <li className="nav-item active" key={index}>
                  <a className="nav-link" href={option.path}>
                    {option.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
