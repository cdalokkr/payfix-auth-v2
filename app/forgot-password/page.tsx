import Link from 'next/link';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPasswordPage() {
  return (
    <AuthShell title="Forgot password" subtitle="Enter your email and we will send a reset link.">
      <form className="flex flex-col gap-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            Email address
          </label>
          <Input id="email" type="email" placeholder="name@company.com" />
        </div>

        <Button type="submit" className="w-full">
          Send reset link
        </Button>

        <p className="text-center text-sm text-slate-600">
          Back to{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            sign in
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
