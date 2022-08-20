import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "./../index.css";
import Card from "./../components/Card";
import styled from "@emotion/styled";

const Center = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardRank: {
      control: { type: "radio", options: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    },
    rotate: { control: { type: "radio", options: [0, 45, 90, 135, 180] } },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <Center>
      <Card {...args} selectCard={() => {}} />
    </Center>
  );
};

export const Primary = Template.bind({});

// Primary.args = {
//   ...Primary.args,
//   label: "asdf",
// };
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
