import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useReactiveVar} from "@apollo/client";
import {isDarkModeVar, isLoggedInVar} from "./apollo";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import Login from "./screens/Login";
import {ThemeProvider} from "styled-components";
import {GlobalStyles, darkTheme, lightTheme} from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isDarkMode = useReactiveVar(isDarkModeVar);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login/> }
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
    );
}

export default App;