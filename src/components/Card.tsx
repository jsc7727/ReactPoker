import React from "react";
import { CardStyle } from "./style/Card.style";

type CardProps = {
  index: number;
  cardRank?: string;
  rotate?: number;
  translateX?: number;
  translateY?: number;
  selectCard: (index: number) => void;
};

const Card = ({
  selectCard,
  index,
  cardRank = "",
  rotate = 0,
  translateX = 0,
  translateY = 0,
}: CardProps) => {
  const [translateStateX, setTranslateStateX] = React.useState<number>(0);
  const [translateStateY, setTranslateStateY] = React.useState<number>(0);
  const [rotateState, setRotateState] = React.useState<number>(0);
  const onClickHandler = (e: React.SyntheticEvent) => {
    const delay = (ms: number) =>
      new Promise((resolve) =>
        setTimeout(() => {
          setTranslateStateY(0);
          setRotateState(0);
          resolve(ms);
        }, ms)
      );
    setTranslateStateY(-5);
    setRotateState(-(rotate || 0));
    delay(1000);
    selectCard(index);
  };
  return (
    <CardStyle
      key={Math.random()}
      onClick={onClickHandler}
      className="card"
      cardRank={cardRank}
      translateX={translateX + translateStateX}
      translateY={translateY + translateStateY}
      rotate={rotate + rotateState}
    >
      {cardRank}
    </CardStyle>
  );
};

export default Card;
