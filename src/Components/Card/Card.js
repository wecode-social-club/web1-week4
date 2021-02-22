import "./Card.scss";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card-item">
      <img src={props.img} />
      <div className="card-detail">
        <p>{props.name}</p>
        <p className="price-text">{props.price}</p>
      </div>
    </div>
  );
};

export default Card;
