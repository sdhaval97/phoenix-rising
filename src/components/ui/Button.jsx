import React from 'react'

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}) => {
  // Different button styles
  const styles = {
    primary: 'bg-phoenix-500 hover:bg-phoenix-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${styles[variant]}
        font-bold py-3 px-6 rounded-lg shadow-lg 
        hover:shadow-xl transform hover:scale-105 
        transition-all duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variant === 'primary' ? 'phoenix-glow' : ''}
      `}
    >
      {children}
    </button>
  )
}

export default Button