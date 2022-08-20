import styled from "@emotion/styled";

type CardStyleProps = {
  rotate?: number;
  translateX?: number;
  translateY?: number;
  cardRank?: string;
};

export const CardStyle = styled("li")<CardStyleProps>`
  list-style: none;
  width: 3.3em;
  height: 4.6em;
  border: 1px solid gray;
  border-radius: 0.3em;
  padding: 0.25em;
  margin: 0 0.5em 0.5em 0;
  position: relative;
  color: var(
    ${(props) =>
      props.color === "red" ? "--card--font--red" : "--card--font--black"}
  );
  background-color: var(--card--front--color);
  background-image: ${(props) => {
    return props.cardRank === ""
      ? `url(
          "data:image/gif;base64,R0lGODlhJAAkAJEAAOjFsezdztOKbL5QKCH5BAAAAAAALAAAAAAkACQAAAL/HC4RAqm/mmLHyHmAbczB11Ea8ombJKSgKo6Z17pXFznmS1JptiX0z3vVhpEKDoUIkoa0olGIUeZUk1RI6Yn2mh/FDAt6frOrRRTqXPpsVLYugzxaVy+YcBdnoWPZOT0E4eckQtZFZBjWoHixQFWl6Nhol6R2p1Okt5TGaEWZA6fjiMdhZgPHeWrTWGVq+jTZg1HYyAEWKLYzmyiGKoUimilz+YYryyTlg5RcDJSAbNx0Q7lMcbIGEyzTK8zVdfVaImzs/QV+prYqWWW2ObkoOApM/Em/rUlIm7fijs8a2EEKEaZ3AsMUgneEU6RcpJbZ27aGHkAO2Ors8xQH1IR0Bn5YnOtVAAA7"
        )`
      : "none";
  }};
  box-shadow: 0.2em 0.2em 0.5em var(--card--shadow--color);
  transform: translate(
      ${(props) => (props.translateX || 0).toString() + "em"},
      ${(props) => (props.translateY || 0).toString() + "em"}
    )
    rotate(${(props) => (props.rotate || 0).toString() + "deg"});
`;
