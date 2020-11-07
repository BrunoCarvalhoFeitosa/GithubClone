import React from "react";
import { Container, GithubLogo, SearchForm } from "./style";

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Enter username ou repository..." />
      </SearchForm>
    </Container>
  );
};

export default Header;
