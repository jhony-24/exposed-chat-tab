import React from "react";
import faker from "faker";
import PreviewStories from "@fb-components/PreviewStories";
import HistoryUserItem from "@fb-components/PreviewStories/Atoms/HistoryUserItem";

const data = Array(4)
  .fill(0)
  .map((e, i) => ({
    user: {
      avatar: faker.random.image(),
      username:
        faker.name.firstName() +
        " " +
        faker.name.lastName() +
        " " +
        faker.name.lastName(),
    },
    image: faker.random.image,
  }));


export default () => {
  return (
    <PreviewStories
      data={data}
      userAddController={
        <HistoryUserItem
          username={faker.name.firstName()}
          avatar={faker.image.people()}
        />
      }
    >
      {(current, index) => <PreviewStories.Item key={index} {...current} />}
    </PreviewStories>
  );
};