import React from "react";
import "./Sidenav.css";

function Sidenav(props) {
  return (
    <>
      <div className="col">
        <div className="card">
          <img
            src={props.image}
            className="card-img-top"
            alt="..."
            height="300px"
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h5 className="card-price">{props.price}</h5>
            <button type="button" className="btn btn-primary">
              View Details
            </button>
            &nbsp; &nbsp; &nbsp;
            <button type="button" className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidenav;
