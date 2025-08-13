"use client";
import { useState } from "react";
import Slide1 from "../../../assets/images/baner1.png";
import Slide2 from "../../../assets/images/khu-cong-nghiep.png";
import Slide3 from "../../../assets/images/baner1.png";
import "./style.css";
const TinTuc = () => {
  const [currentLarge] = useState(0);
  const [currentSmall1] = useState(0);

  const images = [Slide1, Slide2, Slide3];

  return (
    <div className="tintuc-page">
      <h2 style={{ fontSize: "2.5rem ", fontWeight: "bold" }}>
        Tin Tức
      </h2>
      <p style={{marginBottom: "10px"}}>Thông tin dự án và ưu đãi TDC</p>

      <div className="tintuc-container">
        <div className="left-section">
          <div className="slide-large">
            <img
              src={images[currentLarge]}
              alt="Slide lớn"
              className="slide-image"
            />
          </div>
          <div className="slide-info">
            <h3>Toàn bộ thông tin cần biết về khu biệt thự cao cấp CoColand</h3>
            <p>Với diện tích 18 ha tọa lạc tại khu Công nghiệp và Đô thị Mỹ Phước III. Khu biệt thự Coco Land do Công ty Cổ phần Kinh doanh và Phát triển Bình Dương (TDC) làm chủ đầu tư, có được địa thế đắc địa đó chính là “tầm cao”.</p>
            <p className="date">Ngày đăng: 08/07/2025 14:00</p>
          </div>
        </div>

        <div className="right-section">
          <div className="slide-small-wrapper">
            <div className="slide-small">
              <img
                src={images[currentSmall1]}
                alt="Slide nhỏ 1"
                className="slide-image"
              />
              <div className="slide-info">
                <h3>Khu biệt thự cao cấp CoColand...</h3>
                <p className="date">08/07/2025 14:00</p>
              </div>
            </div>
            <div className="slide-small">
              <img src={images[1]} alt="Slide nhỏ 2" className="slide-image" />
              <div className="slide-info">
                <h3>Khu biệt thự cao cấp CoColand...</h3>
                <p className="date">08/07/2025 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinTuc;
