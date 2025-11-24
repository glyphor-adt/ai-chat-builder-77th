import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Responses, Zero Wait Time',
    description: 'Get immediate answers and assistance. Our AI is trained to provide fast, accurate, and helpful responses, 24/7.',
  },
  {
    icon: Shield,
    title: 'Unbreakable Security, Complete Privacy',
    description: 'Your data is protected with end-to-end encryption and strict privacy policies. We never share your conversations with third parties.',
  },
  {
    icon: TrendingUp,
    title: 'Smarter Insights, Deeper Understanding',
    description: 'Our AI learns from every interaction, adapting to your needs and providing increasingly relevant insights over time.',
  },
]

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="text-primary w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
