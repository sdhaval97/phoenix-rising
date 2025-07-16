import { useState } from 'react'
import Button from './components/ui/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mood, setMood] = useState('😊')

  const handleReset = () => {
    setCount(0)
    setMood('😊')
  }

  const handleCelebrate = () => {
    setMood('🎉')
    setTimeout(() => setMood('😊'), 2000)
  }

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
          
          {/* Days Counter */}
          <div className="bg-phoenix-50 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-phoenix-800 mb-2">
              Days Clean: {count}
            </h2>
            <div className="text-3xl mb-2">{mood}</div>
            <p className="text-sm text-phoenix-600">
              {count === 0 ? 'Start your journey!' : 
               count === 1 ? 'Great start!' : 
               count < 7 ? 'Building momentum!' : 
               count < 30 ? 'Amazing progress!' : 
               'You\'re unstoppable!'}
            </p>
          </div>
          
          {/* Buttons using our new component */}
          <div className="space-y-3">
            <Button 
              onClick={() => setCount(count + 1)}
              variant="primary"
            >
              ➕ Add Day
            </Button>
            
            <div className="flex space-x-3">
              <Button 
                onClick={handleCelebrate}
                variant="secondary"
              >
                🎉 Celebrate
              </Button>
              
              <Button 
                onClick={handleReset}
                variant="danger"
              >
                🔄 Reset
              </Button>
            </div>
          </div>
          
          {/* Footer */}
          <p className="text-sm text-gray-500 mt-6">
            Every day is a victory! 💪
          </p>
        </div>
      </div>
    </div>
  )
}

export default App