import React from "react";
import Card from "./Card";
import { HandStyle } from "./style/Hand.style";
import { flushSync } from "react-dom";

type HandProps = {
  handCount: number;
};
const Hand = ({ handCount }: HandProps) => {
  const [myHand, setMyHand] = React.useState<Array<string>>(
    new Array(handCount).fill("")
  );

  const selectCard = async (index: number) => {
    const delay = (ms: number) =>
      new Promise((resolve) =>
        setTimeout(() => {
          setMyHand((props) => {
            if (props.length === 1) return [];
            const test = [...props.slice(0, index), ...props.slice(index + 1)];
            console.log(test);
            return test;
          });
          resolve(ms);
        }, ms)
      );
    delay(1000);
  };

  const centerRotateIdx = +((myHand.length - 1) / 2).toFixed(2);
  return (
    <HandStyle>
      {myHand.map((hand, idx) => (
        <Card
          selectCard={selectCard}
          index={idx}
          cardRank={hand}
          translateX={(centerRotateIdx - idx) * 3.5}
          translateY={
            Math.abs(centerRotateIdx - idx) *
            Math.abs(centerRotateIdx - idx) *
            0.07
          }
          rotate={-(centerRotateIdx - idx) * 10}
        ></Card>
      ))}
    </HandStyle>
  );
};

export default Hand;
