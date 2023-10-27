import ModelPost from "../../components/ModelPost";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_gif.gif";

const About = () => {
  return (
    <ModelPost fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className="about__subtitle">Olá, eu sou Vanessa!</h3>

      <img
        src={fotoSobreMim}
        alt="Gif de uma borboleta do gênero vanessa"
        className="about__image"
      />

      <p className="about__paragraph">
        Bacharel em Sistemas de Informação, especialista em Gestão
        Estratégica de Projetos e Metodologias Ágeis.
      </p>
      <p className="about__paragraph">
        Nas horas vagas, gosto de cozinhar ou me divertir jogando. Além disso,
        gosto de ler e aproveitar a tranquilidade da minha própria companhia.
      </p>
      <p className="about__paragraph">
        Sou uma pessoa movida por desafios, e isso me levou a explorar diversas
        áreas, como comercial, financeira, saúde, educação e administração.
        Sempre trabalhei com pessoas e para pessoas. Meu caminho acadêmico foi
        diversificado, começando com Química, passando por Administração,
        Arquitetura e Urbanismo e Direito, até encontrar minha paixão pela TI
        ❤️.
      </p>
      <p className="about__paragraph">
        Cada experiência ao longo desse percurso contribuiu para quem sou hoje.
      </p>
      <p className="about__paragraph">
        Além da tecnologia, também amo estudar, aprender e compartilhar meus
        conhecimentos.
      </p>
    </ModelPost>
  );
};

export default About;
