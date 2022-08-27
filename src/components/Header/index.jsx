import "./style.css";
import Logo from "../../assets/images/logo.png";
import Meli from "../../assets/images/meli-6.png";
import Location from "../../assets/images/location.png";
import User from "../../assets/images/user.png";
import Kart from "../../assets/images/kart.png";
import Bell from "../../assets/images/bell.png";
import Search from "../../assets/images/search.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="top-container">
          <img className="logo" src={Logo} alt="Logo Mercado Livre" />
          <div className="input">
            <input
              type="text"
              placeholder="Buscar Produtos, marcas e muito mais"
            />
            <img src={Search} alt="" />
          </div>
          <img className="meli6" src={Meli} alt="Nível 6" />
        </div>
        <div className="botton-container">
          <div className="location">
            <img src={Location} alt="" />
            <div className="location-container">
              <h4>Enviar para Maycon</h4>
              <p>Rua Marechal Deodoro</p>
            </div>
          </div>
          <div className="menu-nav">
            <ul>
              <li>Categorias</li>
              <li>Ofertas do dia</li>
              <li>Histórico</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="infos">
            <div className="info-container">
              <img src={User} alt="" />
              <p>Maycon</p>
            </div>
            {/* <div className="info-link"> */}
              <p>Compras</p>
              <p>Favoritos</p>
            {/* </div> */}
          </div>
          <div className="icons">
            <img src={Bell} alt="" />
            <img src={Kart} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
