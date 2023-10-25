import { Link, useLocation } from "react-router-dom";

export default function MenuLink({ children, to }) {
  const localizacao = useLocation();

  return (
    <Link
      className={`link ${localizacao.pathname === to ? "link-destak" : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
}
