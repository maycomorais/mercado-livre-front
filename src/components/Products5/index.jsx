import CardLoja from "../CardLoja";
import "./style.css";

const Products5 = () => {
  return (
    <div className="products-container">
      <div className="title-container">
        <h3>As melhores lojas te esperam</h3>
        <span>Ver Lojas</span>
      </div>
      <div className="card-product-container">
        <CardLoja />
      </div>
    </div>
  );
};

export default Products5;
