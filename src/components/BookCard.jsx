import styles from "./BookCard.module.css";

import { Heart } from "lucide-react";

function BookCard({ data, handleLike, likedBook }) {
  const { id, image, title, author, language, pages } = data;

  return (
    <div className={styles.bookCard}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.details}>
          <span>{language}</span>
          <span>{pages} pages</span>
        </p>
      </div>
      <button
        onClick={() => {
          handleLike(id);
          console.log(likedBook);
        }}
      >
        <Heart className={likedBook.includes(id) ? styles.liked : ""} />
      </button>
    </div>
  );
}

export default BookCard;
