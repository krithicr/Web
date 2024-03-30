import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Utils/Theme";
import { Suspense, lazy } from "react";
import WaitingPage from "./Components/WaitingPage";

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const HomePage = lazy(() =>
  wait(1000).then(() => import("./Components/HomePage"))
);

// const HomePage = lazy(() => import("./Components/HomePage"));

const MainApp = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  // height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainApp>
        <Suspense fallback={<WaitingPage />}>
          <HomePage />
        </Suspense>
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
