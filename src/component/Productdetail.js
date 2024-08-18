import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Productdetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  // useEffect(() => {
  //   const filterProduct = items.filter((product) => product.id === id);
  //   setProduct(filterProduct[0]);

  //   const relatedProducts = items.filter(
  //     (suman) => suman.category === product.category
  //   );
  //   setRelatedProducts(relatedProducts);
  // }, [id, product.category]);

  useEffect(() => {
    // Find the product based on the ID
    const filterProduct = items.filter((product) => product.id === id);
    console.log('Filtered Product:', filterProduct);
    setProduct(filterProduct || {}); // Default to empty object if no product is found
  }, [id]);

  useEffect(() => {
    // Filter related products based on the product's category
    if (product.category) {
      const relatedProducts = items.filter((suman) => suman.category === product.category);
      setRelatedProducts(relatedProducts);
    }
  }, [product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Card element=", cart);
    toast.success("Item added on Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>

        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <h1 className="text-center">Related products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default Productdetail;
