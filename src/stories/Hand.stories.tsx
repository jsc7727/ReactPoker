import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../index.css";
import Hand from "./../components/Hand";
import styled from "@emotion/styled";

const Center = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export default {
  title: "Example/Hand",
  component: Hand,
  argTypes: {},
} as ComponentMeta<typeof Hand>;

const Template: ComponentStory<typeof Hand> = (args) => {
  return (
    <Center>
      <Hand {...args} />
    </Center>
  );
};

export const Primary = Template.bind({});
