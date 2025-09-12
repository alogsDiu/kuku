import Link from 'next/link'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            <Link href="/" className={styles.logo}>
              JobBet
            </Link>
            <div className={styles.navLinks}>
              <Link
                href="/auth/signin"
                className={styles.navLink}
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className={styles.navButton}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            About JobBet
          </h1>
          <p className={styles.heroSubtitle}>
            Revolutionizing the future of recruitment and career predictions through 
            blockchain technology and community wisdom.
          </p>
        </div>

        {/* Mission Section */}
        <div className={styles.mission}>
          <h2 className={styles.missionTitle}>
            Our Mission
          </h2>
          <p className={styles.missionText}>
            To create a transparent, decentralized platform where anyone can predict 
            and invest in career success, while helping job seekers get discovered 
            based on market confidence.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <span>🎯</span>
              </div>
              <h3 className={styles.featureTitle}>Accuracy</h3>
              <p className={styles.featureDescription}>Leverage collective intelligence for precise predictions</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <span>⚡</span>
              </div>
              <h3 className={styles.featureTitle}>Speed</h3>
              <p className={styles.featureDescription}>Built on Solana for instant transactions</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <span>🌐</span>
              </div>
              <h3 className={styles.featureTitle}>Accessibility</h3>
              <p className={styles.featureDescription}>Global access to career investment opportunities</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            How JobBet Works
          </h2>
          <div className={styles.howItWorks}>
            <div>
              <h3 className={styles.columnTitle}>For Predictors</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.checkmark}>✓</span>
                  Analyze job seeker profiles and market trends
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkmark}>✓</span>
                  Place bets using SOL tokens on potential hires
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkmark}>✓</span>
                  Earn rewards for accurate predictions
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkmark}>✓</span>
                  Build reputation as a skilled talent spotter
                </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.columnTitle}>For Job Seekers</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.checkmark}>✓</span>
                  Get discovered based on market confidence
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkmark}>✓</span>
                  Receive attention from employers and investors
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkmark}>✓</span>
                  Build credibility through community validation
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkmark}>✓</span>
                  Potential to earn from successful placements
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Solana */}
        <div className={styles.solana}>
          <h2 className={styles.solanaTitle}>
            Powered by Solana
          </h2>
          <p className={styles.solanaText}>
            We chose Solana for its unmatched speed, low costs, and scalability - 
            essential for a global prediction market.
          </p>
          <div className={styles.solanaFeatures}>
            <div className={styles.solanaFeature}>
              <div className={styles.solanaIcon}>
                <span>⚡</span>
              </div>
              <h3 className={styles.solanaFeatureTitle}>65,000 TPS</h3>
              <p className={styles.solanaFeatureDescription}>Lightning-fast transactions</p>
            </div>
            <div className={styles.solanaFeature}>
              <div className={styles.solanaIcon}>
                <span>💸</span>
              </div>
              <h3 className={styles.solanaFeatureTitle}>$0.0001 Fees</h3>
              <p className={styles.solanaFeatureDescription}>Near-zero transaction costs</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Ready to Join the Future?
          </h2>
          <p className={styles.ctaText}>
            Start predicting career success or get discovered today
          </p>
          <div className={styles.ctaButtons}>
            <Link
              href="/auth/signup"
              className={styles.ctaButtonPrimary}
            >
              Create Account
            </Link>
            <Link
              href="/auth/signin"
              className={styles.ctaButtonSecondary}
            >
              Sign In
            </Link>
          </div>
          <p className={styles.ctaFooter}>
            Already have an account?{' '}
            <Link href="/auth/signin" className={styles.ctaLink}>
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>
            © 2024 JobBet. Built on Solana — Transforming career predictions through blockchain technology.
          </p>
        </div>
      </footer>
    </div>
  )
}