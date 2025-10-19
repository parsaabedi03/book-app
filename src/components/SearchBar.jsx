import styles from "./SearchBar.module.css";

import { Search } from "lucide-react";

function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>
        <Search color="#fff" size={25} strokeWidth={2} />
      </button>
    </div>
  );
}

export default SearchBar;
