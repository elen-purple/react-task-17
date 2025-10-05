import { useEffect, useState } from "react";
import { Section } from "./components/Section/Section";
import { Form } from "./components/Form/Form";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { nanoid } from "nanoid";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Title } from "./components/ContactsList/ContactsListStyled";

const App = () => {
  const [contacts, setContacts] = useState(
    getItem("contacts") ? getItem("contacts") : []
  );
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  useEffect(() => {
    if (!Object.keys(localStorage).includes("contacts")) {
      setItem("contacts", []);
    }
    setContacts(getItem("contacts"));
  }, []);

  useEffect(() => {
    setItem("contacts", contacts);
  }, [contacts]);

  const changeName = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const changeNumber = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  const changeFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const addContact = (e) => {
    e.preventDefault();
    const array = [...contacts];
    if (array.find((item) => item.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    array.push({
      id: nanoid(4),
      name: name,
      number: number,
    });
    setContacts(array);
    setName("");
    setNumber("");
  };

  const deleteContact = (e) => {
    if (e.target.dataset.action === "delete") {
      const array = [...contacts];
      array.splice(
        array.indexOf(
          array.find((item) => item.id === e.target.parentElement.id)
        ),
        1
      );

      setContacts(array);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Section title="Phonebook">
        <Form
          changeName={changeName}
          changeNumber={changeNumber}
          addContact={addContact}
          name={name}
          number={number}
        />
      </Section>
      <Section title="Contacts">
        <Title>Contacts</Title>
        <Filter filter={filter} changeValue={changeFilter} />
        <ContactsList
          deleteContact={deleteContact}
          filter={filter}
          contacts={contacts}
        />
      </Section>
    </>
  );
};

export default App;
