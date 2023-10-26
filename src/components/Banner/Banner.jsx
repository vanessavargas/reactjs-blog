import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__presentation">
        <h1 className="banner__presentation-title">Olá, Mundo!</h1>

        <p className="banner__presentation-paragraph">
          Boas vindas ao meu espaço pessoal! Eu sou Vanessa Vargas, Software
          Developer apaixonada pelo Front End. Aqui compartilho vários
          conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className="banner__images">
        <img
          className="banner__images-circle"
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className="banner__images-photo"
          src={minhaFoto}
          alt="Foto da Vanessa Vargas sorrindo"
        />
      </div>
    </div>
  );
};

export default Banner;
