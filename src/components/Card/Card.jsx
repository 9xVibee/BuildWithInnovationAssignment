/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({
  title = "Demo",
  description = "description",
  price = "000",
  setAddToCartCount,
  setTotalPrice,
}) => {
  return (
    <div className="card">
      <h1 className="card-heading">{title}</h1>
      <p className="description">{description.slice(0, 100)}</p>
      <p className="card-price">Price: ${price}</p>
      <button
        className="btn"
        onClick={() => {
          setAddToCartCount((prev) => prev + 1);
          setTotalPrice((prev) => prev + price);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
