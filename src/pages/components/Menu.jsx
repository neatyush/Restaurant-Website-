import React from "react";

const Menu = (props) => {
  const { heading, subHeading, menuBoxName, menuBoxFoodPrice, otherItems } = props;

  return (
    <>
      {/* Wrapper */}
      <div className="wrapper flex flex-col m-8">
        <h1 className="text-3xl font-extrabold p-0 ml-4">{heading}</h1>
        {/* Course Heading */}
        <div className="flex flex-col mt-2 box-border border-black border-[1px] rounded-xl">
          <h1
            className="bg-black text-white text-lg font-bold box-border
            p-3 rounded-xl"
          >
            {subHeading}
          </h1>
          <div className="p-4">
            {/* Food Name */}
            <p className="font-bold overflow-hidden">{menuBoxName}    ...............................................................................................</p>
            <p>{menuBoxFoodPrice}</p>
          </div>
        </div>

        {/* Other menu items - individually listed */}
        {/* Conditional rendering: Only map if otherItems exists and has items */}
        {otherItems && otherItems.length > 0 && (
          <div> {/* Optional wrapper for the list */}
            {otherItems.map((item, index) => (
              <div key={index} className="ml-2 mt-2">
                <p className="font-bold overflow-hidden">{item.food}    ...............................................................................................</p>
                <p>Rs.{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;