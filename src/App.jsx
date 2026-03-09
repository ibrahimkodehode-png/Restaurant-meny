import { useState } from "react";
import { meny } from "./data/meny";
import Menu from "./components/Menu";
import styles from "./App.module.css";

function App() {
  const [visMeny, setVisMeny] = useState(false);

  return (
    <main className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Restaurantens meny</p>
          <h1 className={styles.title}>Velkommen til vår digitale meny</h1>
          <p className={styles.subtitle}>Trykk på knappen for å åpne menyen.</p>

          <button
            className={styles.menuButton}
            onClick={() => setVisMeny(!visMeny)}
          >
            {visMeny ? "Skjul meny" : "Se meny"}
          </button>
        </header>

        {visMeny && <Menu dishes={meny} />}
      </div>
    </main>
  );
}

export default App;
