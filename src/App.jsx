import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
import FetchingData from "./components/FetchingData";
import ProductDetails from "./components/ProductDetails";
import FilmsChoosen from "./components/FilmsChoosen";
import ContextLocalStorage from "./context/ContextLocalStorage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/search" element={<SearchMovie />} />
          <Route path="/*" element={<FetchingData />} />
          <Route
            path="/details/:id"
            element={(
              <ContextLocalStorage>
                 {<ProductDetails/>}
              </ContextLocalStorage>
            )}
          />
          <Route path="/choosen" element={<FilmsChoosen />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
