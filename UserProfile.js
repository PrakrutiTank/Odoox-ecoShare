import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const [userData, setUserData] = useState({
    username: 'eco_lover123',
    email: 'user@ecofinds.com',
    fullName: 'John Doe',
    phone: '+1 234 567 8900',
    location: 'New York, NY',
    bio: 'Passionate about sustainable living and finding great second-hand treasures!',
    joinedDate: '2024-01-15',
    profileImage: null
  });

const userListings = [
  { id: 1, title: 'Vintage Leather Jacket', price: '₹45.00', category: 'Clothing', status: 'Active', views: 23, image: null },
  { id: 2, title: 'iPhone 12 Pro', price: '₹450.00', category: 'Electronics', status: 'Sold', views: 67, image: null },
  { id: 3, title: 'Wooden Coffee Table', price: '₹120.00', category: 'Furniture', status: 'Active', views: 15, image: null }
];

const userPurchases = [
  { id: 1, title: 'Retro Gaming Console', price: '₹85.00', seller: 'retro_gamer', purchaseDate: '2024-02-20', status: 'Delivered', image: null },
  { id: 2, title: 'Designer Handbag', price: '₹200.00', seller: 'fashion_forward', purchaseDate: '2024-02-15', status: 'In Transit', image: null },
  { id: 3, title: 'Mountain Bike', price: '₹320.00', seller: 'bike_enthusiast', purchaseDate: '2024-01-28', status: 'Delivered', image: null }
];


  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleInputChange = (field, value) => setUserData(prev => ({ ...prev, [field]: value }));
  const handleSaveProfile = () => { setIsEditing(false); console.log('Profile saved:', userData); };

  const renderProfileInfo = () => (
    <div className="profile-section centered-card">
      <h2>Profile Information</h2>
      <div className="profile-grid">
        {['username','fullName','email','phone'].map(field => (
          <div key={field} className="profile-field">
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {isEditing ? (
              <input
                type={field==='email'?'email': 'text'}
                value={userData[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            ) : <span>{userData[field]}</span>}
          </div>
        ))}
        <div className="profile-field full-width">
          <label>Location</label>
          {isEditing ? <input type="text" value={userData.location} onChange={(e)=>handleInputChange('location', e.target.value)} /> : <span>{userData.location}</span>}
        </div>
        <div className="profile-field full-width">
          <label>Bio</label>
          {isEditing ? <textarea rows="3" value={userData.bio} onChange={(e)=>handleInputChange('bio', e.target.value)} /> : <span>{userData.bio}</span>}
        </div>
      </div>
    </div>
  );

  const renderListings = () => (
    <div className="listings-section centered-card">
      <div className="section-header">
        <h2>My Listings ({userListings.length})</h2>
        <button className="add-listing-btn">+ Add New Listing</button>
      </div>
      <div className="listings-grid">
        {userListings.map(listing => (
          <div key={listing.id} className="listing-card">
            <div className="listing-image-placeholder">
              {listing.image ? <img src={listing.image} alt={listing.title} /> : <div className="placeholder-icon">📷</div>}
            </div>
            <div className="listing-info">
              <h3>{listing.title}</h3>
              <p className="listing-price">{listing.price}</p>
              <p className="listing-category">{listing.category}</p>
              <div className="listing-stats">
                <span className={`status ${listing.status.toLowerCase()}`}>{listing.status}</span>
                <span className="views">{listing.views} views</span>
              </div>
            </div>
            <div className="listing-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPurchases = () => (
    <div className="purchases-section centered-card">
      <h2>Purchase History ({userPurchases.length})</h2>
      <div className="purchases-list">
        {userPurchases.map(purchase => (
          <div key={purchase.id} className="purchase-card">
            <div className="purchase-image-placeholder">
              {purchase.image ? <img src={purchase.image} alt={purchase.title} /> : <div className="placeholder-icon">📦</div>}
            </div>
            <div className="purchase-details">
              <h3>{purchase.title}</h3>
              <p className="purchase-price">{purchase.price}</p>
              <p className="purchase-seller">Seller: {purchase.seller}</p>
              <p className="purchase-date">Purchased: {new Date(purchase.purchaseDate).toLocaleDateString()}</p>
            </div>
            <div className="purchase-status">
              <span className={`status ${purchase.status.toLowerCase().replace(' ', '-')}`}>{purchase.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          {userData.profileImage ? (
            <img src={userData.profileImage} alt="Profile" />
          ) : (
            <div className="avatar-placeholder">{userData.fullName.charAt(0).toUpperCase()}</div>
          )}
        </div>
        <div className="profile-header-info">
          <h1>{userData.fullName}</h1>
          <p className="username">@{userData.username}</p>
          <p className="join-date">Member since {new Date(userData.joinedDate).toLocaleDateString()}</p>
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleSaveProfile}>Save Changes</button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : <button className="edit-btn" onClick={handleEditToggle}>Edit Profile</button>}
        </div>
      </div>

      <div className="profile-nav">
        {['profile','listings','purchases'].map(tab => (
          <button
            key={tab}
            className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={()=>setActiveTab(tab)}
          >
            {tab==='profile'?'Profile Info':tab==='listings'?'My Listings':'Purchase History'}
          </button>
        ))}
      </div>

      <div className="profile-content">
        {activeTab==='profile' && renderProfileInfo()}
        {activeTab==='listings' && renderListings()}
        {activeTab==='purchases' && renderPurchases()}
      </div>
    </div>
  );
};

export default UserProfile;
