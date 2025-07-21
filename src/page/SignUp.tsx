import React, { useState } from 'react'
import SignUp_Components from '../components/Login/SignUp_Components'

const SignUp = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(true)

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false)
  }

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">  
      {!isSignUpOpen && (
        <button
          onClick={handleOpenSignUp}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-medium"
        >
          Mở đăng ký
        </button>
      )}
      
      <SignUp_Components isOpen={isSignUpOpen} onClose={handleCloseSignUp} />
    </div>
  )
}

export default SignUp