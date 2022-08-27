import "./style.css";
import CreditCard from "../../assets/images/credit-card.svg"
import Mc from "../../assets/images/mercado-credito.svg"
import QrCode from "../../assets/images/qr.svg"
import Plus from "../../assets/images/view-more.svg"

const PaymentsBanner = () => {
  return (
    <div className="payment-background">
      <div className="payment-container">
        <div className="container">
          <h5>Pagamento rápido e seguro</h5>
          <p>com Mercado Pago</p>
        </div>
        <div className="info border">
          <img src={CreditCard} alt="" />
          <div className="container2">
            <h5>Até 10 parcelas sem juros</h5>
            <p>ver mais</p>
          </div>
        </div>
        <div className="info">
          <img src={Mc} alt="" />
          <div className="container2">
            <h5>Parcelamento sem cartão</h5>
            <p>Conheça o Mercado Crédito</p>
          </div>
        </div>
        <div className="info">
          <img src={QrCode} alt="" />
          <div className="container2">
            <h5>Via Pix</h5>
            <p>ver mais</p>
          </div>
        </div>
        <div className="info">
          <img src={Plus} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentsBanner;
