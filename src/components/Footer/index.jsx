import "./style.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="info-footer-container">
        <p>Mais Informações</p>
      </div>
      <div className="card-footer">
        <div className="links-container">
          <ul>
            <li>Trabalhe conosco</li>
            <li>Termos e condições</li>
            <li>Como cuidamos da sua privacidade</li>
            <li>Acessibilidade</li>
            <li>Contato</li>
            <li>Informações sobre seguros</li>
          </ul>
        </div>
        <div className="copy-container">
          <p>Copyright © 1999-2022 Ebazar.com.br LTDA.</p>
        </div>
        <div className="adress-container">
          <p>
            CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003,
            Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
