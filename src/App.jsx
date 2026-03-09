import { meny } from "./data/meny";
import Menu from "./components/Menu";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Restaurantens meny</p>
          <h1 className={styles.title}>Velkommen til vår digitale meny</h1>
          <p className={styles.subtitle}>
            Utforsk våre forretter, hovedretter og desserter.
          </p>
        </header>

        <Menu dishes={meny} />
      </div>
    </main>
  );
}

export default App;
