import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import styles from "./App.module.css";
import InContacts from "../../contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : InContacts;
  });
  const [searchValue, setSearchValue] = useState("");

  const filtredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleDeleteContacts = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.wholeContainer}>
      <h1 className={styles.book}>Phonebook</h1>
      <ContactForm />
      <SearchBox setValue={setSearchValue} />
      <ContactList
        contacts={filtredContacts}
        handleDeleteContacts={handleDeleteContacts}
      />
    </div>
  );
}
