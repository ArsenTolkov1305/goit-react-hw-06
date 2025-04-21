import styles from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder="Search contacts..."
      />
    </div>
  );
};
