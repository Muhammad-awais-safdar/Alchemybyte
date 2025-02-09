import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper's styles
import { Pagination } from 'swiper/modules';

const TestimonialSlider = () => {
  // State to store the testimonials
  const [testimonials, setTestimonials] = useState([]);

  // You can fetch the testimonials from an API or define them statically
  useEffect(() => {
    const fetchTestimonials = () => {
      const data = [
        {
            logo: "images/client-logo-1.svg",
            rating: 5,
            content: "The creativity professionalism shown by Alchemy Byte exceeded our expectations. Their design transformed our brand, and the results speak for themselves.",
            author_image: "images/author-1.jpg",
            author_name: "Arlene McCoy",
            author_title: "Co-Founder"
          },
          {
            logo: "images/client-logo-2.svg",
            rating: 5,
            content: "Working with Alchemy Byte has been an absolute pleasure. Their creativity and attention to detail truly brought our vision to life.",
            author_image: "images/author-2.jpg",
            author_name: "Esther Howard",
            author_title: "Director"
          },
          {
            logo: "images/client-logo-4.svg",
            rating: 5,
            content: "We couldn't be happier with the final result and have received glowing feedback from both our team and users. Alchemy Byte is a true professional.",
            author_image: "images/author-3.jpg",
            author_name: "Arlene McCoy",
            author_title: "CEO"
          },
          {
            logo: "images/client-logo-1.svg",
            rating: 5,
            content: "The creativity professionalism shown by Alchemy Byte exceeded our expectations. Their design transformed our brand, and the results speak for themselves.",
            author_image: "images/author-1.jpg",
            author_name: "Arlene McCoy",
            author_title: "Co-Founder"
          },
          {
            logo: "images/client-logo-2.svg",
            rating: 5,
            content: "Working with Alchemy Byte has been an absolute pleasure. Their creativity and attention to detail truly brought our vision to life.",
            author_image: "images/author-2.jpg",
            author_name: "Esther Howard",
            author_title: "Director"
          },
          {
            logo: "images/client-logo-4.svg",
            rating: 5,
            content: "We couldn't be happier with the final result and have received glowing feedback from both our team and users. Alchemy Byte is a true professional.",
            author_image: "images/author-3.jpg",
            author_name: "Arlene McCoy",
            author_title: "CEO"
          },
          {
            logo: "images/client-logo-1.svg",
            rating: 5,
            content: "The creativity professionalism shown by Alchemy Byte exceeded our expectations. Their design transformed our brand, and the results speak for themselves.",
            author_image: "images/author-1.jpg",
            author_name: "Arlene McCoy",
            author_title: "Co-Founder"
          },
          {
            logo: "images/client-logo-2.svg",
            rating: 5,
            content: "Working with Alchemy Byte has been an absolute pleasure. Their creativity and attention to detail truly brought our vision to life.",
            author_image: "images/author-2.jpg",
            author_name: "Esther Howard",
            author_title: "Director"
          },
          {
            logo: "images/client-logo-4.svg",
            rating: 5,
            content: "We couldn't be happier with the final result and have received glowing feedback from both our team and users. Alchemy Byte is a true professional.",
            author_image: "images/author-3.jpg",
            author_name: "Arlene McCoy",
            author_title: "CEO"
          },
      ];

      // Set the testimonials to the state
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []); // Empty dependency array, so it runs only once on component mount

  return (
    <div className="our-testimonial bg-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">testimonials</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">Hear from our <span>happy clients</span></h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Testimonial Slider Start */}
            <div className="testimonial-slider">
              <Swiper
             
                loop={true} // Infinite loop
                spaceBetween={30} // Space between slides
                slidesPerView={1} // Show one slide at a time
                pagination={{ clickable: true, el: '.testimonial-pagination' }}
                modules={[Pagination]} // Pass necessary modules
                breakpoints={{
                  768: {
                    slidesPerView: 2, // For tablets
                  },
                  1024: {
                    slidesPerView: 3, // For desktop
                  },
                }}
              >
                {/* Map over the testimonials and create SwiperSlide for each */}
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item" data-cursor-text = "drag">
                      <div className="testimonial-header">
                        <div className="testimonial-logo-img">
                          <img src={testimonial.logo} alt="Client Logo" />
                        </div>
                        <div className="testimonial-rating">
                          {/* Render the stars dynamically based on rating */}
                          {[...Array(testimonial.rating)].map((_, idx) => (
                            <i key={idx} className="fa-solid fa-star" />
                          ))}
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <p>{testimonial.content}</p>
                      </div>
                      <div className="testimonial-author">
                        <div className="author-image">
                          <figure className="image-anime">
                            <img src={testimonial.author_image} alt="Author" />
                          </figure>
                        </div>
                        <div className="author-content">
                          <h3>{testimonial.author_name}</h3>
                          <p>{testimonial.author_title}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            <div className="testimonial-pagination" />
              </Swiper>
            </div>
            {/* Testimonial Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
