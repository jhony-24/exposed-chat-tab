import { styled } from "../lib/stitches.config";
import TopicCard from "./TopicCard";

const TopicListCardGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
});

type Topic = {
  name: string;
  icon: string;
  description: string;
};

type ListOfHelpTopicListProps = {
  data: Topic[];
};

const ListOfHelpTopicList = (props: ListOfHelpTopicListProps) => {
  return (
    <TopicListCardGrid>
      {props.data.map((topic, index) => (
        <TopicCard topic={topic} key={index} />
      ))}
    </TopicListCardGrid>
  );
};

export default ListOfHelpTopicList;
