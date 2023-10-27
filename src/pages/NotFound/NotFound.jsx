import { useNavigate } from "react-router-dom";
import erro404 from "../../assets/erro_404.png";
import MainButton from "../../components/MainButton";

const NotFound = () => {
  const navegar = useNavigate();

  return (
    <>
      <div className="not-found__container">
        <span className="not-found__container-text404">404</span>

        <h1 className="not-found__container-title">
          Ops! Página não encontrada.
        </h1>

        <p className="not-found__container-paragraph">
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className="not-found__container-paragraph">
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className="not-found__container-btn" onClick={() => navegar(-1)}>
          <MainButton tamanho="lg">Voltar</MainButton>
        </div>

        <img
          className="not-found__container-image"
          src={erro404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>
      <div className="not-found__space"></div>
    </>
  );
};

export default NotFound;
