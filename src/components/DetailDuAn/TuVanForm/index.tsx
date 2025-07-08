import './style.css'
export default function TuVanForm() {
    return (
      <div >
        <h3 className="consult-title">Tư vấn mua chuyên sâu</h3>
        <form className="contact-form">
          <p className="benefit-text">Phân tích quỹ căn, chính sách, tiện ích.</p>
          <p className="benefit-text">Giải đáp mọi thắc mắc khách hàng.</p>
          <p className="benefit-text">Bảo mật thông tin cá nhân tuyệt đối.</p>
  
          <input type="text" required placeholder="Họ và tên *" />
          <input type="tel" required placeholder="Số điện thoại *" />
  
          <p className="consent-text">
            Bằng việc tiếp tục, bạn đồng ý với TDC về Điều khoản dịch vụ và Chính sách bảo mật.
          </p>
  
          <button type="submit">Nhận tư vấn ngay</button>
  
          <p className="or-text">Hoặc</p>
  
          <div className="form-contact">
            <p className="call-option">
              Gọi trực tiếp
              <br />
              0123 456 789
            </p>
            <p className="chat-option">Chat qua Zalo</p>
          </div>
        </form>
      </div>
    );
  }
  