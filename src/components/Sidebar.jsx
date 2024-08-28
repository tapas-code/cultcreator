import { Captions } from "lucide-react";
import { CircleUser } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <p>CULTCREATOR</p>
        <p>Find Your Digital Content Creator</p>
      </div>

      <div className="sidebar_menu">
        <div className="sidebar_menu--link">
          <CircleUser width="16px"/>
          <NavLink to="/influencers" className="sideLink">Influencers Profile</NavLink>
        </div>
        <div className="sidebar_menu--link">
          <NavLink to="/" className="sideLink">Brand Owner Profile</NavLink>
        </div>
        <div className="sidebar_menu--link">
          <Captions width="16px"/>
          <NavLink to="/transactions" className="sideLink">Transactions Profile</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
