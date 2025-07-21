import React, { useState } from 'react'
import Login_Components from '../components/Login/Login_Components'

const Login = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true)

  const handleCloseLogin = () => {
    setIsLoginOpen(false)
  }

  const handleOpenLogin = () => {
    setIsLoginOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">  
      {!isLoginOpen && (
        <button
          onClick={handleOpenLogin}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
        >
          Mở đăng nhập
        </button>
      )}

      <Login_Components isOpen={isLoginOpen} onClose={handleCloseLogin} />
    </div>
  )
}

export default Login