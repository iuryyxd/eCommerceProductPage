import logo from "../../assets/logo.svg";
import { BsCart3 } from "react-icons/bs";
import avatar from "../../assets/image-avatar.png";
import styles from "./Header.module.scss";
import Cart from "../../Components/Cart";
import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CartCtx } from "../../Context/CartContext";

export default function Header() {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const { quantity } = useContext(CartCtx);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <AnimatePresence mode="wait">{openCart && <Cart />}</AnimatePresence>
        <div className={styles.header__left}>
          <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg" className={styles.header__menu}>
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <img src={logo} alt="Sneakers logo" />
          <nav>
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.header__right}>
          <div className={styles.header__cart}>
            {quantity !== 0 && <div>{quantity}</div>}
            <BsCart3 onClick={() => setOpenCart(!openCart)} />
          </div>
          <img
            src={avatar}
            alt="foto de uma pessoa"
            className={styles.header__avatar}
          />
        </div>
      </div>
    </header>
  );
}
