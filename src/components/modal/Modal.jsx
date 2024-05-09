import React from "react";
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";

const Modal = ({ openModal, setOpenModal }) => {
  const { thumbnail, title, brand, category, description, price, rating } =
    openModal;

  return (
    <>
      <div className="modal">
        <div
          className="modal__overlay"
          onClick={() => setOpenModal(null)}
        ></div>
        <div className="modal__product">
          <div className="modal__product__img">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="modal__product__info">
            <h2 className="modal__product__title">{title}</h2>
            <p className="modal__product__text">{brand}</p>
            <p className="modal__product__text">{category}</p>
            <p className="modal__product__text">{description}</p>
            <p className="modal__product__text">${price}.00 </p>
            <button
              className="modal__product__btn"
              onClick={() => setOpenModal(null)}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
