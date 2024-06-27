import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

import Sidebar from "./Component/Sidebar";
import SidebarList from "./Component/SidebarList";
import SidebarListItem from "./Component/SidebarListItem";

function App() {
  return (
    <div className="flexbox">
      <Sidebar/>
      <div className="App-header">PET ADOPTION SYSTEM</div>
      <SidebarListItem/>
      
      <div className="layout-container">
     
        {/* <header className="App-header">Pet Adoption</header> */}
        <Outlet />
   
      </div>
    </div>
  );
}
export default App;