import React, { useEffect } from "react";
import styled from "styled-components";

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
  text-align: center;
`;

function WaitingPage() {
  return (
    <Loader>
      <h1>Waiting Page</h1>
    </Loader>
  );
}

export default WaitingPage;
