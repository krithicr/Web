import React, { useEffect } from "react";
import styled from "styled-components";
import "../WaitingStyles.css";

const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function WaitingPage() {
  return (
    <Loader>
      <div className="loader"></div>
      <br />
      <p>Loading</p>
    </Loader>
  );
}

export default WaitingPage;
