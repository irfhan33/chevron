import React, { useState, useRef } from "react";
import styled from "styled-components";
function Accordion({ content, title }) {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setHeight(active === "active" ? "0px" : "auto");
  };
  return (
    <AccordionStyled>
      <button className={`${active}`} onClick={toggleAccordion}>
        <p>{title}</p>
      </button>
      <Content max={height}>
        <div>{content}</div>
      </Content>
    </AccordionStyled>
  );
}

export default Accordion;

const AccordionStyled = styled.div`
  button {
    border: none;
    background: none;
    display: flex;
    width: 100%;
    padding: 20px 0;
    cursor: pointer;
    border-bottom: 1px solid gray;
    p {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
const Content = styled.div`
  background: white;
  overflow: hidden;
  max-height: ${({ max }) => max};
  border-radius: 10px;
  div {
    padding: 10px 10px;
  }
`;
