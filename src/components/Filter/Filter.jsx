import { Input } from "./FilterStyled";

export const Filter = ({ changeFilter, filter }) => {
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
