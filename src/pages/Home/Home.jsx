/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import "./Home.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import useProductsDetails from "../../utils/useProductsDetails";
import useOptionsChange from "../../utils/useOptionsChange";
import useSeachChange from "../../utils/useSearchChange";

const Home = () => {
  const [addToCartCount, setAddToCartCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // getting details
  const { products, filteredProducts, setFilteredProducts } =
    useProductsDetails();

  // Handling Search functionality
  const onChangeSearch = useSeachChange(products, setFilteredProducts);

  // option change
  const handleOptionChange = useOptionsChange(products, setFilteredProducts);

  return (
    <div>
      <Navbar
        addToCartCount={addToCartCount}
        totalPrice={totalPrice}
        handleSearch={onChangeSearch}
        handleOptionChange={handleOptionChange}
      />
      <div className="cards-container">
        {filteredProducts.map((details, idx) => {
          return (
            <Card
              key={idx}
              title={details.title}
              description={details.description}
              price={details.price}
              setAddToCartCount={setAddToCartCount}
              setTotalPrice={setTotalPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
