import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen  ">
      <Router>
        {/* headers */}


        <Content />
        {/* footer */}

      </Router>
    </div>
  );
}

export default App;
