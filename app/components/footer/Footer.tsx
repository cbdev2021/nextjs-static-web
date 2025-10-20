'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './Footer.module.css'

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <div ref={ref} className={`${styles['footer-container']} scroll-reveal fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className={styles['boxes-container']}>
                <div className={styles['footer-box']}>
                    <h3 className={styles['tittle']}>About Us</h3>
                    <p>About us</p>
                    <p>Contact</p>
                </div>

                <div className={styles['footer-box']}>
                    <h3  className={styles['tittle']}>Terms</h3>
                    <p>Service Terms</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>

                <div className={styles['footer-box']}>
                    <h3  className={styles['tittle']}>Resources</h3>
                    <p>Frequent Ask</p>
                    <p>Other Services</p>
                </div>

                <div className={`${styles['footer-box']} ${styles['follow']}`}>
                    <h3  className={styles['tittle']}>Follow us</h3>
                    <div className={styles['icons']}>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-youtube"></i>
                        <i className="fa fa-twitter"></i>
                    </div>
                </div>
                <span className={styles['divider']}>
                </span>
            </div>

            <div className={styles['year-message']}>
                <p>© M&C 2025 | All rights reserved</p>
            </div>
        </div>
    );
}