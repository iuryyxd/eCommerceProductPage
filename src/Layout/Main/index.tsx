import styles from "./Main.module.scss";
import minusImg from "../../assets/icon-minus.svg";
import plusImg from "../../assets/icon-plus.svg";
import cartImg from "../../assets/icon-cart.svg";
import { thumbs, productsImages } from "../../Utils/Thumbs";
import Thumb from "../../Components/Thumb";
import { useContext, useState } from "react";
import { CartCtx } from "../../Context/CartContext";
import { LightboxCtx } from "../../Context/LightboxContext";

export default function Main() {
  const [thumbActive, setThumbActive] = useState<number>(0);
  const [productQuantity, setProductQuantity] = useState<number>(0);
  const { quantity, setQuantity } = useContext(CartCtx);
  const { openLightbox, setOpenLightbox } = useContext(LightboxCtx);

  const handleThumbActive = (i: number) => {
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
            onClick={() => setOpenLightbox(!openLightbox)}
          />

          <div
            className={styles.main__previousButton}
            onClick={() => thumbActive !== 0 && setThumbActive(thumbActive - 1)}
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={styles.main__nextButton}
            onClick={() => thumbActive !== 3 && setThumbActive(thumbActive + 1)}
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>

          <div className={styles.productImages__select}>
            {thumbs.map((thumb, index) => (
              <Thumb
                key={crypto.randomUUID()}
                img={thumb}
                index={index}
                isActive={thumbActive}
                handleThumbActive={handleThumbActive}
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
          <div className={styles.productInfo__prices}>
            <div className={styles.productInfo__price}>
              <p>$125.00</p>
              <small>50%</small>
            </div>
            <p className={styles.productInfo__oldPrice}>$250.00</p>
          </div>
          <div className={styles.productInfo__buttons}>
            <div className={styles.quantityButton}>
              <button
                onClick={() => {
                  productQuantity !== 0 &&
                    setProductQuantity(productQuantity - 1);
                }}
              >
                <img src={minusImg} alt="minus image" />
              </button>
              <p>{productQuantity}</p>
              <button onClick={() => setProductQuantity(productQuantity + 1)}>
                <img src={plusImg} alt="plus image" />
              </button>
            </div>
            <button
              className={styles.cartButton}
              onClick={() => setQuantity((prev) => prev + productQuantity)}
            >
              <img src={cartImg} alt="cart" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
