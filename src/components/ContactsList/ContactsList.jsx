import { ContactsItem } from "../ContactsItem/ContactsItem";
import { List } from "./ContactsListStyled";
import { ContactsContext } from "../../context/ContactsContext";
import { useContext } from "react";

export const ContactsList = () => {
  const { deleteContact, contacts, filter } = useContext(ContactsContext);
  return (
    <>
      <List onClick={deleteContact}>
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <ContactsItem key={contact.id} contact={contact} />
          ))}
      </List>
    </>
  );
};
