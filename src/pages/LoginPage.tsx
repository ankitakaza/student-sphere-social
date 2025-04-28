
import { Link } from "react-router-dom";
import AuthForm from "@/components/auth/AuthForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary to-secondary p-8 text-white flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-6">StudentSphere</h1>
          <p className="text-xl mb-8">Connect, collaborate, and stay updated with everything happening on your campus!</p>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Stay Connected</h3>
                <p>Get real-time updates about campus events and announcements</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Discover Clubs</h3>
                <p>Find and join clubs and societies that match your interests</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Never Miss Events</h3>
                <p>Track all university events and get reminders for ones you're attending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="md:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">StudentSphere</h1>
            <p className="text-muted-foreground">Your complete campus social platform</p>
          </div>
          <AuthForm />
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>By signing in, you agree to our <Link to="/terms" className="underline text-foreground">Terms of Service</Link> and <Link to="/privacy" className="underline text-foreground">Privacy Policy</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
