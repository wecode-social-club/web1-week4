import data from "./data/product";
import Card from "../../Components/Card/Card";
import "./Main.scss";

function Main() {
  return (
    <div className="main-page">
      <div className="title-wrap">
        <p className="title">늘 기분 좋은 가격</p>
        <p className="sub-title">가격부터 늘 기분 좋은 컬리 장바구니 필수템</p>
      </div>

      <div className="card-wrap">
        {data.map((product) => {
          return (
            <Card img={product.img} name={product.name} price={product.price} />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
