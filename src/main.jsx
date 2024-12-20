import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/utils/scrollToTop.jsx";
import MainLayout from "./mainLayout.jsx";
import "./style/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <MainLayout />
  </BrowserRouter>
);
