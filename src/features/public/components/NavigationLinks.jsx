import * as React from "react";
import { Link, NavLink } from "react-router-dom";

function NavigationLinks() {
  const links = [
    { text: "Home", path: "/" },
    { text: "About us", path: "/about-us" },
    { text: "Courses", path: "/courses" },
    { text: "Blogs", path: "/blogs" },
    { text: "Contact us", path: "/contact-us" },
  ];


  return (
    <div className="flex align-center gap-10 justify-between">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={`self-stretch my-auto `}
          tabIndex="0"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

export default NavigationLinks;
