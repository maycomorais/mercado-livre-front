import "./style.css";

const OfferCard = () => {
  return (
    <div className="OfferCard-container">
      <div className="offerCard-title-container">
        <h3>Confira</h3>
      </div>
      <div className="card-OfferCard-container">
        <div className="card-OfferCard">
          <div className="info-OfferCard">
            <div className="details-OfferCard">
              <p className="n1">itens e acessórios</p>
              <p className="n2">com até 10% off com cupom</p>
              <button>Ver Mais</button>
            </div>
            <div className="offerCard-img">
              <img
                src="https://http2.mlstatic.com/D_NQ_614560-MLA50967256426_082022-C.webp"
                alt="Imagem de Pneus"
              />
            </div>
          </div>
        </div>
        <div className="card-OfferCard">
          <div className="info-OfferCard">
            <div className="details-OfferCard">
              <p className="n1">itens e acessórios</p>
              <p className="n2">com até 10% off com cupom</p>
              <button>Ver Mais</button>
            </div>
            <div className="offerCard-img">
              <img
                src="https://http2.mlstatic.com/D_NQ_642445-MLA51184602840_082022-C.webp"
                alt="Utilidades Domésticas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
