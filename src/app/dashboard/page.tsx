'use client'

//import React, { useState } from 'react'
import { Search, Bookmark, Share2 } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

export default function Dashboard() {
    const { darkMode } = useApp()
    const categories = ['All', 'Development', 'Business', 'Motivation', 'Technology']
    const inspirations = [
        { id: 1, category: 'Development', content: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
        { id: 2, category: 'Business', content: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
        { id: 3, category: 'Motivation', content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    ]


    return (
        <div className={`min-h-screen bg-gray-100 ${darkMode ? 'dark' : ''} transition-colors duration-200`}>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">대시보드</h1>

                <div className="mb-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search inspirations..."
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                </div>

                <nav className="mb-8">
                    <ul className="flex space-x-4 overflow-x-auto">
                        {categories.map((category) => (
                            <li key={category}>
                                <button className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 transition-colors duration-200">
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {inspirations.map((inspiration) => (
                        <div key={inspiration.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">{inspiration.category}</p>
                            <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">{inspiration.content}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">- {inspiration.author}</p>
                            <div className="flex justify-between items-center">
                                <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <Bookmark className="h-5 w-5" />
                                </button>
                                <button className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                                    <Share2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}