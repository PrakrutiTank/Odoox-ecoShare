// src/pages/MainPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css"; // reuse the profile CSS

export default function MainPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["Clothing", "Electronics", "Books", "Furniture", "Daily use", "Other", "Sports"];

  // 8 dummy products
  const products = [
    { _id: "1", title: "Eco T-Shirt", category: "Clothing", price: 499, imageUrl: "https://i.etsystatic.com/34632538/r/il/045e86/4296456166/il_570xN.4296456166_3cvs.jpg" },
    { _id: "2", title: "Recycled Notebook", category: "Books", price: 199, imageUrl: "https://seedballs.in/cdn/shop/files/EcoFriendly-_Custom_Printed-Spiral_Notebook_2.jpg?v=1739765460" },
    { _id: "3", title: "Wooden Chair", category: "Furniture", price: 1299, imageUrl: "https://images-cdn.ubuy.co.in/633ff0d6ffc1154aa413c998-dcmtoamz-acacia-folding-wooden-outdoor.jpg" },
    { _id: "4", title: "Murti", category: "Other", price: 1299, imageUrl: "https://punehandmadepapers.com/cdn/shop/files/3-IMG_5664.jpg?v=1722857730" },
    { _id: "5", title: "Recyclable Pencil", category: "Daily use", price: 50, imageUrl: "https://inbreathe.in/cdn/shop/products/wood-free-pencil-set-recycled-materials_1200x1200.jpg?v=1751194363" },
    { _id: "6", title: "Eco Plates", category: "Daily use", price: 1000, imageUrl: "https://bignerve-images.s3.us-west-2.amazonaws.com/thumbnail/06e4e910-7c30-47ba-bc71-d5ca6716950b" },
    { _id: "7", title: "Wooden Pencil Holder", category: "Daily use", price: 400, imageUrl: "https://cdn.shopify.com/s/files/1/0564/9321/1807/files/H_p_d_d_van_phong_ph_m_600x600.png?v=1705739615" },
    { _id: "8", title: "Eco Household Set", category: "Daily use", price: 700, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUjDClgWl-_Ut63Gje540dpAHNwMHBm2VNYfhxEHjoaPsnKzZ53Np_o_TnAjEgTju9zw&usqp=CAU" },
  ];

  // Filtered products
  const filtered = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="user-profile">
      {/* Hero Section */}
      <div className="profile-content" style={{ textAlign: "center" }}>
        <h1 style={{ color: "#4a7c59", fontSize: "36px", marginBottom: "10px" }}>EcoShare</h1>
        <p style={{ color: "#9f5343", marginBottom: "20px", fontSize: "18px" }}>Discover · Share · Reuse</p>
        

        {/* Filters */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "10px", borderRadius: "6px", border: "2px solid #e1e5e9" }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: "10px", borderRadius: "6px", border: "2px solid #e1e5e9" }}
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="listings-grid" style={{ justifyContent: "center" }}>
          {filtered.length === 0 ? (
            <p style={{ color: "#9f5343" }}>No products found.</p>
          ) : (
            filtered.map((p) => (
              <Link to={`/product/${p._id}`} key={p._id} className="listing-card" style={{ width: "300px" }}>
                <div className="listing-image-placeholder">
                  <img src={p.imageUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }} />
                </div>
                <div className="listing-info">
                  <h3>{p.title}</h3>
                  <p className="listing-price">₹{p.price}</p>
                  <p className="listing-category">{p.category}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="profile-content" style={{ textAlign: "center", marginTop: "40px" }}>
        <p>© {new Date().getFullYear()} EcoShare · Building a Greener Future 🌱</p>
      </div>
    </div>
  );
}
