import styles from "./Contact.module.css";

export const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};
