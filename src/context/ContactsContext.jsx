import { createContext } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { getItem } from "../services/getItem";

export const ContactsContext = createContext(null);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(
    getItem("contacts") ? getItem("contacts") : []
  );
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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
    <ContactsContext.Provider
      value={{
        contacts,
        setContacts,
        addContact,
        deleteContact,
        filter,
        setFilter,
        name,
        setName,
        number,
        setNumber,
        changeName,
        changeNumber,
        changeFilter,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
