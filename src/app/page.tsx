import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Lightbulb, Users, Target, Sparkles } from 'lucide-react'
import FAQ from '@/components/FAQ'



interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}


function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 transition-transform duration-300 ease-in-out group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-medium text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-indigo-600">{title}</h3>
      <p className="mt-2 text-base text-gray-500 text-center">{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-b from-white to-gray-100">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to Devbded</span>
            <span className="block text-indigo-600">Your Daily Dose of Inspiration</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Devbded is a tailored inspiration platform for developers and entrepreneurs. Discover new ideas and insights every day.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/auth/login" passHref>
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  GetStarted
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Devbded?
          </h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Lightbulb className="h-6 w-6" />}
              title="Daily Inspiration"
              description="Receive tailored inspiration based on your interests every day."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Community Sharing"
              description="Share your ideas and get inspired by others in our vibrant community."
            />
            <FeatureCard
              icon={<Target className="h-6 w-6" />}
              title="Goal Tracking"
              description="Set personal and professional goals, and track your progress over time."
            />
          </div>
        </div>

        <div className="mt-24">
          <FAQ />
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Get Inspired?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join Devbded today and start your journey towards daily inspiration and growth.
          </p>
          <div className="mt-8">
            <Link href="/auth/register" passHref>
              <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                지금 가입하기
                <Sparkles className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}