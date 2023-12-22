/* eslint-disable react/prop-types */
import "./Navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Navbar = ({
  addToCartCount,
  totalPrice,
  handleSearch,
  handleOptionChange,
}) => {
  return (
    <div className="navbar">
      <h1 className="heading-nav not-hide">
        Assignment by Build With Innovation PVT.
      </h1>
      <h1 className="heading-nav hide">Assignment by BWI PVT.</h1>
      <div className="navbar-search-cart-container">
        <div className="search-container">
          <h1 className="heading-nav search-head">Assignment by BWI PVT.</h1>
          <div className="input-icon-container">
            <input
              type="text"
              placeholder="Search...."
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button>
              <IoSearch />
            </button>
            <div className="cart-container">
              <div className="cart-count">{addToCartCount.length}</div>
              <MdOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className="price">
          <h3>Total Price : {totalPrice}</h3>
          <select placeholder="select" onChange={handleOptionChange}>
            <option>Select</option>
            <option>10 & above</option>
            <option>100 & above</option>
            <option>500 & above</option>
            <option>1000 & above</option>
            <option>1500 & above</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
