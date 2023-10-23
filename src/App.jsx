import DarkModeButton from "./components/DarkModeButton/DarkModeButton";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="relative">
        <Navbar />
        <Home />
        <DarkModeButton />
      </div>
    </Provider>
  );
}

export default App;
