import FlexWrapper from "@fb-components/FlexWrapper";
import styled from "styled-components";

export const StyledRowItem = styled(FlexWrapper).attrs({
  align: "center",
})`
  padding: 10px;
  border-radius: 10px;
  margin: 10px 10px 0px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const StyledInputSearch = styled.input`
  background: none;
  outline: none;
  border-width: 0;
  width: 100%;
  margin-left: 5px;
`;