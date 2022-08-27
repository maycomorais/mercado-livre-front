import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Ban1 from "../../assets/images/ban1.png";
import Ban2 from "../../assets/images/ban2.png";
import Ban3 from "../../assets/images/ban3.png";

const Banner = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      className="swiper-container"
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className="image" src={Ban1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image" src={Ban2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image" src={Ban3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image" src="https://http2.mlstatic.com/D_NQ_749644-MLA51274419574_082022-OO.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image" src="https://http2.mlstatic.com/D_NQ_646849-MLA51274227714_082022-OO.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="image" src="https://http2.mlstatic.com/D_NQ_915998-MLA50417762852_062022-OO.webp" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
