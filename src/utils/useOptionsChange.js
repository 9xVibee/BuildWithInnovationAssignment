function useOptionsChange(products, setFilteredProducts) {
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
  return handleOptionChange;
}
export default useOptionsChange;
