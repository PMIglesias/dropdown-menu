import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavIteam/NavItem";
import DropdownMenu from "./components/Dropdown/DropdownMenu";
import { AiOutlineCaretDown } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<AiOutlineCaretDown />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
