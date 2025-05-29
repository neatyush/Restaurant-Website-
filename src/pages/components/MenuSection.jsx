import Menu from "./Menu";

const MenuSection = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 flex flex-col" id="menu">
        <Menu
          heading="Main Course"
          subHeading="New"
          menuBoxName="Spicy Wings"
          menuBoxFoodPrice="Rs.410"
          otherItems={[
            { food: "Chicken Nuggets", price: 250 },
            { food: "Corn Sadheko", price: 230 },
          ]}
        />
        <Menu
          heading="Weekend Specials"
          subHeading="Recommended"
          menuBoxName="Spicy Wings"
          menuBoxFoodPrice="Rs.410"
          otherItems={[
            { food: "Chicken Nuggets", price: 250 },
            { food: "Corn Sadheko", price: 230 },
            { food: "Chicken Nuggets", price: 250 },
          ]}
        />
        
        <Menu
          heading="Veg Snacks"
          subHeading="Recommended"
          menuBoxName="Spicy Wings"
          menuBoxFoodPrice="Rs.410"
          otherItems={[
            { food: "Chicken Nuggets", price: 250 },
            { food: "Corn Sadheko", price: 230 },
          ]}
        />
        <Menu
          heading="Chicken Snacks"
          subHeading="New"
          menuBoxName="Spicy Wings"
          menuBoxFoodPrice="Rs.410"
          otherItems={[
            { food: "Chicken Nuggets", price: 250 },
            { food: "Corn Sadheko", price: 230 },
          ]}
        />
        <Menu
          heading="Combo Menu"
          subHeading="Recommended"
          menuBoxName="Spicy Wings"
          menuBoxFoodPrice="Rs.410"
          otherItems={[
            { food: "Chicken Nuggets", price: 250 },
            { food: "Corn Sadheko", price: 230 },
          ]}
        />
      </div>
    </>
  );
};

export default MenuSection;
