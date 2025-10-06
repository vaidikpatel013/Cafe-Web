import styles from '../app/layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Brew & Bean</h3>
            <p>
              Your neighborhood coffee haven where every cup tells a story. 
              We're passionate about bringing you the finest coffee experience 
              with a warm, welcoming atmosphere.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <p><a href="/menu">Our Menu</a></p>
            <p><a href="/about">About Us</a></p>
            <p><a href="/contact">Contact</a></p>
            <p><a href="#location">Location</a></p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Contact Info</h3>
            <p>📍 123 Coffee Street, Bean City</p>
            <p>📞 (555) 123-BREW</p>
            <p>✉️ hello@brewandbean.com</p>
            <p>🕒 Mon-Fri: 6AM-8PM<br />Sat-Sun: 7AM-9PM</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Follow Us</h3>
            <p><a href="#">Instagram</a></p>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Twitter</a></p>
            <p><a href="#">TikTok</a></p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Brew & Bean. All rights reserved. Made with ☕ and ❤️</p>
        </div>
      </div>
    </footer>
  );
}
