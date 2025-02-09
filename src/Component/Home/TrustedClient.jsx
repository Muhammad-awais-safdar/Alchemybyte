import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const TrustedClientsSlider = () => {
  return (
    <div className="trusted-clients bg-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Trusted Client Box Start */}
            <div className="trusted-client-box">
              {/* Trusted Client Title Start */}
              <div className="trusted-client-title">
                <h3>trusted by teams at</h3>
              </div>
              {/* Trusted Client Title End */}
              {/* Trusted Clients Slider Start */}
              <div className="trusted-clients-slider">
                <Swiper
                  loop={true}  // Infinite loop
                  slidesPerView={5}  // Number of slides visible at a time
                  spaceBetween={30}  // Space between slides
                  autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay setting
                  modules={[ Autoplay]} // Pass modules as an array
                  breakpoints={{
                    768: {
                      slidesPerView: 5,  // For tablets
                    },
                    480: {
                      slidesPerView: 3,  // For mobile devices
                    },
                  }}
                >
                  {/* Trusted Client Logo Start */}
                  <SwiperSlide>
                    <div className="trusted-client-logo">
                      <img src="images/client-logo-1.svg" alt="Client Logo 1" />
                    </div>
                  </SwiperSlide>
                  {/* Trusted Client Logo End */}

                  {/* Trusted Client Logo Start */}
                  <SwiperSlide>
                    <div className="trusted-client-logo">
                      <img src="images/client-logo-2.svg" alt="Client Logo 2" />
                    </div>
                  </SwiperSlide>
                  {/* Trusted Client Logo End */}

                  {/* Trusted Client Logo Start */}
                  <SwiperSlide>
                    <div className="trusted-client-logo">
                      <img src="images/client-logo-3.svg" alt="Client Logo 3" />
                    </div>
                  </SwiperSlide>
                  {/* Trusted Client Logo End */}

                  {/* Trusted Client Logo Start */}
                  <SwiperSlide>
                    <div className="trusted-client-logo">
                      <img src="images/client-logo-4.svg" alt="Client Logo 4" />
                    </div>
                  </SwiperSlide>
                  {/* Trusted Client Logo End */}

                  {/* Trusted Client Logo Start */}
                  <SwiperSlide>
                    <div className="trusted-client-logo">
                      <img src="images/client-logo-5.svg" alt="Client Logo 5" />
                    </div>
                  </SwiperSlide>
                  {/* Trusted Client Logo End */}

                  {/* Trusted Client Logo Start */}
                  <SwiperSlide>
                    <div className="trusted-client-logo">
                      <img src="images/client-logo-1.svg" alt="Client Logo 1" />
                    </div>
                  </SwiperSlide>
                  {/* Trusted Client Logo End */}
                </Swiper>
              </div>
              {/* Trusted Clients Slider End */}
            </div>
            {/* Trusted Client Box End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedClientsSlider;
