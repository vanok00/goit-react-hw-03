import styles from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div>
      <form className={styles.searchBoxForm}>
        <label className={styles.labelForm}>
          <span>Find contacts by name</span>
          <input
            className={styles.inputSearchboxForm}
            name="username"
            type="text"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBox;
