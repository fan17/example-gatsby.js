import React from "react";

const SaleProducts = ({ products }) => (
  <div>
    {products.map(saleProductVariant => (
      <div key={saleProductVariant.id}>
        <h2>{saleProductVariant.name}</h2>
        <p>
          {`price regular: ${
            saleProductVariant.saleProduct.price.regular.amount
          } ${saleProductVariant.saleProduct.price.regular.currency}`}
        </p>
        <p>
          {`price promo: ${saleProductVariant.saleProduct.price.promo.amount} ${
            saleProductVariant.saleProduct.price.promo.currency
          }`}
        </p>
      </div>
    ))}
  </div>
);

export default SaleProducts;
