import React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Slide1 from "../../../assets/images/baner1.png";
import "./style.css";

interface PropertyCard {
  id: number;
  price: string;
  rating: number;
  description: string;
  bedrooms: number;
  area: string;
  address: string;
  image: string;
}

interface PropertyGridProps {
  properties: PropertyCard[];
}

const PropertyGridBDS: React.FC<PropertyGridProps> = ({ properties }) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="profile-property-grid-container">
      <div className="profile-property-grid">
        {properties.map((property) => (
          <div key={property.id} className="profile-property-card">
            <div className="relative">
              <img
                src={Slide1}
                alt={`Property ${property.id}`}
                className="profile-property-image"
              />
              <div className="profile-price-badge">{property.price}</div>
              <div className="profile-favorite-button">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="profile-property-content">
              <div className="profile-property-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      color: star <= property.rating ? "#facc15" : "#d1d5db",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <h3 className="profile-property-description">
                {property.description}
              </h3>
              <div className="profile-property-details">
  <div className="profile-property-detail">
    🏠 {property.bedrooms} phòng
  </div>
  <div className="profile-property-detail">
    📐 {property.area}
  </div>
</div>


              <p className="profile-property-address">{property.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGridBDS;
