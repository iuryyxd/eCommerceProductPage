import styles from "./Main.module.scss";
import minusImg from "../../assets/icon-minus.svg";
import plusImg from "../../assets/icon-plus.svg";
import cartImg from "../../assets/icon-cart.svg";
import { thumbs, productsImages } from "../../Utils/Thumbs";
import Thumb from "../../Components/Thumb";
import { useContext, useState } from "react";
import { CartCtx } from "../../Context/CartContext";

export default function Main() {
  const [thumbActive, setThumbActive] = useState<number>(0);
  const [productQuantity, setProductQuantity] = useState<number>(0)
  const { quantity, setQuantity } = useContext(CartCtx);

  const hundleThumbActive = (i: number) => {
    setThumbActive(i);
  };

  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__productImage}>
          <img
            src={productsImages[thumbActive]}
            alt=""
            className={styles.productImage}
          />
          <div className={styles.productImages__select}>
            {thumbs.map((thumb, index) => (
              <Thumb
                img={thumb}
                index={index}
                isActive={thumbActive}
                handleThumbActive={hundleThumbActive}
              />
            ))}
          </div>
        </div>

        <div className={styles.main__productInfo}>
          <p className={styles.productInfo__company}>SNEAKER COMPANY</p>
          <h1 className={styles.productInfo__title}>
            Fall Limited Edition Sneakers
          </h1>
          <p className={styles.productInfo__desc}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className={styles.productInfo__price}>
            <p>$125.00</p>
            <small>50%</small>
          </div>
          <p className={styles.productInfo__oldPrice}>$250.00</p>
          <div className={styles.productInfo__buttons}>
            <div className={styles.quantityButton}>
              <button
                onClick={() => {
                  productQuantity !== 0 && setProductQuantity(productQuantity - 1);
                }}
              >
                <img src={minusImg} alt="minus image" />
              </button>
              <p>{productQuantity}</p>
              <button onClick={() => setProductQuantity(productQuantity + 1)}>
                <img src={plusImg} alt="plus image" />
              </button>
            </div>
            <button className={styles.cartButton} onClick={() => setQuantity((prev) => prev + productQuantity)}>
              <img src={cartImg} alt="cart" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
