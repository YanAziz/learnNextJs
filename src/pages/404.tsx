import styles from "@/styles/404.module.scss";

const Costum404 = () => {
  return (
    <div className={styles.error}>
      <img src="/not_found.png" alt="404" className={styles.error__image} />
      <div>Halaman tidak ditemukan</div>
    </div>
  );
};

export default Costum404;
