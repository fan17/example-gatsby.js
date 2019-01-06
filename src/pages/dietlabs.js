import React from "react";
import SaleProducts from "../components/dietlabs/SaleProducts";

const Index = ({ data }) => (
  <div>
    <h1>Dietlabs - sale products</h1>
    {<SaleProducts products={data.dietlabs.sale.productVariants} />}
  </div>
);

export default Index;

export const query = graphql`
  query DietlabsDietaHpbaPlSaleProducts {
    dietlabs {
      sale {
        productVariants {
          id
          name
          saleProduct {
            id
            name
            price {
              regular {
                amount
                currency
              }
              promo {
                amount
                currency
              }
            }
          }
        }
      }
    }
  }
`;
