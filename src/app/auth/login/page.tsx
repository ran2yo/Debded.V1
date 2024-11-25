'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'  // Changed from next/router
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Separator } from '@/components/ui/Separator'
import { EyeIcon, EyeOffIcon, Github, Mail } from 'lucide-react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        try {
            // TODO: Implement actual login logic
            console.log('Login attempt with:', { email, password })
            // Simulating an API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            // If login is successful, redirect to dashboard
            router.push('/dashboard')
        } catch (err) {
            console.error('로그인 오류:', err)
            setError('로그인에 실패했습니다. 다시 시도해주세요.')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">로그인</h1>

                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                    <div>
                        <Label htmlFor="email">이메일</Label>
                        <Input
                            type="email"
                            placeholder="이메일을 입력하세요"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">비밀번호</Label>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="비밀번호를 입력하세요"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
                            >
                                {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                    </div>
                    <Button type="submit" className="w-full" aria-label="이메일로 로그인">
                        <Mail className="w-5 h-5 mr-2" />
                        이메일로 로그인
                    </Button>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">또는</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                            // TODO: Implement Google login
                            console.log('Google login')
                        }}
                        aria-label="Google로 로그인"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                            />
                        </svg>
                        Google로 로그인
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                            // TODO: Implement GitHub login
                            console.log('GitHub login')
                        }}
                        aria-label="GitHub로 로그인"
                    >
                        <Github className="w-5 h-5 mr-2" />
                        GitHub로 로그인
                    </Button>
                </div>

                <div className="mt-6 text-center">
                    <Link href="/auth/register" className="text-sm text-indigo-600 hover:underline">
                        계정이 없으신가요? 회원가입
                    </Link>
                </div>
            </div>
        </div>
    )
}