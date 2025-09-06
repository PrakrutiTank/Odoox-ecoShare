import React, { useState } from "react";
import API from "../api";
import "./UserProfile.css"; // import the CSS

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
    stock: "",
    sellerName: "",
    sellerPhone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: form.name,
      description: form.description,
      price: form.price,
      category: form.category,
      imageUrl: form.imageUrl,
      stock: form.stock,
      seller: {
        name: form.sellerName,
        phone: form.sellerPhone,
        address: {
          street: form.street,
          city: form.city,
          state: form.state,
          postalCode: form.postalCode,
          country: form.country
        }
      }
    };

    try {
      await API.post("/products", productData);
      alert("Product added successfully!");
      setForm({});
    } catch (err) {
      alert("Error adding product");
    }
  };

  return (
    <div className="user-profile" style={{display: "flex",justifyContent: "center"}}>
      <div className="profile-content" style={{maxWidth: "700px"}}>
        <h2 className="profile-section">Add Product</h2>
        <form onSubmit={handleSubmit} className="profile-grid">
          {/* Product Details */}
          <div className="profile-field full-width">
            <label>Product Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className="profile-field full-width">
            <label>Description</label>
            <textarea name="description" rows="3" value={form.description} onChange={handleChange} />
          </div>

          <div className="profile-field">
            <label>Price</label>
            <input type="number" name="price" value={form.price} onChange={handleChange} />
          </div>

          <div className="profile-field">
            <label>Category</label>
            <input name="category" value={form.category} onChange={handleChange} />
          </div>

          <div className="profile-field">
            <label>Image URL</label>
            <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
          </div>

          <div className="profile-field">
            <label>Stock</label>
            <input type="number" name="stock" value={form.stock} onChange={handleChange} />
          </div>

          {/* Seller Information */}
          <h2 className="profile-section full-width">Seller Information</h2>
            <br></br>
          <div className="profile-field">
            <label>Seller Name</label>
            <input name="sellerName" value={form.sellerName} onChange={handleChange} />
          </div>

          <div className="profile-field">
            <label>Phone Number</label>
            <input name="sellerPhone" value={form.sellerPhone} onChange={handleChange} />
          </div>

          <div className="profile-field full-width">
            <label>Street</label>
            <input name="street" value={form.street} onChange={handleChange} />
          </div>

          <div className="profile-field">
            <label>City</label>
            <input name="city" value={form.city} onChange={handleChange} />
          </div>

          <div className="profile-field">
            <label>State</label>
            <input name="state" value={form.state} onChange={handleChange} />
          </div>

          <div className="profile-field">
            <label>Postal Code</label>
            <input name="postalCode" value={form.postalCode} onChange={handleChange} />
          </div>

          <div className="profile-field full-width">
            <label>Country</label>
            <input name="country" value={form.country} onChange={handleChange} />
          </div>

          {/* Submit Button */}
          <div className="profile-field full-width" style={{ textAlign: "center", marginTop: "20px" }}>
            <button type="submit" className="add-listing-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
