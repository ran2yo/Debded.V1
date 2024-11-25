'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Lightbulb, Search, Moon, Sun, User, LogOut, LayoutDashboard } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'

export default function Header() {
    const pathname = usePathname()
    const isAuthPage = pathname?.startsWith('/auth/')
    const { user, darkMode, toggleDarkMode, logout } = useApp()
    const [showProfileMenu, setShowProfileMenu] = useState(false)

    return (
        <header className="bg-white shadow-sm dark:bg-gray-800 transition-colors duration-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Lightbulb className="h-8 w-8 text-indigo-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Devbded</span>
                        </Link>
                        {user && (
                            <div className="hidden ml-10 lg:block">
                                <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                    대시보드
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search inspirations..."
                                        className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                                <button
                                    onClick={toggleDarkMode}
                                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                    aria-label={darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
                                >
                                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                </button>
                                <div className="relative">
                                    <button
                                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                        aria-label="프로필 메뉴"
                                    >
                                        <User className="h-5 w-5" />
                                    </button>
                                    {showProfileMenu && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
                                            <p className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{user.name}</p>
                                            <p className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                                            <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <LayoutDashboard className="inline-block h-4 w-4 mr-2" />
                                                대시보드
                                            </Link>
                                            <button
                                                onClick={logout}
                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                                            >
                                                <LogOut className="h-4 w-4 mr-2" />
                                                로그아웃
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : !isAuthPage && (
                            <div className="ml-10 space-x-4">
                                <Link href="/auth/login" className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                                    로그인
                                </Link>
                                <Link href="/auth/register" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700">
                                    회원가입
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                {user && (
                    <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                        <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            대시보드
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}