'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type FAQItem = {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "What is Devbded?",
        answer: "Devbded is a tailored inspiration platform for developers and entrepreneurs. It provides daily curated content to spark creativity and innovation in your work."
    },
    {
        question: "How does the personalized recommendation system work?",
        answer: "Our AI-powered system analyzes your interests, interaction history, and preferences to deliver inspiration that's most relevant to you. The more you use Devbded, the more accurate our recommendations become."
    },
    {
        question: "Is Devbded free to use?",
        answer: "Devbded offers a free tier with limited features. We also have premium plans that provide access to advanced features, more personalized recommendations, and exclusive content."
    },
    {
        question: "Can I share my own inspirations on Devbded?",
        answer: "Devbded has a vibrant community feature where users can share their own inspirations, ideas, and insights with others."
    },
    {
        question: "How often is new content added to Devbded?",
        answer: "We add new content daily. Our team of curators and AI systems work around the clock to ensure there's always fresh, relevant inspiration for our users."
    }
]

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-5 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" aria-hidden="true" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                aria-hidden={!isOpen}
            >
                <div className="pb-5 pt-2">
                    <p className="text-base text-gray-500">{item.answer}</p>
                </div>
            </div>
        </div>
    )
}

const FAQ: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                Frequently Asked Questions
            </h2>
            <div className="space-y-6">
                {faqData.map((item, index) => (
                    <FAQItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default FAQ

