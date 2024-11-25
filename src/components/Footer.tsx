'use client'

import Link from 'next/link'
import { Lightbulb } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Link href="/" className="flex items-center">
                            <Lightbulb className="h-8 w-8 text-indigo-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">Devbded</span>
                        </Link>
                        <p className="text-gray-500 text-base">
                            개발자와 기업가를 위한 일일 영감 제공 플랫폼
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">솔루션</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="/features" className="text-base text-gray-500 hover:text-gray-900">
                                            기능
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" className="text-base text-gray-500 hover:text-gray-900">
                                            가격
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">지원</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="/faq" className="text-base text-gray-500 hover:text-gray-900">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                                            문의하기
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">회사</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                                            소개
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                                            블로그
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">법적 고지</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                                            개인정보 처리방침
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                                            이용약관
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; 2024 Devbded. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}