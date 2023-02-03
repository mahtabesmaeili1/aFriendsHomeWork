import React, { useState } from "react";

const Items = () => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 10, checked: true },
    { id: 2, name: "Item 2", price: 20, checked: true },
    { id: 3, name: "Item 3", price: 30, checked: true },
    { id: 4, name: "Item 4", price: 40, checked: true },
    { id: 5, name: "Item 5", price: 50, checked: true },
    { id: 6, name: "Item 6", price: 60, checked: true },
  ]);

  const handleChange = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
          setTotal(total + (item.checked ? item.price : -item.price));
        }
        return item;
      })
    );
  };

  React.useEffect(() => {
    setTotal(
      items.reduce((acc, item) => {
        if (item.checked) {
          return acc + item.price;
        }
        return acc;
      }, 0)
    );
  }, [items]);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChange(item.id)}
            />
            <label>
              {item.name} - ${item.price}
            </label>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Items;
