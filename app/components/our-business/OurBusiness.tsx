
import styles from './OurBusiness.module.css'
import 'font-awesome/css/font-awesome.min.css';

export default function OurBusiness() {
    return (
        <div className={styles['our-business-container']}>
            <h3 className={styles['tittle']}> Our Company </h3>
            <i className={`${styles['icon']} fa fa-building `}></i>
            <span className={styles['divider']}>
            </span>
            <p className={styles['description']}>"Coming up with business ideas is easy. The real challenge lies in executing them in the real world." </p>
        </div>
    );
};