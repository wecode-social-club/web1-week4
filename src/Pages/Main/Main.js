import { useState } from "react";
import data from "./data/product";
import Card from "../../Components/Card/Card";
import "./Main.scss";

function Main() {
  const [startAt, setStartAt] = useState(0);

  return (
    <div className="main-page">
      <div className="title-wrap">
        <p className="title">늘 기분 좋은 가격</p>
        <p className="sub-title">가격부터 늘 기분 좋은 컬리 장바구니 필수템</p>
      </div>

      <div className="card-wrap">
        <div
          onClick={() => {
            setStartAt(startAt - 1);
          }}
          className="prev-btn img-move-btn"
        >
          <img src="https://res.kurly.com/pc/service/main/1908/btn_prev_default_x2.png" />
        </div>

        {data.slice(startAt, startAt + 4).map((product) => {
          return (
            <Card img={product.img} name={product.name} price={product.price} />
          );
        })}

        <div
          onClick={() => {
            setStartAt(startAt + 1);
          }}
          className="next-btn img-move-btn"
        >
          <img src="https://res.kurly.com/pc/service/main/1908/btn_next_default_x2.png" />
        </div>
      </div>
    </div>
  );
}

export default Main;
