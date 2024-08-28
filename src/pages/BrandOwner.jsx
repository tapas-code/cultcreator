import { CircleUserRound } from "lucide-react";
import { ListFilter } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { Search } from "lucide-react";
import React from "react";

const BrandOwner = () => {
  return (
    <div className="brandOwner">
      <div className="brandOwner_header">
        <Search width="16px" />
        <div>
          <div className="helpIcon">
            <Bell width="20px"/>
          </div>
          <CircleUserRound />
        </div>
      </div>

      <div className="brandOwner_profile">
        <p className="profile_text">Brand Owner Profile</p>
        <button className="profile_button">+ New User</button>
      </div>

      <div className="brandOwner_searchBox">
        <div className="searchUser">
          <Search width="16px" color="rgba(0, 0, 0, .45)" />
          <input type="text" placeholder="Search user..." />
        </div>
        <ListFilter width="18px" />
      </div>

      <div className="brandOwner_table">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>
                Name <ArrowUp width="16px" color="rgba(0, 0, 0, .5)" />
              </th>
              <th>Email ID</th>
              <th>Mob.NO</th>
              <th>Address</th>
            </tr>
          </thead>
        </table>
        <div className="table_pagination">
          <p>Rows per page: </p>
          <select>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <p>0-0 of 0</p>
          <ChevronLeft width="16px" />
          <ChevronRight width="16px" />
        </div>
      </div>
    </div>
  );
};

export default BrandOwner;
