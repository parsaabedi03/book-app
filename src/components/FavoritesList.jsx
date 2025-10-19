import styles from "./FavoritesList.module.css";

function FavoritesList({ favorites }) {
  return (
    <>
      {!!favorites.length && (
        <div className={styles.favoritesContainer}>
          <p className={styles.title}>Favorites</p>
          {favorites.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FavoritesList;
