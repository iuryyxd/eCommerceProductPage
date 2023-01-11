import styles from "./Thumb.module.scss";

interface ThumbProps {
  img: string;
  isActive: number;
  index: number;
  handleThumbActive: (a: number) => void;
}

export default function Thumb({ img, isActive, index, handleThumbActive }: ThumbProps) {
  return (
    <div
      className={`${styles.thumb} ${isActive === index && styles.active}`}
      onClick={() => handleThumbActive(index)}
    >
      <img src={img} alt="imagem de um tênis" />
    </div>
  );
}
