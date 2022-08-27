import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlender, faBuilding, faCar, faCouch, faCrutch, faCubesStacked, faDisplay, faFutbol, faGamepad, faMicrophoneLines, faMobileScreenButton, faShirt, faTruckMonster, faWrench } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <div className="category-container">
      <div className="category-title">
        <h3>Categorias Populares</h3>
      </div>
      <div className="category-box">
        <div className="top-category-card">
          <div className="category-card">
            <div>
              <FontAwesomeIcon icon={faCar} />
            </div>
            <p>Carros, Motos e Outros</p>
          </div>
          <div className="category-card">
            <div>
              <FontAwesomeIcon icon={faCrutch} />
            </div>
            <p>Beleza e Cuidado Pessoal</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faShirt} />
            </div>
            <p>Calçados, Roupas e Bolsas</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </div>
            <p>Celulares e Telefones</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faMicrophoneLines} />
            </div>
            <p>Eletrônicos, Áudio e Vídeo</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faWrench} />
            </div>
            <p>Ferramentas</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faDisplay} />
            </div>
            <p>Informática</p>
          </div>
        </div>
        <div className="botton-category-card">
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faTruckMonster} />
            </div>
            <p>Acessórios para Veículos</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faCubesStacked} />
            </div>
            <p>Brinquedos e Hobbies</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faCouch} />
            </div>
            <p>Casa, Móveis e Decoração</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faBlender} />
            </div>
            <p>Eletrodomésticos</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faFutbol} />
            </div>
            <p>Esporte e Fitness</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faGamepad} />
            </div>
            <p>Games</p>
          </div>
          <div className="category-card">
          <div>
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <p>Imóveis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
