import { Link, useLocation } from "react-router-dom";

const MenuLink = ({ children, to }) => {
  const localizacao = useLocation();

  return (
    <Link
      className={`link ${localizacao.pathname === to ? "link-destak" : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
