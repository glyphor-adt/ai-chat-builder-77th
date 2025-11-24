import React from 'react'

function Hero() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">Unlock the Power of AI Conversations</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">Experience intelligent, personalized, and engaging conversations with our cutting-edge AI-powered chat application.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Start Chatting Now</button>
          <button className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
