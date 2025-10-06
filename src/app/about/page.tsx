import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Story</h1>
            <p className={styles.heroSubtitle}>
              From a small dream to your favorite neighborhood coffee haven
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.story}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2 className={styles.sectionTitle}>How It All Began</h2>
              <p className={styles.storyParagraph}>
                Brew & Bean was born from a simple passion: the love of exceptional coffee and 
                the desire to create a space where community thrives. Founded in 2009 by coffee 
                enthusiasts Sarah and Michael, our journey began in a small corner shop with 
                just a dream and a commitment to quality.
              </p>
              <p className={styles.storyParagraph}>
                What started as a humble coffee cart has grown into a beloved neighborhood 
                institution, but our core values remain unchanged. We believe that great coffee 
                is more than just a beverage—it's a catalyst for connection, creativity, and 
                community building.
              </p>
              <p className={styles.storyParagraph}>
                Today, we continue to source the finest beans from sustainable farms around 
                the world, roast them to perfection in-house, and serve them with the same 
                warmth and care that has defined us from day one.
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>🏪</span>
                <p>Our Original Location</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>🌱</span>
              <h3 className={styles.valueTitle}>Sustainability</h3>
              <p className={styles.valueDescription}>
                We're committed to environmentally responsible practices, from sourcing 
                fair-trade beans to using compostable packaging and reducing waste.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>🤝</span>
              <h3 className={styles.valueTitle}>Community</h3>
              <p className={styles.valueDescription}>
                We believe in supporting our local community through partnerships, 
                events, and creating a welcoming space for everyone.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>⭐</span>
              <h3 className={styles.valueTitle}>Quality</h3>
              <p className={styles.valueDescription}>
                Every cup is crafted with attention to detail, using only the finest 
                ingredients and time-tested brewing methods.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>💝</span>
              <h3 className={styles.valueTitle}>Passion</h3>
              <p className={styles.valueDescription}>
                Our love for coffee drives everything we do, from bean selection to 
                customer service and community engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.team}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <span className={styles.photoIcon}>👩‍💼</span>
              </div>
              <h3 className={styles.memberName}>Sarah Johnson</h3>
              <p className={styles.memberRole}>Co-Founder & Head Roaster</p>
              <p className={styles.memberBio}>
                Sarah's passion for coffee began during her travels through Central America. 
                She brings 15 years of experience in coffee sourcing and roasting.
              </p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <span className={styles.photoIcon}>👨‍💼</span>
              </div>
              <h3 className={styles.memberName}>Michael Chen</h3>
              <p className={styles.memberRole}>Co-Founder & Operations Manager</p>
              <p className={styles.memberBio}>
                Michael handles the day-to-day operations and community outreach. 
                His background in hospitality ensures every customer feels at home.
              </p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <span className={styles.photoIcon}>👩‍🍳</span>
              </div>
              <h3 className={styles.memberName}>Emma Rodriguez</h3>
              <p className={styles.memberRole}>Head Barista & Pastry Chef</p>
              <p className={styles.memberBio}>
                Emma creates our signature drinks and fresh pastries daily. 
                Her artistic flair makes every cup and treat a work of art.
              </p>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className={styles.location}>
          <div className={styles.locationContent}>
            <div className={styles.locationInfo}>
              <h2 className={styles.sectionTitle}>Visit Us</h2>
              <div className={styles.locationDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>123 Coffee Street<br />Bean City, BC 12345</p>
                  </div>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>🕒</span>
                  <div>
                    <h4>Hours</h4>
                    <p>Monday - Friday: 6:00 AM - 8:00 PM<br />
                       Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>📞</span>
                  <div>
                    <h4>Contact</h4>
                    <p>Phone: (555) 123-BREW<br />
                       Email: hello@brewandbean.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.locationMap}>
              <div className={styles.mapPlaceholder}>
                <span className={styles.mapIcon}>🗺️</span>
                <p>Interactive Map</p>
                <small>Click to view directions</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
