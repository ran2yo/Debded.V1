import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    {
        variants: {
            variant: {
                default: 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-indigo-500',
                destructive: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-red-500',
                outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 focus:ring-indigo-500',
                secondary: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:shadow-md hover:-translate-y-0.5 focus:ring-indigo-500',
                ghost: 'bg-transparent text-gray-700 hover:bg-gray-50 hover:shadow-sm hover:-translate-y-0.5 focus:ring-indigo-500',
                link: 'bg-transparent text-indigo-600 hover:underline hover:-translate-y-0.5 focus:ring-indigo-500',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-11 px-8 rounded-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(
                    buttonVariants({ variant, size, className }),
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105'
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

