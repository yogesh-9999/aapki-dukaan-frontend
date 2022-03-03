import React from "react";
import "./Banner.scss";
function Banner() {
  const data = [
    {
      linkurl: "https://www.google.com/",
      id: 1,
      imgurl:
        "https://rukminim1.flixcart.com/flap/844/140/image/fdeff329e0f47190.jpg?q=50",
    },
    {
      linkurl: "https://www.google.com/",
      id: 2,
      imgurl:
        "https://rukminim1.flixcart.com/image/416/416/jx257680/painting/n/p/g/naag-646-b-new-anjani-art-gallery-original-imafhh5nz7j5cqvr.jpeg?q=70",
    },
    {
      linkurl: "https://www.google.com/",
      id: 3,
      imgurl: "https://images.hdqwalls.com/wallpapers/nature-scenery-4k-s4.jpg",
    },
  ];
  return (
    <>
      <div className="crousel-container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {data.map((slide) => (
              <div
                key={slide.id}
                className={
                  slide.id === 1 ? "carousel-item active" : "carousel-item"
                }
              >
                <a href={slide.linkurl}>
                  <img src={slide.imgurl} className="carousel-img" alt="..." />
                </a>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
