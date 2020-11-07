import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  width: 32px;
  height: 32px;
  fill: var(--logo);
  flex-shrink: 0;
`;
export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;
  > input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    transition: width 0.2s ease-out, color 0.2s ease-out;
    &:focus {
      width: 318px;
    }
  }
`;
