import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { items } from "./Data";
import Product from "./Product";

const Searchitem = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };
    filterData();
  }, [term]);

  return <Product cart={cart} setCart={setCart} items={filterData} />;
};

export default Searchitem;
