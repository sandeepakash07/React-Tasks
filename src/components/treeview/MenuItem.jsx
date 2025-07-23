import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren((prevState) => ({
      ...prevState,
      [getCurrentLabel]: !prevState[getCurrentLabel],
    }));
  };

  return (
    <div className="ml-4">
      <div className="flex justify-between items-center">
        <h1>{item.label}</h1>
        {item?.children?.length > 0 && (
          <span
            className="cursor-pointer"
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        )}
      </div>
      {item?.children?.length > 0 && displayCurrentChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </div>
  );
}
