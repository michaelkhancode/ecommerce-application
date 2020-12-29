import React from "react";

export default function Rating({ rating, text }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => {
        return (
          <span key={i}>
            <i
              className={
                rating >= i
                  ? "fas fa-star"
                  : rating >= i - 0.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
        );
      })}
      <span>{text ? text : ""}</span>
    </div>
  );
}
