import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Brew & Bean</h1>
          <p className={styles.heroSubtitle}>Where Every Cup Tells a Story</p>
          <p className={styles.heroDescription}>
            Experience the perfect blend of premium coffee, cozy atmosphere, and warm hospitality. 
            From our carefully sourced beans to our expertly crafted beverages, we're passionate 
            about delivering an exceptional coffee experience that brings people together.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/menu" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
              Explore Our Menu
            </Link>
            <Link href="/about" className={`${styles.ctaButton} ${styles.ctaSecondary}`}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className={styles.featured}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 className={styles.sectionTitle}>Why Choose Brew & Bean?</h2>
          <div className={styles.featuredGrid}>
            <div className={styles.featuredCard}>
              <span className={styles.cardIcon}>☕</span>
              <h3 className={styles.cardTitle}>Premium Coffee</h3>
              <p className={styles.cardDescription}>
                We source the finest beans from around the world and roast them to perfection 
                in-house, ensuring every cup delivers exceptional flavor and aroma.
              </p>
              <Link href="/menu" className={styles.cardButton}>View Menu</Link>
            </div>
            
            <div className={styles.featuredCard}>
              <span className={styles.cardIcon}>🏠</span>
              <h3 className={styles.cardTitle}>Cozy Atmosphere</h3>
              <p className={styles.cardDescription}>
                Our warm, inviting space is designed to be your home away from home. 
                Perfect for work, study, or simply relaxing with friends and family.
              </p>
              <Link href="/about" className={styles.cardButton}>Learn More</Link>
            </div>
            
            <div className={styles.featuredCard}>
              <span className={styles.cardIcon}>👥</span>
              <h3 className={styles.cardTitle}>Community Focus</h3>
              <p className={styles.cardDescription}>
                We're more than just a coffee shop - we're a gathering place for our community. 
                Join us for events, meetups, and the simple joy of great coffee.
              </p>
              <Link href="/contact" className={styles.cardButton}>Get Involved</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Happy Customers Daily</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Coffee Varieties</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Locally Sourced</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
