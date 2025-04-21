import { Contact } from "../Contact/Contact";
import styles from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};
