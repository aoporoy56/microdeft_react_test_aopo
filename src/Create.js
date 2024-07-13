import React, { useState } from "react";
import axiox from "axios";

const Create = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        email:"aopo56@gmail.com"
    })

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axiox.post("https://react-interview.1putym.easypanel.host/api/product", formData);
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
          textAlign: "left",
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            required
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Discount
          </label>
          <input
            type="number"
            className="form-control"
            id="discount"
            name="discount"
            required
            value={formData.discount}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
