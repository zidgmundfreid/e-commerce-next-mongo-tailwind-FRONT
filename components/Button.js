import styled, { css } from "styled-components";

export const ButtonStyle = css`
  font-family: "Poppins", sans-serif;
  background-color: #5542f6;
  border: 0;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.$block &&
    css`
      display: block;
    `}

  ${(props) =>
    props.$white &&
    !props.$outline &&
    css`
      background-color: #fff;
      color: #000;
      border: 1px solid #fff;
    `}

  ${(props) =>
    props.$white &&
    props.$outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}

    
  ${(props) =>
    props.$black &&
    !props.$outline &&
    css`
      background-color: #000;
      color: #fff;
      border: 1px solid #000;
    `}

  ${(props) =>
    props.$black &&
    props.$outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 1px solid #000;
    `}


${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
  ${(props) =>
    props.$primary &&
    !props.$outline &&
    css`
      background-color: #5542f6;
      color: #fff;
      border: 1px solid #5542f6;
    `}

  ${(props) =>
    props.$primary &&
    props.$outline &&
    css`
      background-color: transparent;
      color: #5542f6;
      border: 1px solid #5542f6;
    `}
`;
const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
