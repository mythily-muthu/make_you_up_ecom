import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-screen h-screen ">
      <Router>
        {/* headers */}
        <Topbar />
        <Navbar />
        <Add />
        {/* content */}
        <Content />
        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
