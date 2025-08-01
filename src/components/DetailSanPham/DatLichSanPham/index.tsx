import React, { useState } from "react";
import Login_Components from "../../Login/Login_Components"; // Giả định cùng thư mục, điều chỉnh path nếu cần
import "./style.css";

const DatLichSanPham: React.FC = () => {
  const [showEmptyForm, setShowEmptyForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleBuyNowClick = () => {
    setShowEmptyForm(true);
  };

  const handleCloseEmptyForm = () => {
    setShowEmptyForm(false);
  };

  const handleOpenLoginForm = () => {
    setShowEmptyForm(false);
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleSwitchToSignUp = () => {
    alert("Chuyển sang form đăng ký"); // Giả lập, thay bằng logic thật nếu có
  };

  return (
    <div className="sanpham-content">
      <h3>Đặt lịch xem nhà ngay hôm nay để nhận ưu đãi tốt nhất</h3>

      <div className="sanpham-best-price">
        <div className="label">Giá tốt nhất từ TDC</div>
        <div className="price">15.445.695.880 VNĐ</div>
        <div className="price-original">15.445.695.880 VNĐ</div>
      </div>

      <div className="sanpham-date-pick">
        <button>Thứ hai<br />7/7</button>
        <button>Thứ ba<br />8/7</button>
        <button>Thứ tư<br />9/7</button>
      </div>

      <button className="sanpham-booking-btn">Đặt lịch ngay</button>

      <div className="sanpham-actions">
        <button className="add-to-cart">Giỏ hàng</button>
        <button className="buy-now" onClick={handleBuyNowClick}>
          Mua ngay
        </button>
      </div>

      {showEmptyForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[95vh] overflow-hidden min-h-[600px] flex items-center justify-center">
            <button
              onClick={handleCloseEmptyForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center max-w-sm w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bạn cần phải đăng nhập mới sử dụng được chức năng này
              </h2>
              <button
                onClick={handleOpenLoginForm}
                className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 font-medium transition duration-200"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      )}

      <Login_Components
        isOpen={showLoginForm}
        onClose={handleCloseLoginForm}
        onSwitchToSignUp={handleSwitchToSignUp}
      />
    </div>
  );
};

export default DatLichSanPham;