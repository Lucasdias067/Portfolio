import './style.css';
import notebook from '../../assets/img-notebook.png';

export default function AboutMe() {

  return (
    <section id="aboutMe">
      <div className="sobre-mim">
        <div>
          <img src={notebook.src} alt="Notebook" className="img-sobre-mim" />
        </div>
        <div className="sobre-mim-container">
          <div className="centralizar" id='sobre-mim-titulo'>
            <h1 className="titulos">
              Sobre mim
              <div className="effect"> </div>
            </h1>
            <p className="inf-sobre-mim">
              Meu nome é Lucas Dias e desde pequeno sou apaixonado pela tecnologia, o que me levou a buscar a carreira de programador e escolher a área de TI, sempre tive um interesse em compreender como as coisas funcionam, além de ser uma área que gosto de estudar e aprender habilidades novas.<br /><br />
              Tenho experiência em desenvolvimento Web e estou constantemente criando aplicações através dos cursos e da faculdade, e
              além do desenvolvimento profissional procuro me desenvolver no âmbito pessoal.
              Estou sempre disposto a aprender e enfrentar desafios difíceis e sou comprometido em entregar resultados de qualidade para a equipe e para a empresa. Valorizo também o trabalho em equipe, trabalhar com pessoas de diferentes origens e habilidades para atingir um objetivo em comum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}