import styles from "./Lightbox.module.scss";
import iconClose from "../../assets/icon-close.svg";
import iconNext from "../../assets/icon-next.svg";
import iconPrevious from "../../assets/icon-previous.svg";
import { thumbs, productsImages } from "../../Utils/Thumbs";
import Thumb from "../Thumb";
import { useContext, useEffect, useState } from "react";
import { LightboxCtx } from "../../Context/LightboxContext";

export default function Lightbox() {
  const [thumbActive, setThumbActive] = useState<number>(0);

  const handleThumbActive = (i: number) => {
    setThumbActive(i);
  };

  const { openLightbox, setOpenLightbox } = useContext(LightboxCtx);

  return (
    <>
      {openLightbox && window.innerWidth > 920 && (
        <>
          <div className={styles.lightbox}></div>
          <div className={styles.lightbox__container}>
            <svg
              className={styles.lightbox__closeButton}
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setOpenLightbox(!openLightbox)}
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
            <div className={styles.lightbox__mainImage}>
              <img
                src={productsImages[thumbActive]}
                alt="foto de um tênis"
                className={styles.lightbox__image}
              />
              <div
                className={styles.lightbox__previousButton}
                onClick={() =>
                  thumbActive !== 0 && setThumbActive(thumbActive - 1)
                }
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
                className={styles.lightbox__nextButton}
                onClick={() =>
                  thumbActive !== 3 && setThumbActive(thumbActive + 1)
                }
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
            </div>
            <div className={styles.lightbox__thumbs}>
              {thumbs.map((thumb, index) => (
                <Thumb
                  key={crypto.randomUUID()}
                  index={index}
                  img={thumb}
                  isActive={thumbActive}
                  handleThumbActive={handleThumbActive}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
