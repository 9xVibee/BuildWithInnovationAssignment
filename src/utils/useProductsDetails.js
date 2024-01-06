import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useProductsDetails() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

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

  return { products, filteredProducts, setFilteredProducts };
}

export default useProductsDetails;
