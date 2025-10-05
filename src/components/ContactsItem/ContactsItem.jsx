import { Component } from "react";
import { Button, Item, Num, Title } from "./ContactsItemStyled";

export const ContactsItem = ({ contact }) => {
  return (
    <Item id={contact.id}>
      <div>
        <Title>{contact.name}</Title>
        <Num>{contact.number}</Num>
      </div>
      <Button data-action="delete" type="button">
        Delete
      </Button>
    </Item>
  );
};
