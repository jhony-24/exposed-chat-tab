import RoundButton from "@fb-components/RoundButton";
import Wrapper from "@fb-components/Wrapper";
import { FiMoreHorizontal } from "react-icons/fi";

const ButtonMoreAction = () => {
  return (
      <Wrapper flexNone>
        <RoundButton dimension="40px">
          <FiMoreHorizontal size={25} color="gray" />
        </RoundButton>
      </Wrapper>
  );
};

export default ButtonMoreAction;