import styles from "./Contact.module.css";

export default function Contact({ contact }) {
  return (
    <>
      <p className={styles.contactName}>{contact.name}</p>
      <p className={styles.contactNumber}>{contact.number}</p>
    </>
  );
}
