import { Input } from "./FilterStyled";
import { ContactsContext } from "../../context/ContactsContext";
import { useContext } from "react";

export const Filter = () => {
  const { changeFilter, filter } = useContext(ContactsContext);
  return (
    <label>
      <Input
        type="text"
        name="filter"
        placeholder="Anna Havrylova"
        onInput={changeFilter}
        value={filter}
      />
    </label>
  );
};
