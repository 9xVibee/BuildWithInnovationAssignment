/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [addToCartCount, setAddToCartCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Protect the home page if someone try to access it wihtout login
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token") !== null;
    if (!isLoggedIn) return navigate("/login");

    // fetching all products
    fetchAllProducts();
  }, []);

  // function to fetch the data!
  const fetchAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => {
        setProducts(products);
        setFilteredProducts(products);
      });
  };

  // Handling Search functionality
  const onChangeSearch = (searched) => {
    const filteredData = products.filter(
      (product) =>
        product.title.toLowerCase().indexOf(searched.toLocaleLowerCase()) !== -1
    );

    setFilteredProducts(filteredData);
  };

  // Handling filtering based on price
  const handleOptionChange = (e) => {
    let minValue = 0,
      target = e.target.value;
    if (target === "10 & above") minValue = 10;
    else if (target === "100 & above") minValue = 100;
    else if (target === "500 & above") minValue = 500;
    else if (target === "1000 & above") minValue = 1000;
    else if (target === "1500 & above") minValue = 1500;

    const filteredData = products.filter(
      (product) => product.price >= minValue
    );
    setFilteredProducts(filteredData);
  };

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
