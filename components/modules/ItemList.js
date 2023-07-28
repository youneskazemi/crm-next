import React from "react";
import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;

    const newProducts = [...products];

    products[index][name] = value;

    setForm({
      ...form,
      products: newProducts,
    });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products];

    newProducts.splice(index, 1);

    setForm({
      ...form,
      products: newProducts,
    });
  };
  return (
    <div className="item-list">
      <p>Purchased Producsts</p>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={(e) => deleteHandler(index)}
        />
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

function ProductItem({ product, changeHandler, deleteHandler }) {
  return (
    <div className="form-input__list">
      <FormInput
        name="name"
        label="Product Name"
        type="text"
        value={product.name}
        onChange={changeHandler}
      ></FormInput>

      <div>
        <FormInput
          name="price"
          label="Price"
          type="text"
          value={product.price}
          onChange={changeHandler}
        ></FormInput>
        <FormInput
          name="qty"
          label="Qty"
          type="number"
          value={product.qty}
          onChange={changeHandler}
        ></FormInput>
      </div>

      <button onClick={deleteHandler}>Remove</button>
    </div>
  );
}

export default ItemList;
