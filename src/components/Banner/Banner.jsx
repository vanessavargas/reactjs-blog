import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="presentation">
        <h1 className="title">Olá, Mundo!</h1>

        <p className="paragraph">
          Boas vindas ao meu espaço pessoal! Eu sou Vanessa Vargas, Software
          Developer apaixonada pelo Front End. Aqui compartilho vários
          conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className="images">
        <img
          className="circle-colored"
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className="my-photo"
          src={minhaFoto}
          alt="Foto da Vanessa Vargas sorrindo"
        />
      </div>
    </div>
  );
};

export default Banner;
