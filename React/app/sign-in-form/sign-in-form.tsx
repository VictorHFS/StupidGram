import { useState } from 'react';
import { Link } from 'react-router';
import './sign-in-form.css';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    // In a real application, you would send this data to a backend server.
    // For demonstration, we'll just log it.
    console.log('Attempting to sign in with:', { email, password });

    // Simulate an API call
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password123') {
        alert('Sign-in successful!');
        // Here you would typically redirect the user or update global state
      } else {
        setErrorMessage('Invalid email or password.');
      }
    }, 1000); // Simulate network delay
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Sign In</button>
      <p className="forgot-password">
        <Link to='/forgot-password'>Forgot Password?</Link>
      </p>
      <p className="signup-link">
        Don't have an account? <a href="#signup">Sign Up</a>
      </p>
    </form>
  );
}

export default SignInForm;