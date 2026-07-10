import Link from 'next/link';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';

export default function VerifyEmailPage() {
  return (
    <AuthShell title="Verify email" subtitle="Check your inbox and confirm your email address.">
      <div className="flex flex-col gap-5">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
          We have sent a verification link to your email. Click the link to activate your account.
        </div>

        <Button type="button" className="w-full">
          Resend email
        </Button>

        <p className="text-center text-sm text-slate-600">
          Wrong account?{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            Sign in again
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
