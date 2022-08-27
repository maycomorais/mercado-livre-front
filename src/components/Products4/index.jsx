import Card4 from "../Card4/index";
import "./style.css";

const Products4 = () => {
  return (
    <div className="products-container">
      <div className="title-container">
        <h3>Baseado no seu carrinho de compras</h3>
        <span>Ver carrinho</span>
      </div>
      <div className="card-product-container">
        <Card4 />
      </div>
    </div>
  );
};

export default Products4;
