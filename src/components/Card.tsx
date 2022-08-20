import React from "react";
import { CardStyle } from "./style/Card.style";

type CardProps = {
  index: number;
  cardRank: string;
  rotate?: number;
  translateX?: number;
  translateY?: number;
  selectCard: (index: number) => void;
};

const Card = ({
  selectCard,
  index,
  cardRank,
  rotate,
  translateX,
  translateY,
}: CardProps) => {
  const [translateStateX, setTranslateStateX] = React.useState<
    number | undefined
  >(0);
  const [translateStateY, setTranslateStateY] = React.useState<
    number | undefined
  >(0);
  const [rotateState, setRotateState] = React.useState<number | undefined>(0);
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
      translateX={(translateX || 0) + (translateStateX || 0)}
      translateY={(translateY || 0) + (translateStateY || 0)}
      rotate={(rotate || 0) + (rotateState || 0)}
    >
      {cardRank}
    </CardStyle>
  );
};

export default Card;
