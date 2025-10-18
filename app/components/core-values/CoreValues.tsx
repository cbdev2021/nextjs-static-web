'use client';
import { useEffect, useRef } from 'react';
import styles from './CoreValues.module.css';
import 'font-awesome/css/font-awesome.min.css';

export default function CoreValues() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add(styles['fade-in']);
                        }, index * 300);
                    }
                });
            },
            { threshold: 0.3 }
        );

        cardsRef.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles['core-values-container']}>
            <div 
                className={styles['us']}
                ref={(el) => { cardsRef.current[0] = el; }}
            >
                <i className={`${styles['us-icon']} fa fa-home cards-hover`}></i>
                <h3 className={styles['us-title']}>About Us</h3>
                <p className={styles['us-text']}>Premier IT consultancy specializing in enterprise digital transformation and strategic technology solutions for Fortune 500 companies.</p>
            </div>

            <div 
                className={styles['mision']}
                ref={(el) => { cardsRef.current[1] = el; }}
            >
                <i className={`${styles['mision-icon']} fa fa-rocket`}></i>
                <h3 className={styles['mision-title']}>Mission</h3>
                <p className={styles['mision-text']}>Accelerate business growth through strategic technology solutions that deliver measurable ROI and sustainable competitive advantage.</p>
            </div>

            <div 
                className={styles['vision']}
                ref={(el) => { cardsRef.current[2] = el; }}
            >
                <i className={`${styles['vision-icon']} fa fa-globe`}></i>
                <h3 className={styles['vision-title']}>Vision</h3>
                <p className={styles['vision-text']}>Leading digital innovation partner for enterprise clients across North and Latin America, recognized for excellence in strategic technology consulting.</p>
            </div>
 
        </div>
    );
}