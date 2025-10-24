import { ContactsContext } from "../../context/ContactsContext";
import { useContext } from "react";
import { Btn } from "./ButtonStyled";

export const Button = () => {
  const { deletedItem, restoreContact } = useContext(ContactsContext);
  console.log(deletedItem.current);
  return (
    <>
      {deletedItem.current ? (
        <Btn onClick={restoreContact}>Restore</Btn>
      ) : (
        <></>
      )}
    </>
  );
};
