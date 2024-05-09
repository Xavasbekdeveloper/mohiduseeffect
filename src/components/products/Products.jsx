import React, { useEffect, useState } from "react";
import "./Products.scss";
import axios from "../../api";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import Modal from "../modal/Modal";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(1);
  const limitCount = 6;
  const [openModal, setOpenModal] = useState(null);
  const [load, setLoading] = useState(false);

  document.body.style.overflow = openModal ? "hidden" : "auto";

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products", {
        params: {
          limit: limitCount * count,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [count]);

  const card = products?.map((product) => {
    let res = [];

    for (let i = 0; i < parseInt(product.rating); i++) {
      res.push(<IoStar />);
    }
    if (product.rating % 1 > 0.5) {
      res.push(<IoIosStarHalf />);
    }
    for (let i = Math.round(product.rating); i < 5; i++) {
      res.push(<IoStarOutline />);
    }

    return (
      <div key={product.id} className="products__card">
        <div className="products__card__img">
          <img
            onClick={() => setOpenModal(product)}
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div className="products__card__info">
          <div className="products__card__btns">
            <button className="products__card__btn">
              <PiShoppingCartSimpleFill />
            </button>
            <button className="products__card__btn">
              <FaHeart />
            </button>
          </div>
          <h3 className="products__card__title">{product.title}</h3>
          <p className="products__card__text">{product.category}</p>
          <div className="products__card__bottom">
            <span className="products__card__price">${product.price}.00</span>
            <div>{res}</div>
          </div>
        </div>
      </div>
    );
  });

  let loading = (
    <div className="loading__card">
      <div className="loading__img"></div>
      <div className="loading__info">
        <div className="loading__text"></div>
        <div className="loading__text"></div>
        <div className="loading__text"></div>
      </div>
    </div>
  );

  return (
    <>
      <section className="products">
        <div className="container products__container">
          <p className="products__text">Find your favourite smart watch.</p>
          <h2 className="products__title">Our Latest Products</h2>

          <div className="products__cards">{card}</div>

          {load ? (
            <div className="loading">
              <div className="loading__cards">
                {loading} {loading} {loading} {loading} {loading} {loading}
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="products__btns">
            <button
              className="products__btn"
              onClick={() => setCount((p) => p + 1)}
            >
              View More
            </button>
          </div>
        </div>
      </section>
      {openModal ? (
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Products;
