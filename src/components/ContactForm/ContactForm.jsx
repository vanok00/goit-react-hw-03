import styles from "./Contactform.module.css";

const ContactForm = () => {
  return (
    <div>
      <form className={styles.contactForm}>
        <label className={styles.labelForm}>
          <span>Name:</span>
          <input
            className={styles.inputContactForm}
            name="username"
            type="text"
          />
        </label>
        <label className={styles.labelForm}>
          <span>Number:</span>
          <input
            className={styles.inputContactForm}
            type="tel"
            name="number"
          ></input>
        </label>
        <button className={styles.addButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
