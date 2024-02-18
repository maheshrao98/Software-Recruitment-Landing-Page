import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface ExpandableListProps {
  item: {
    id: number;
    link: string;
    label: string;
    subItems?: {
      id: number;
      link: string;
      label: string;
    }[];
  };
}

const ExpandableList: React.FC<ExpandableListProps> = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <li key={item.id}>
      <div className="flex items-center" onClick={handleToggle}>
        <button
          className="block py-2 pl-4 text-gray-700 hover:bg-gray-50"
        >
          {item.label}
        </button>
        <div className="ml-auto p-2">
          {item.subItems &&
            item.subItems.length > 0 &&
            (isExpanded ? (
              <TiArrowSortedUp color="black"></TiArrowSortedUp>
            ) : (
              <TiArrowSortedDown color="black"></TiArrowSortedDown>
            ))}
        </div>
      </div>
      {isExpanded && item.subItems && item.subItems.length > 0 && (
        <ul className="ml-8 z-50">
          {item.subItems.map((subItem) => (
            <li key={subItem.id}>
              <a
                href={subItem.link}
                className="block py-2 text-gray-700 hover:bg-gray-50"
              >
                {subItem.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ExpandableList;
