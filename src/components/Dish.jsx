import styles from "./Dish.module.css";

function Dish({ tittel, pris, ingredienser, kategori, bilde }) {
  return (
    <article className={styles.card}>
      <img src={bilde} alt={tittel} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.category}>{kategori}</span>
          <span className={styles.price}>{pris}</span>
        </div>

        <h2 className={styles.title}>{tittel}</h2>

        <p className={styles.label}>Ingredienser</p>
        <p className={styles.ingredients}>{ingredienser}</p>
      </div>
    </article>
  );
}

export default Dish;
