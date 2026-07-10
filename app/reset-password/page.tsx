import Link from 'next/link';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ResetPasswordPage() {
  return (
    <AuthShell title="Reset password" subtitle="Choose a new secure password for your account.">
      <form className="flex flex-col gap-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="password">
            New password
          </label>
          <Input id="password" type="password" placeholder="Create a new password" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="confirmPassword">
            Confirm password
          </label>
          <Input id="confirmPassword" type="password" placeholder="Repeat new password" />
        </div>

        <Button type="submit" className="w-full">
          Update password
        </Button>

        <p className="text-center text-sm text-slate-600">
          Return to{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            sign in
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
