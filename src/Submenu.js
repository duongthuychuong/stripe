import React, { useState, useRef, useEffect } from "react";
import { useGlobalState } from "./context";

const Submenu = () => {
  const container = useRef(null);
  const [columns, setColums] = useState("col-2");
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalState();
  useEffect(() => {
    setColums("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColums("col-3");
    }
    if (links.length > 3) {
      setColums("col-4");
    }
  }, [links.length, location]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
