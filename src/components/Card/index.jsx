import "./style.css";
import mock from "../../mock/index.js";
import { useState } from "react";

const Card = () => {
  const [mockProduct] = useState(mock);

  return (
    <>
      {mockProduct.map((element, index) => {
        return (
          <div className="card-container" key={index}>
            <div className="card-image">
              <img src={element.image} alt={element.name} />
            </div>
            <div className="infos-container">
              <h4 className="price">R$ {element.price}</h4>
              <h5 className="credit">10x de {(element.price / 10).toFixed(2)} sem juros</h5>
              <h5 className="shipp">Frete Grátis</h5>
              <h5 className="description">{element.description}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
