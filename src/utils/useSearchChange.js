function useSeachChange(products, setFilteredProducts) {
  const onChangeSearch = (searched) => {
    const filteredData = products.filter(
      (product) =>
        product.title.toLowerCase().indexOf(searched.toLowerCase()) !== -1
    );

    setFilteredProducts(filteredData);
  };

  return onChangeSearch;
}

export default useSeachChange;
