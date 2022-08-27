import "./style.css";
import mock2 from "../../mock/index2.js";
import { useState } from "react";

const Card2 = () => {
  const [mockProduct2] = useState(mock2);

  return (
    <>
      {mockProduct2.map((element, index) => {
        return (
          <div className="card-container" key={index}>
            <div className="card-image">
              <img src={element.image} alt={element.name} />
            </div>
            <div className="infos-container">
              <h4 className="price">R$ {element.price}</h4>
              <h5 className="credit">10x de {(element.price / 10.).toFixed(2)} sem juros</h5>
              <h5 className="shipp">Frete Grátis</h5>
              <h5 className="description">{element.description}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card2;
