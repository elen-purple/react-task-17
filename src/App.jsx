import { useEffect, useState, useContext } from "react";
import { Section } from "./components/Section/Section";
import { Form } from "./components/Form/Form";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Title } from "./components/ContactsList/ContactsListStyled";
import { ContactsProvider, ContactsContext } from "./context/ContactsContext";
import { getItem } from "./services/getItem";
import { setItem } from "./services/setItem";

const AppContent = () => {
  const { contacts, setContacts } = useContext(ContactsContext);

  useEffect(() => {
    if (!Object.keys(localStorage).includes("contacts")) {
      setItem("contacts", []);
    }
    setContacts(getItem("contacts"));
  }, []);

  useEffect(() => {
    setItem("contacts", contacts);
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Title>Contacts</Title>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

const App = () => {
  return (
    <ContactsProvider>
      <GlobalStyle />
      <AppContent />
    </ContactsProvider>
  );
};

export default App;
