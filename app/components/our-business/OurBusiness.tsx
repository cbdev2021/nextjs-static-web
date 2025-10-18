
'use client';
import { useEffect, useRef } from 'react';
import styles from './OurBusiness.module.css'
import 'font-awesome/css/font-awesome.min.css';

export default function OurBusiness() {
    const statsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add(styles['fade-in']);
                        }, index * 200);
                    }
                });
            },
            { threshold: 0.3 }
        );

        statsRef.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles['our-business-container']}>
            <div className={styles['hero-section']}>
                <h3 className={styles['tittle']}>About M&C</h3>
                <i className={`${styles['icon']} fa fa-lightbulb-o`}></i>
                <span className={styles['divider']}></span>
                <p className={styles['description']}>"We don't just deliver technology solutions—we architect digital transformations that drive measurable business outcomes and sustainable competitive advantage."</p>
            </div>
            
            <div className={styles['stats-container']}>
                <div 
                    className={styles['stat-card']}
                    ref={(el) => { statsRef.current[0] = el; }}
                >
                    <i className={`${styles['stat-icon']} fa fa-trophy`}></i>
                    <h4 className={styles['stat-number']}>5+</h4>
                    <p className={styles['stat-label']}>Years of Excellence</p>
                </div>
                <div 
                    className={styles['stat-card']}
                    ref={(el) => { statsRef.current[1] = el; }}
                >
                    <i className={`${styles['stat-icon']} fa fa-rocket`}></i>
                    <h4 className={styles['stat-number']}>100+</h4>
                    <p className={styles['stat-label']}>Projects Delivered</p>
                </div>
                <div 
                    className={styles['stat-card']}
                    ref={(el) => { statsRef.current[2] = el; }}
                >
                    <i className={`${styles['stat-icon']} fa fa-users`}></i>
                    <h4 className={styles['stat-number']}>98%</h4>
                    <p className={styles['stat-label']}>Client Satisfaction</p>
                </div>
            </div>
        </div>
    );
};