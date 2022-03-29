import {BrowserRouter as Router} from "react-router-dom"
import BottomBar from "components/BottomBar"
import Sidebar from "components/Sidebar"
import Content from "components/Content"

export default function App() {
  return (
    <Router>
      <div className="wrapper">
          <Sidebar />
          <Content />
      </div>
        <BottomBar />
    </Router>
  );
}
