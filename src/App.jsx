import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-phoenix-50 to-phoenix-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 mx-4">
        <div className="text-center">
          {/* Phoenix Logo */}
          <div className="text-6xl mb-4 animate-pulse">🔥</div>
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Phoenix Rising
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 mb-8">
            Rise from the ashes stronger than ever
          </p>
          
          {/* Interactive Button */}
          <button
            onClick={() => setCount(count + 1)}
            className="bg-phoenix-500 hover:bg-phoenix-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 phoenix-glow"
          >
            Days Clean: {count}
          </button>
          
          {/* Motivational Message */}
          <p className="text-sm text-gray-500 mt-4">
            Every day is a victory! 🎉
          </p>
        </div>
      </div>
    </div>
  )
}

export default App