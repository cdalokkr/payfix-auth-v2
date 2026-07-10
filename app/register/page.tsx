import Link from 'next/link';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const steps = ['Personal', 'Company', 'Workspace', 'Security', 'Finish'];

export default function RegisterPage() {
  return (
    <AuthShell title="Create account" subtitle="Set up your PayFix workspace in a few quick steps.">
      <div className="mb-6 flex flex-wrap gap-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              index === 0 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {index + 1}. {step}
          </div>
        ))}
      </div>

      <form className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="firstName">
              First name
            </label>
            <Input id="firstName" placeholder="Praveen" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="lastName">
              Last name
            </label>
            <Input id="lastName" placeholder="Kumar" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="company">
            Company name
          </label>
          <Input id="company" placeholder="Corebit Digital" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            Email address
          </label>
          <Input id="email" type="email" placeholder="name@company.com" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="confirmPassword">
              Confirm password
            </label>
            <Input id="confirmPassword" type="password" placeholder="Repeat password" />
          </div>
        </div>

        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
          <span>
            I agree to the terms and understand the workspace setup will continue in the next step.
          </span>
        </label>

        <Button type="submit" className="w-full">
          Continue
        </Button>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            Sign in
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
