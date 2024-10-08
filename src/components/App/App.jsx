import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import styles from "./App.module.css";

export default function App() {
  const InContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : InContacts;
  });
  const [searchValue, setSearchValue] = useState("");

  const filtredContacts = contacts.filter((contact) => {
    return (
      contact.name &&
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const handleAddContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const handleDeleteContacts = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className={styles.book}>Phonebook</h1>
      <ContactForm handleAddContacts={handleAddContacts} />
      <SearchBox value={searchValue} setValue={setSearchValue} />
      <ContactList
        contacts={filtredContacts}
        handleDeleteContacts={handleDeleteContacts}
      />
    </div>
  );
}
