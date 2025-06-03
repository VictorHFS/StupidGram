
import { useState } from 'react';
import './forgot-password-form.css';

function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        setIsError(false); // Clear previous error state

        if (!email) {
            setMessage('Please enter your email address.');
            setIsError(true);
            return;
        }

        // Basic email format validation (can be more robust)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMessage('Please enter a valid email address.');
            setIsError(true);
            return;
        }

        setIsLoading(true);

        // Simulate an API call to send a password reset email
        console.log(`Sending password reset link to: ${email}`);
        setTimeout(() => {
            setIsLoading(false);
            // In a real application, you'd check the API response here
            // For demonstration, we'll assume success for any valid-looking email
            setMessage('If an account with that email exists, a password reset link has been sent to your inbox.');
            setIsError(false);
            setEmail(''); // Clear the email input
        }, 2000); // Simulate network delay
    };

    return (

        <div className="forgot-password-container">
            <h2>Forgot Your Password?</h2>
            <p>Enter your email address below and we'll send you a link to reset your password.</p>
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                {message && (
                    <p className={`form-message ${isError ? 'error-message' : 'success-message'}`}>
                        {message}
                    </p>
                )}
                <div className="form-group">
                    <label htmlFor="forgot-email">Email Address:</label>
                    <input
                        type="email"
                        id="forgot-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                    />
                </div>
                <button type="submit" className="submit-button" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
                <p className="back-to-signin">
                    Remembered your password? <a href="/">Sign In</a>
                </p>
            </form>
        </div>
    );
}

export default ForgotPasswordForm;