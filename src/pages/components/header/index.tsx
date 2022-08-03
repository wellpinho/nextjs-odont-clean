import Link from "next/link";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/images/logo.svg" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-primary"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Profissionais</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Tratamentos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Dúvidas</a>
              </li>
              <Link href="/agendar">
                <a>
                  <img src="/images/agendar.svg" alt="" />
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
