import React from "react";
import slider1 from "C:/Users/admin/Desktop/my-app/src/assets/images/slider1.PNG";
import slider2 from "C:/Users/admin/Desktop/my-app/src/assets/images/slider2.PNG";
import slider3 from "C:/Users/admin/Desktop/my-app/src/assets/images/slider3.PNG";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="MainContent">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slider1}
                className="d-block w-100"
                alt="ABC"
                height="auto"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="caption">NEW AUTUMN COLLECTION</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={slider2}
                className="d-block w-100"
                alt="..."
                height="auto"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="caption">NEW COLLECTION</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={slider3}
                className="d-block w-100"
                alt="..."
                height="auto"
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="caption1">NEW COLLECTION</h1>
              </div>
            </div>
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
export default Slider;
