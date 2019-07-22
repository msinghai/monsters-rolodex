import React from "react";

export const Card = props => (
  <div className="col-md-3">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      className="img-responsive"
      alt="Responsive image"
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
