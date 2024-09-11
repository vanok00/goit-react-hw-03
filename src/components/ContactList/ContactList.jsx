import ContactList from "../ContactList/ContactList";
import styles from "./ContactList.module.css";
export default function FriendList({ contacts }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactList contact={contact} />
        </li>
      ))}
    </ul>
  );
}
