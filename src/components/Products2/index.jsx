import Card2 from "../Card2/index2";
import "./style.css";

const Products2 = () => {
  return (
    <div className="products-container">
      <div className="title-container">
        <h3>Relacionado com as visitas em Casa, Móveis e Decoração</h3>
        <span>Ver histórico</span>
      </div>
      <div className="card-product-container">
        <Card2 />
      </div>
    </div>
  );
};

export default Products2;
