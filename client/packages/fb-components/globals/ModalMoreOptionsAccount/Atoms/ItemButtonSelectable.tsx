import FlexWrapper from "@fb-components/FlexWrapper";
import RaisedButton from "@fb-components/RaisedButton";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RoundButtonIcon } from "./elements";

type ItemButtonSelectableProps = {
    onClick : () => void,
    icon? : React.JSXElementConstructor<{size:string}>
    hideNextArrow ?: boolean;
};

const ItemButtonSelectable: React.FC<ItemButtonSelectableProps> = ({icon:IconComponent,...props}) => {
  return (
    <Wrapper m="10px 0">
      <RaisedButton fluid onClick={props.onClick}>
        <FlexWrapper align="center" w="100%">
          {IconComponent && <RoundButtonIcon>
            <IconComponent size="20px" />
          </RoundButtonIcon>}
          <Wrapper m="0 auto 0 10px">
              <TextLabel weight textColor="vgTextBlackAlpha30" textAlign="left">{props.children}</TextLabel>
          </Wrapper> 
          {!props.hideNextArrow && (
            <IoIosArrowForward size="22px" />
          )}
        </FlexWrapper>
      </RaisedButton>
    </Wrapper>
  );
};

export default ItemButtonSelectable;