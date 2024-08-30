import { CircleUserRound, Menu } from "lucide-react";
import { ListFilter } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { Search } from "lucide-react";
import React, { useState } from "react";
import UpdateUser from "../components/UpdateUser";
import Data from '../data/Data'

const BrandOwner = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(Data)

  const handleSidebarToggle = () => {
    const sidebarComp = document.getElementById("sidebar")
    sidebarComp.style.display = "flex";
    const overlay = document.getElementById('overlay-bg')
    overlay.style.display = 'block';
  }

  const sidebarClose = () => {
    document.getElementById("sidebar").style.display = 'none';
    document.getElementById('overlay-bg').style.display = 'none';
  }

  return (
    <>
    <div className="brandOwner">
      <div className="brandOwner_header">
        <div>
        <Menu className="menu_button" onClick={handleSidebarToggle}/>
        <Search width="16px" />
        </div>
        <div>
          <div className="helpIcon">
            <Bell width="20px" />
          </div>
          <CircleUserRound />
        </div>
      </div>

      <div className="brandOwner_profile">
        <p className="profile_text">Brand Owner Profile</p>
        <button className="profile_button" onClick={() => setOpen(true)}>+ New User</button>
        <UpdateUser open={open} setOpen={setOpen} />
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
                <input type="checkbox"  />
              </th>
              <th>
                Name <ArrowUp width="16px" color="rgba(0, 0, 0, .5)" />
              </th>
              <th>Email ID</th>
              <th>Mob.NO</th>
              <th>Address</th>
            </tr>
          </thead>
          {/* {data.map((curElem) => {
          const { id, name, email, phone, address } = curElem;

          return(
            <tbody className="table_body">
              <tr key={id}>
                <td></td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address.city}</td>
            </tr>
            </tbody>
        )
        })} */}
          <tbody className="table_body">
            {data && data.map((currRow) => (
              <tr key={currRow.id}>
                <td></td>
                <td>{currRow.name}</td>
                <td>{currRow.email}</td>
                <td>{currRow.phone}</td>
                <td>{currRow.address.city}</td>
              </tr>
            ))}
          </tbody>
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
    <div className="overlay-bg" id="overlay-bg" onClick={sidebarClose}></div>
    </>
  );
};

export default BrandOwner;
