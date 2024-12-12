import styles from "../styles/footer.module.css";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>
        <span>PokeNext</span> &copy; 2024
      </p>
    </footer>
  );
}
