import BookCard from "./BookCard";

function BookList({ data, handleLike, likedBook }) {
  return (
    <div style={{ width: "100%" }}>
      {data.length ? (
        data.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handleLike={handleLike}
            likedBook={likedBook}
          />
        ))
      ) : (
        <p>There is nothing to show</p>
      )}
    </div>
  );
}

export default BookList;
