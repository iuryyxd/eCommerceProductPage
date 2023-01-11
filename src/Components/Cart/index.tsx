import styles from "./Cart.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartCtx } from "../../Context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import img from "../../assets/image-product-1-thumbnail.jpg";

export default function Cart() {
  const { quantity, setQuantity } = useContext(CartCtx);

  return (
    <motion.div
      className={styles.cart}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h1>Cart</h1>
      <div className={`${styles.cart__main} ${quantity === 0 && styles.empty}`}>
        {quantity === 0 ? (
          <b>Your cart is empty.</b>
        ) : (
          <div className={styles.cart__product}>
            <div className={styles.cart__productInfo}>
              <img src={img} alt="imagem de um tênis" />
              <div>
                <p className={styles.cart__productTitle}>Fall Limited Edition Sneakers</p>
                <p className={styles.cart__productPrice}>
                  $125.00 x {quantity} <span>${quantity * 125}.00</span>
                </p>
              </div>
              <FiTrash2 onClick={() => setQuantity(0)} />
            </div>

            <button>Checkout</button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
