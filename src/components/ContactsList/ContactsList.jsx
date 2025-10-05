import { ContactsItem } from "../ContactsItem/ContactsItem";
import { List } from "./ContactsListStyled";

export const ContactsList = ({ deleteContact, filter, contacts }) => {
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
