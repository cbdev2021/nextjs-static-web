'use client'

import Image from 'next/image';
import styles from './Contact.module.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    return (
        <div className={styles['contact-container']}>
            <div className={styles['upper']}>
                <h3 className={styles['tittle']}>Get your first consultation 100% free! Contact us!</h3>
                <i className={`${styles['icon']} fa fa-users`}></i>
                <span className={styles['divider']}>
                </span>
            </div>

            <div className={styles['sub-container']}>
                <div className={styles['info']}>
                    <Image
                        src="https://media.istockphoto.com/id/481447633/photo/using-smart-phone.jpg?s=1024x1024&w=is&k=20&c=jpzy9UqYI_dIhocc-wQFv5gtcdOnJYkwXp40NXLWHRw="
                        alt="Imagen del carrusel"
                        width={600} 
                        height={400}
                        layout="intrinsic"
                        style={{
                            width: '100%',  
                            display: 'block', 
                            marginLeft: 'auto', 
                            marginRight: 'auto', 
                            borderRadius: 10
                        }}
                    />

                    <div>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center', marginTop:'15px' }}>
                            <i className="fa fa-phone" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>+1234 5347 2245</span>
                        </p>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa fa-phone" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>+1234 8154 9306</span>
                        </p>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa fa-envelope" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>contact@mc.company</span>
                        </p>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa fa-envelope" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>customers@mc.company</span>
                        </p>
                        <p style={{ borderBottom: '2px solid #525252', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <i className="fa fa-map-marker" style={{ width: '30px', textAlign: 'center' }}></i>
                            <span style={{ paddingLeft: '5px' }}>70 Street, St. Lewis, Texas.</span>
                        </p>
                    </div>       
                </div>

                <div className={styles['form']}>

                    <form>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formName">Name</label>
                            <input
                                type="text"
                                id="formName"
                                className="form-control"
                                placeholder="Your Name"
                            />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formEmail">Email address</label>
                            <input
                                type="email"
                                id="formEmail"
                                className="form-control"
                                placeholder="Your Email"
                            />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formPhone">Phone</label>
                            <input
                                type="tel"
                                id="formPhone"
                                className="form-control"
                                placeholder="Your Phone Number"
                            />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formSubject">Subject</label>
                            <input
                                type="text"
                                id="formSubject"
                                className="form-control"
                                placeholder="Subject"
                            />
                        </div>
            
                        <div data-mdb-input-init className="form-outline mb-4">
                            <label className="form-label" htmlFor="formMessage">Message</label>
                            <textarea
                                id="formMessage"
                                className="form-control"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button
                            data-mdb-ripple-init
                            type="submit"
                            className="btn btn-primary btn-block"
                            style={{ backgroundColor: '#28a745' }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}