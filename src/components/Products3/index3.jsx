import Card3 from "../Card3/index3";
import "./style.css";

const Products3 = () => {
  return (
    <div className="products-container">
      <div className="title-container">
        <h3>Ofertas do Dia</h3>
        <span>Ver histórico</span>
      </div>
      <div className="card-product-container">
        <Card3 />
      </div>
    </div>
  );
};

export default Products3;
