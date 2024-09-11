import styles from "./Contact.module.css";

export default function Contact({ contact }) {
  return (
    <div className={styles.container}>
      <p className={styles.contactName}>{contact.name}</p>
      <p className={styles.contactNumber}>{contact.number}</p>
    </div>
  );
}
