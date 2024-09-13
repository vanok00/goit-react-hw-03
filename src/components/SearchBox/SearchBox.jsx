import styles from "./SearchBox.module.css";

const SearchBox = ({ setValue }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.labelForm}>
        <span>Find contacts by name</span>
        <input
          className={styles.inputSearchboxForm}
          name="username"
          type="text"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter  your presumptive name"
        />
      </label>
    </div>
  );
};

export default SearchBox;
