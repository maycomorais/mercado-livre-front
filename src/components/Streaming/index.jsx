import "./style.css";

const Streaming = () => {
  return (
    <div className="streaming-container">
      <div className="title-container">
        <h3>Benefícios do Mercado Pontos</h3>
        <span>Ver todos os benefícios</span>
      </div>
      <div className="card-streaming-container">
        <div className="card-streaming um">
          <div className="info-streaming">
            <img
              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"
              alt="Logo HBOmax"
            />
            <div className="details-streaming">
              <p className="normal"> 7 dias grátis</p>
              <p className="hype">50% off</p>
              <p className="normal">hbo max</p>
            </div>
          </div>
        </div>
        <div className="card-streaming dois">
          <div className="info-streaming if2">
            <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png" alt="Logo Paramount Plus" />
            <div className="details-streaming">
              <p className="normal">7 dias grátis</p>
              <p className="hype">50% off</p>
              <p className="normal">paramount +</p>
            </div>
          </div>
        </div>
        <div className="card-streaming tres">
          <div className="info-streaming if3">
            <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/deezer/deezer-logo-vdp-filled@2x.png" alt="Logo Deezer" />
            <div className="details-streaming">
              <p className="normal">7 dias grátis</p>
              <p className="hype">50% off</p>
              <p className="normal">Deezer / App de Música</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streaming;
