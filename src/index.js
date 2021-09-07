import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Produk from "./components/Produk/produk";

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

ReactDOM.render(
  <React.StrictMode>
    <Produk title="TOKO KELOMPOK 3" data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
