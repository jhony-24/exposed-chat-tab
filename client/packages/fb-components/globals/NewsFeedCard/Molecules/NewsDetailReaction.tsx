import FlexWrapper from "@fb-components/FlexWrapper";
import StringReactions, { StringReactionType } from "@fb-components/StringReactions";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";

type NewsDetailReactionProps = {
  reactions ?: StringReactionType[];
  totalReactions? : number;
  textTotalDetail? : string;
} 

const NewsDetailReaction = ({reactions, totalReactions, textTotalDetail }:NewsDetailReactionProps) => {
  return (
    <Wrapper p="5px 10px">
      <FlexWrapper justify="space-between" align="center">
        <FlexWrapper align="center">
          { reactions && <StringReactions reactions={reactions}/>}
          <TextLabel textSize={300}>{totalReactions}</TextLabel>
        </FlexWrapper>
        <Wrapper>
        <TextLabel textSize={300}>{textTotalDetail}</TextLabel>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default NewsDetailReaction;
