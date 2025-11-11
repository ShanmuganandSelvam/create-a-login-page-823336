import { useState } from 'react';
import { useThemeColors } from '../hooks/use-cloudfront-theme';
import { bayerSansClasses } from '../lib/bayer-sans';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const colors = useThemeColors();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <LogIn 
              size={48} 
              style={{ color: colors.primary('600') }}
              className="mx-auto"
            />
          </div>
          <h2 className={`${bayerSansClasses.heading.h2} mt-6 text-center`}>
            Sign in to your account
          </h2>
          <p className={`${bayerSansClasses.body.base} mt-2 text-center text-gray-600`}>
            Enter your credentials to access your account
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className={`${bayerSansClasses.body.small} block text-gray-700`}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className={`${bayerSansClasses.body.small} block text-gray-700`}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className={`${bayerSansClasses.body.small} ml-2 block text-gray-900`}>
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a 
                href="#" 
                style={{ color: colors.primary('600') }}
                className="hover:underline font-medium"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              style={{ 
                backgroundColor: colors.primary('600'),
                color: colors.primary('50')
              }}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:opacity-90 transition-opacity"
            >
              Sign in
            </button>
          </div>

          <div className="text-center">
            <p className={`${bayerSansClasses.body.small} text-gray-600`}>
              Don't have an account?{' '}
              <a 
                href="#" 
                style={{ color: colors.primary('600') }}
                className="hover:underline font-medium"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}