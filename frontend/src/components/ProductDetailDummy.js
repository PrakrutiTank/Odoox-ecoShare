import React, { useState, useEffect } from "react";
import "./UserProfile.css"; // import your CSS

function ProductDetailDummy() {
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const dummyProduct = {
      _id: "12345",
      name: "Vintage Leather Bag",
      price: 1500,
      description: "A stylish vintage leather bag in excellent condition.",
      category: "Bags",
      imageUrl: "https://via.placeholder.com/300",
      seller: {
        name: "John Doe",
        phone: "+91-9876543210",
        address: {
          street: "123 Main Street",
          city: "Mumbai",
          state: "Maharashtra",
          postalCode: "400001",
          country: "India",
        },
      },
    };
    setProduct(dummyProduct);
  }, []);

  const handleAddToCart = () => {
    setAdded(true);
    alert("Product added to cart!");
  };

  if (!product) return <p className="purchases-section">Loading product...</p>;

  return (
    <div className="user-profile">
      <div
        className="profile-content listing-card"
        style={{ width: "500px", margin: "0 auto" }} // <-- 60% width and center
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="listing-image-placeholder">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="listing-info">{product.name}</h2>
            <p className="listing-price">₹{product.price}</p>
            <p className="listing-category">{product.description}</p>
            <p className="listing-category">
              Category: <span className="font-semibold">{product.category}</span>
            </p>

            {/* Seller Info */}
            <div className="profile-section border-t pt-4 mt-4">
              <h3 className="text-[#9f5343] font-bold">Seller Info</h3>
              <p><span className="font-semibold">Name:</span> {product.seller.name}</p>
              <p><span className="font-semibold">Phone:</span> {product.seller.phone}</p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {product.seller.address.street}, {product.seller.address.city}, {product.seller.address.state}, {product.seller.address.postalCode}, {product.seller.address.country}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`add-listing-btn mt-4 ${added ? "bg-gray-400 cursor-not-allowed" : ""}`}
            >
              {added ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailDummy;
