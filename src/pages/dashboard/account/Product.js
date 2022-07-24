import React from "react";
import MyAccountLayout from "../../../components/layouts/MyAccountLayout";
import Producto from "../../../components/dashboard/myaccount/Product";

const Product = ({ theme, setTheme }) => {
  return (
    <MyAccountLayout setTheme={setTheme} theme={theme}>
      <Producto theme={theme} />
    </MyAccountLayout>
  );
};

export default Product;
