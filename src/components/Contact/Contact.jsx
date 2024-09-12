import styles from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact }) {
  return (
    <>
      <div className={styles.pers}>
        <IoPersonSharp /> <p className={styles.contactName}>{contact.name}</p>
        <FaPhoneAlt /> <p className={styles.contactNumber}>{contact.number}</p>
      </div>
      <button className={styles.addButton} type="submit">
        Delete
      </button>
    </>
  );
}
