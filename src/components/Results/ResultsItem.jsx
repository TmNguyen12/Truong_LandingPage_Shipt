import React from "react";

const ResultsItem = props => {
  const { shop } = props;
  return (
    <div className="shop-result-wrapper">
      <h1 className="shop-result-name">{shop.name}</h1>
      <h4 className="shop-availability">{shop.available}</h4>
    </div>
  );
};

export default ResultsItem;
