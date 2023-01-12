import styles from "./Menu.module.scss";
import { motion } from "framer-motion";

interface MenuProps {
  handleCloseMenu: () => void;
}

export default function Menu({ handleCloseMenu }: MenuProps) {
  return (
    <motion.div
      className={styles.menu}
      initial={{ opacity: 0, x: -window.innerWidth }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -window.innerWidth }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="14"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleCloseMenu}
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#fff"
          fillRule="evenodd"
        />
      </svg>
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
    </motion.div>
  );
}
