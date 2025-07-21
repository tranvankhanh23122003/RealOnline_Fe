import type React from "react"
import { useState } from "react"
import Login_Components from "./Login_Components"

const SignUp_Components = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("SignUp:", { fullName, phone, email, password, confirmPassword })
  }
  
  if(!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[95vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full min-h-[600px]">
          {/* Left Section - Platform Information */}
          <div className="w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-green-50 to-green-100">
            <div className="max-w-md">
              <div className="mb-6">
                <p className="text-green-600 text-sm font-medium mb-1">Tham gia cộng đồng BDS hàng đầu</p>
                <h2 className="text-gray-900 text-2xl font-bold mb-2">Đăng ký tài khoản TDC</h2>
                <p className="text-gray-700 text-sm">
                  Trở thành thành viên để trải nghiệm đầy đủ các tính năng tuyệt vời và nhận thông tin độc quyền về bất động sản
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-gray-900 font-semibold mb-3 text-sm">Ưu đãi thành viên mới</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🎁</span>
                    <span className="text-gray-700 text-xs">
                      Tư vấn miễn phí từ chuyên gia BDS hàng đầu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">💰</span>
                    <span className="text-gray-700 text-xs">Ưu đãi đặc biệt cho khách hàng mới</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📧</span>
                    <span className="text-gray-700 text-xs">Nhận bản tin thị trường BDS hàng tuần</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🏠</span>
                    <span className="text-gray-700 text-xs">Ưu tiên xem căn hộ mẫu và book lịch thăm quan</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-900 font-semibold mb-3 text-sm">Quyền lợi thành viên</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">Truy cập toàn bộ thông tin dự án và bảng giá</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">Sử dụng công cụ tính toán vay và lãi suất</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">Lưu danh sách yêu thích và so sánh sản phẩm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - SignUp Form */}
          <div className="w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
            <div className="max-w-sm w-full">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Tạo tài khoản mới</h2>
                <p className="text-gray-600 text-sm mt-2">Điền thông tin để bắt đầu</p>
              </div>

              <form className="space-y-4" onSubmit={handleSignUp}>
                <div>
                  <input
                    type="text"
                    placeholder="Họ và tên *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Số điện thoại *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu *"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Xác nhận mật khẩu *"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    Tôi đồng ý với{" "}
                    <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                      Điều khoản sử dụng
                    </a>{" "}
                    và{" "}
                    <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                      Chính sách bảo mật
                    </a>
                  </label>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="newsletter" className="text-xs text-gray-600">
                    Tôi muốn nhận bản tin và thông báo về các chương trình ưu đãi từ TDC
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium transition duration-200"
                >
                  Tạo tài khoản
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Đã có tài khoản?{" "}
                    <a href="#" className="text-green-600 hover:text-green-500 font-medium">
                      Đăng nhập ngay
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp_Components 