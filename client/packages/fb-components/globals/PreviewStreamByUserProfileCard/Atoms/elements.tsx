import Card from "@fb-components/Card";
import SquareImage from "@fb-components/SquareImage";
import TextLabel from "@fb-components/TextLabel";
import styled, { css } from "styled-components";

export const ImageStreamUser = styled(SquareImage)`
  border-radius: 5px 5px 0 0;
`;

export const TextLabelStreamUser = styled(TextLabel)<{ isTitle?: boolean }>`
  color: ${(props) => props.theme.colors.vgTextBlack};
  font-size: ${(props) => props.theme.fontSizes[200]};
  display: block;
  padding: 5px 0;
  ${(props) =>
    props.isTitle &&
    css`
      font-weight: bold;
      font-size: ${(props) => props.theme.fontSizes[300]};
    `}
`;

export const CardWrapperDetailStreamUser = styled.div`
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardStreamUser = styled(Card)`
  margin: auto;
  display: flex;
  flex-direction: column;
`;