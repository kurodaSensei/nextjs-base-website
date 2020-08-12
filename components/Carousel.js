import Slider from "react-slick";

export default function Carousel({ testimonials }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => {
        return (
          <div
            className=" col-10 mx-auto d-flex flex-column align-items-center testimonial"
            key={index}
          >
            <img
              src={testimonial.photo}
              className="rounded-circle"
              alt="testimony"
            ></img>
            <h3 className="testimonial__name">{testimonial.name}</h3>
            <p className="text-center testimonial__content">
              {testimonial.content}
            </p>
          </div>
        );
      })}
      <style jsx>{`
        .testimonial {
        }
        .testimonial__name {
          font-size: 30px;
          font-weight: 700;
        }
      `}</style>
    </Slider>
  );
}
