import theme from "./theme/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./Welcome/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
