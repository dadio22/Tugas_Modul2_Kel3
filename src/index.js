import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Produk from "./components/Produk/produk";
import Button from "./components/Button/button";
import Logo from "./assets/coollogo.png";

const data = [
  {
    name: "Black Tee",
    price: "$20",
    color: "Black",
    images:
      "https://shop.lostfrequencies.com/wp-content/uploads/2020/03/Lost-on-the-Beach-Black-tee-back.jpg",
  },
  {
    name: "White Tee",
    price: "$20",
    color: "White",
    images:
      "https://shop.lostfrequencies.com/wp-content/uploads/2020/03/Lost-Frequencies-white-tee-the-beach-back.jpg",
  },
  {
    name: "Red Tee",
    price: "$20",
    color: "Red",
    images:
      "https://www.wrangler-ap.com/storage/app/uploads/public/5d2/408/686/5d2408686ebbb789429690.jpg",
  },
  {
    name: "Green Tee",
    price: "$20",
    color: "Green",
    images:
      "https://ae01.alicdn.com/kf/Hf76f21200a284183b984d9ecd813c9563/Summer-Green-Vintage-T-Shirt-Boys-Dark-Green-Tee-Shirt-Cotton-Short-Sleeve-Quality-Blank-Tshirt.jpg",
  },
];

const tombol = [
  {
    nama: "Order Black Tee",
    size: "S/M/L/XL",
  },
  {
    nama: "Order White Tee",
    size: "M/L/XL",
  },
  {
    nama: "Order Red Tee",
    size: "S/M/L/XL/XXL",
  },
  {
    nama: "Order Green Tee",
    size: "S/M/L",
  },
];

const size = [
  {
    small: "S: 18 x 29 inches",
  },
  {
    medium: "M: 20 x 30 inches",
  },
  {
    large: "L: 22 x 31 inches",
  },
  {
    xlarge: "XL: 24 x 32 inches",
  },
  {
    xxlarge: "XXL: 26 x 33 inches",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Produk title="Toko Kelompok 3" data={data} logo={Logo} />
    <Button tombol={tombol} size={size} close="Happy Choosing!" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
