// import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import styles from "./App.module.css";
import contacts from "../../contacts.json";

export default function App() {
  return (
    <div className={styles.wholeContainer}>
      <h1 className={styles.book}>Phonebook</h1>
      <ContactForm />
      <SearchBox message="No feedback given yet" />
      <ContactList contacts={contacts} />
    </div>
  );
}
