import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const mockUser = { _id: "12345" }; // Example user object
  const mockRole = "expert"; // Example role

  return (
    <Router>
      <div className="flex">
        <Sidebar role={mockRole} />
        <div className="flex-1">
          <Navbar user={mockUser} role={mockRole} />
          {/* Add your content here */}
        </div>
      </div>
    </Router>
  );
}

export default App;

{
  /*
import Home from "./pages/Home"; // Example page component
import Community from "./pages/Community"; // Example page component
import Blog from "./pages/Blog"; // Example page component
import Login from "./pages/Login"; // Example page component
import Signup from "./pages/Signup"; // Example page component
import AiChatbot from "./pages/AiChatbot"; // Example page component

function App() {
  const mockUser = { _id: "12345" }; // Example user object
  const mockRole = "expert"; // Example role
  
  return (
    <Router>
      <Navbar user={mockUser} role={mockRole} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ai-chatbot" element={<AiChatbot />} />
        <Route path={`/expert/:userId/pings`} element={<Pings />} />
      </Routes>
    </Router>
  );
}

export default App;
*/
}
