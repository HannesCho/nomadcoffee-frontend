import { useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../apollo";

const DarkMode = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background: transparent;
  margin-top: 10px;
`;

const DarkModeButton = styled.button`
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  border: 0;
`;

function PageMode() {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <DarkMode>
      <DarkModeButton onClick={darkMode ? disableDarkMode : enableDarkMode}>
        {darkMode ? "🌞" : "🌙"}
      </DarkModeButton>
    </DarkMode>
  );
}

export default PageMode;
