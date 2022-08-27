import Card from "../Card";
import "./style.css";

const Products = () => {
  return (
    <div className="products-container">
      <div className="title-container">
        <h3>Baseada na sua última visita</h3>
        <span>Ver histórico</span>
      </div>
      <div className="card-product-container">
        <Card />
      </div>
    </div>
  );
};

export default Products;
