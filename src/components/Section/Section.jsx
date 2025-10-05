import { Container, Sect } from "./SectionStyled";

export const Section = ({ children }) => {
  return (
    <Sect>
      <Container>{children}</Container>
    </Sect>
  );
};
