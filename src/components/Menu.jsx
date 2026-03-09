import Dish from "./Dish";
import styles from "./Menu.module.css";

function Menu({ dishes }) {
  return (
    <section className={styles.menuGrid}>
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          tittel={dish.tittel}
          pris={dish.pris}
          ingredienser={dish.ingredienser}
          kategori={dish.kategori}
          bilde={dish.bilde}
        />
      ))}
    </section>
  );
}

export default Menu;
