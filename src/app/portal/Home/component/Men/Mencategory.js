import React from "react";

function Mencategory(props) {
  return (
    <>
      <div className="col-4">
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
export default Mencategory;
