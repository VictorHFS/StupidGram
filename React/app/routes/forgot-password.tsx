import ForgotPasswordForm from "~/forgot-password-form/forgot-password-form"; // Adjust path
import type { Route } from "./+types/home";

export function meta() {
  return [{ title: "StupidGram - Forgot Password" }];
}

export default function ForgotPasswordRoute() {
  return (
    <section className="forgot-password-section">
      <ForgotPasswordForm />
    </section>
  );
}