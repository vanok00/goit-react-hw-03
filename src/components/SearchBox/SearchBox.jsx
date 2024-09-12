import styles from "./SearchBox.module.css";

const SearchBox = ({ setValue }) => {
  return (
    <div>
      <form className={styles.searchBoxForm}>
        <label className={styles.labelForm}>
          <span>Find contacts by name</span>
          <input
            className={styles.inputSearchboxForm}
            name="username"
            type="text"
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBox;
