'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Get In Touch</h1>
            <p className={styles.heroSubtitle}>
              We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
            </p>
          </div>
        </section>

        <div className={styles.contactContent}>
          {/* Contact Info */}
          <section className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📍</span>
                <h3 className={styles.infoTitle}>Visit Us</h3>
                <p className={styles.infoText}>
                  123 Coffee Street<br />
                  Bean City, BC 12345<br />
                  United States
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📞</span>
                <h3 className={styles.infoTitle}>Call Us</h3>
                <p className={styles.infoText}>
                  (555) 123-BREW<br />
                  (555) 123-2739
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>✉️</span>
                <h3 className={styles.infoTitle}>Email Us</h3>
                <p className={styles.infoText}>
                  hello@brewandbean.com<br />
                  orders@brewandbean.com
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>🕒</span>
                <h3 className={styles.infoTitle}>Hours</h3>
                <p className={styles.infoText}>
                  Mon-Fri: 6:00 AM - 8:00 PM<br />
                  Sat-Sun: 7:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="catering">Catering Request</option>
                  <option value="events">Event Booking</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  rows={6}
                  required
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </section>
        </div>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <h2 className={styles.sectionTitle}>Find Us</h2>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <span className={styles.mapIcon}>🗺️</span>
              <h3>Interactive Map</h3>
              <p>Click to view directions to Brew & Bean</p>
              <div className={styles.mapInfo}>
                <p><strong>Address:</strong> 123 Coffee Street, Bean City, BC 12345</p>
                <p><strong>Parking:</strong> Free street parking available</p>
                <p><strong>Public Transit:</strong> Bus stop 2 blocks away</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you offer catering services?</h3>
              <p className={styles.faqAnswer}>
                Yes! We provide catering for events, meetings, and special occasions. 
                Contact us at least 48 hours in advance for custom orders.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Is there WiFi available?</h3>
              <p className={styles.faqAnswer}>
                Absolutely! We offer free high-speed WiFi for all our customers. 
                Perfect for remote work or studying.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Do you have outdoor seating?</h3>
              <p className={styles.faqAnswer}>
                Yes, we have a beautiful outdoor patio with comfortable seating, 
                perfect for enjoying your coffee in the fresh air.
              </p>
            </div>
            
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Are you pet-friendly?</h3>
              <p className={styles.faqAnswer}>
                We welcome well-behaved pets on our outdoor patio. 
                Please keep your furry friends leashed and clean up after them.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
