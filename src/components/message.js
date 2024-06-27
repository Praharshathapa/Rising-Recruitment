import { Messages } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const MessageSlider = () => {
  return (
    <div className="flex justify-center">
      {" "}
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper lg:h-[300px] h-[400px] mx-auto"
      >
        {Messages.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-32 lg:ml-20 lg:mt-0 mt-[-15%] ml-[10%] ">
                <div className="lg:w-[328px] lg:h-[328px] lg:mx-0 mx-auto w-64 h-64">
                  <img
                    className="rounded-2xl object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="text-2xl lg:mb-8 mb-4 lg:w-full mx-auto w-[300px] lg:mt-8 md:mt-2 mt-[-15%] italic font-normal text-[#000000]">
                    {item.message}
                  </h5>
                  <div>
                    <p className="text-[#333333]">{item.author}</p>
                    <b>
                      <p className="text-[#333333]">{item.position}</p>
                    </b>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination"></div>{" "}
      </Swiper>
    </div>
  );
};

export default MessageSlider;
