import "./style.css";

const OfferCard2 = () => {
  return (
    <div className="OfferCard-container">
      <div className="offerCard-title-container">
        <h3>Você pode se interessar</h3>
      </div>
      <div className="card-OfferCard-container">
        <div className="card-OfferCard">
          <div className="info-OfferCard">
            <div className="details-OfferCard">
              <p className="n1">NA HYUNDAI DA JOGO</p>
              <p className="n2">SAIA DE CRETA OFERTA IMPERDÍVEL!</p>
              <button>Ver Mais</button>
            </div>
            <div className="offerCard-img">
              <img
                src="https://http2.mlstatic.com/D_NQ_649228-MLA51199615827_082022-C.webp"
                alt="Carro Hyundai"
              />
            </div>
          </div>
        </div>
        <div className="card-OfferCard">
          <div className="info-OfferCard">
            <div className="details-OfferCard">
              <p className="n1">ACHADOS DA SEMANA</p>
              <p className="n2">OFERTAS ATÉ 60% OFF</p>
              <button>Ver Mais</button>
            </div>
            <div className="offerCard-img">
              <img
                src="https://http2.mlstatic.com/D_NQ_682409-MLA51243865127_082022-C.webp"
                alt="Utilidades Domésticas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard2;
