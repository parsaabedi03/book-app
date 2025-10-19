import { useState } from "react";

import { books as booksData } from "./constants/mockData";

import Layout from "./layouts/Layout";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import FavoritesList from "./components/FavoritesList";

function App() {
  const [books, setBooks] = useState(booksData);
  const [favorites, setFavorites] = useState([]);
  const [likedBook, setLikedBook] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search) {
      setBooks(booksData);
      return;
    }

    const newData = booksData.filter((book) => {
      const title = book.title.trim().toLowerCase();
      const userSearch = search.trim().toLowerCase();
      return title.includes(userSearch);
    });
    setBooks(newData);
  };

  const handleLike = (id) => {
    const foundBook = favorites.find((fav) => fav.id === id);

    if (foundBook) {
      const bookToDelete = favorites.filter((fav) => fav.id !== id);
      const deleteLike = likedBook.filter((like) => like !== id);
      setFavorites(bookToDelete);
      setLikedBook(deleteLike);
    } else {
      const bookToAdd = books.find((book) => book.id === id);
      setFavorites((prevFavs) => [...prevFavs, bookToAdd]);
      setLikedBook((prevLikes) => [...prevLikes, id]);
    }
  };

  return (
    <Layout>
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div style={{ display: "flex" }}>
        <BookList data={books} handleLike={handleLike} likedBook={likedBook} />
        <FavoritesList favorites={favorites} />
      </div>
    </Layout>
  );
}

export default App;
