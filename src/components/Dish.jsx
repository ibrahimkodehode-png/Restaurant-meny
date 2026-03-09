import styles from "./Dish.module.css";

function Dish({ tittel, pris, ingredienser, kategori }) {
  return (
    <article className={styles.card}>
      <div className={styles.topRow}>
        <span className={styles.category}>{kategori}</span>
        <span className={styles.price}>{pris}</span>
      </div>

      <h2 className={styles.title}>{tittel}</h2>

      <p className={styles.label}>Ingredienser</p>
      <p className={styles.ingredients}>{ingredienser}</p>
    </article>
  );
}

export default Dish;
