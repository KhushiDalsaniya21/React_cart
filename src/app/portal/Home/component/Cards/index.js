import React from "react";
import "./CardContainer.css";

function CardContainer(props) {
  return (
    <>
      <div className="col-2">
        <div class="card bg-dark text-white">
          <img src={props.image} class="card-img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="title">{props.name}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardContainer;
