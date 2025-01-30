import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* <LoginForm /> */}
        <Link href={"https://finarchitect.netlify.app/login"} />
      </div>
    </div>
  );
}
