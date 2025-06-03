import SignInForm from '~/sign-in-form/sign-in-form';
import './landing-page.css';


function LandingPage() {
    return (
        <div className="landing-page">
            <header className="landing-page-header">
                <h1>StupidGram</h1>
                <p>share your daily life.</p>
            </header>
            <main className="landing-page-main">
                <section className="hero-section">
                    <h2>Engage with your friends</h2>
                    <p>Sign in now.</p>
                    <img src="https://via.placeholder.com/400x200?text=Awesome+Feature" alt="Awesome Feature" className="feature-image" />
                </section>
                <section className="signin-section">
                    <h2>Sign In</h2>
                    <SignInForm />
                </section>
            </main>
            <footer className="landing-page-footer">
                <p>&copy; 2025 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;