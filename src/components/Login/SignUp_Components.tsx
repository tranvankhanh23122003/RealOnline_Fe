import type React from "react";
import { useState } from "react";

const SignUp_Components = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SignUp:", { phone, password });
  };

  const resetForm = () => {
    setPhone("");
    setPassword("");
    setShowPassword(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[95vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-md"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex h-full min-h-[600px]">
          {/* Left Section - Platform Information */}
          <div className="w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="max-w-md">
              <div className="mb-6">
                <p className="text-blue-600 text-sm font-medium mb-1">
                  Giải pháp giao dịch Bất động sản trực tuyến
                </p>
                <h2 className="text-gray-900 text-2xl font-bold mb-2">
                  Sàn giao dịch BDS TDC
                </h2>
                <p className="text-gray-700 text-sm">
                  Đăng nhập ngay để khám phá toàn bộ thông tin và tận hưởng mọi
                  tính năng tuyệt vời trên Sàn giao dịch
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-900 font-semibold mb-3 text-sm">
                  Khách đã đăng nhập
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Thông tin, tài liệu chi tiết, chuyên sâu về các dự án và
                      quỹ căn của Sàn giao dịch TDC
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Công cụ tính giá, chiết khấu và dòng tiền
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Cập nhật sớm những thông tin về dự án mới
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Cập nhật biến động kinh tế vĩ mô, để xuất bất động sản phù
                      hợp
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-900 font-semibold mb-3 text-sm">
                  Khách chưa đăng nhập
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Xem thông tin về các dự án của TDC
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700 text-xs">
                      Chuyến tham quan ảo TDC 360
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - SignUp Form */}
          <div className="w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
            <div className="max-w-sm w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Đăng ký hoặc đăng nhập
                </h2>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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

                <div className="flex justify-between items-center mb-6">
                  <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                  >
                    Đăng nhập
                  </button>
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                  >
                    Quên mật khẩu?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition duration-200"
                >
                  Tiếp tục với số điện thoại
                </button>

                <div className="mt-6">
                  <div className="text-center text-sm text-gray-500 mb-4">
                    Truy cập bằng
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                      <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp_Components;
