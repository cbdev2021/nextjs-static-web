'use client'
import { useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

export default function Carousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentLogoCicleIndex, setCurrentLogoCicleIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [reloadBar, setReloadBar] = useState(false);
    // const [intervalId, setIntervalId] = useState(null);
    const [intervalId, setIntervalId] = useState<number | NodeJS.Timeout>(0);  // Cambiado el tipo de estado


    const imagesList = [
        'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    const textList = [
        "Transforming Enterprise Operations Through Strategic Technology Solutions",
        "Accelerating Digital Innovation & Competitive Market Advantage",
        "Delivering Scalable Infrastructure & Seamless System Integration",
        "Optimizing Business Performance Through Data-Driven Intelligence"
    ];

    const logoCicle = [
        "ENTERPRISE SOLUTIONS",
        "DIGITAL TRANSFORMATION",
        "TECHNOLOGY CONSULTING",
        "STRATEGIC INNOVATION"
    ];

    const prevImage = () => {
        if (isAnimating) return;  // Prevent clicking while animation is running

        setIsAnimating(true);
        setReloadBar(true);

        setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
        setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1);

        setCurrentLogoCicleIndex(prevValue => prevValue === 0 ? logoCicle.length - 1 : prevValue - 1);
    };

    const nextImage = () => {
        if (isAnimating) return;  // Prevent clicking while animation is running

        setIsAnimating(true);
        setReloadBar(true);

        setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
        setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1);

        setCurrentLogoCicleIndex(prevValue => prevValue === logoCicle.length - 1 ? 0 : prevValue + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                nextImage();  // Only run nextImage if not animating
            }
        }, 8000);

        setIntervalId(interval);

        return () => {
            clearInterval(interval);
        };
    }, [isAnimating]);

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 1000); // Wait for animation to finish
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    useEffect(() => {
        if (reloadBar) {
            const timer = setTimeout(() => setReloadBar(false), 50);
            return () => clearTimeout(timer);
        }
    }, [reloadBar]);

    return (
        <div className={styles['carousel-container']}>
            <div className={styles['image-container']}>
                <div className={styles['custom-image']}>
                    <div
                        className={`${styles['image-slide']} ${isAnimating ? styles['slide-animation'] : ''}`}
                        style={{
                            transform: `translateX(-${currentImage * 100}%)`,
                            transition: isAnimating ? 'transform 1s ease-in-out' : 'none'
                        }}
                    >
                        {imagesList.map((image, index) => (
                            <div key={index} className={styles['image-wrapper']}>
                                <Image
                                    src={image}
                                    width={1024}
                                    height={540}
                                    alt="Carousel image"
                                    layout="responsive"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles['loading-bar']} key={reloadBar ? 'reload' : 'no-reload'}></div>

                <div className={styles['split-text-container']}>
                    <span className={`${styles['text-part']} ${styles['fade-in']}`} key={currentTextIndex}>
                        {textList[currentTextIndex]}
                    </span>
                </div>

                <div className={styles['split-logo']}>
                    <span className={`${styles['text-part']} ${styles['fade-top']}`} key={currentLogoCicleIndex}>
                        {logoCicle[currentLogoCicleIndex]}
                    </span>
                </div>

                <div className={styles['arrow-container']}>
                    <i
                        className={`${styles['arrow-left']} fa fa-chevron-left`}
                        onClick={prevImage}
                    ></i>
                    <i
                        className={`${styles['arrow-right']} fa fa-chevron-right`}
                        onClick={nextImage}
                    ></i>
                </div>
            </div>
        </div>
    );
}


// 'use client'
// import { useEffect, useState } from 'react';
// import styles from './Carousel.module.css';
// import Image from 'next/image';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Carousel() {
//     const [currentImage, setCurrentImage] = useState(0);
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const [currentLogoCicleIndex, setCurrentLogoCicleIndex] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);  // New state for animation
//     const [reloadBar, setReloadBar] = useState(false);  // New state for reloading the loading bar


//     const imagesList = [
//         'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     ];

//     const textList = [
//         "Custom tools to optimize your business.",
//         "Strategic solutions aligning technology with goals.",
//         "Driving business forward with innovation.",
//         "Connecting platforms for efficient operations."
//     ];

//     const logoCicle = [
//         "〄M&C",
//         "〄M&C",
//         "〄M&C",
//         "〄M&C"
//     ];

//     const prevImage = () => {
//         setIsAnimating(true);
//         setReloadBar(true); 

//         setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
//         setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1);

//         setCurrentLogoCicleIndex(prevValue => prevValue === 0 ? logoCicle.length - 1 : prevValue - 1);
//     };

//     const nextImage = () => {
//         setIsAnimating(true);
//         setReloadBar(true); 

//         setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
//         setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1);

//         setCurrentLogoCicleIndex(prevValue => prevValue === logoCicle.length - 1 ? 0 : prevValue + 1);

//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextImage();
//         }, 8000);

//         return () => {
//             clearInterval(interval);
//         };
//     }, [nextImage]);

//     useEffect(() => {
//         if (isAnimating) {
//             const timer = setTimeout(() => setIsAnimating(false), 1000); // Reset animation state after the transition
//             return () => clearTimeout(timer);
//         }
//     }, [isAnimating]);

//     // Reset the reloadBar state after a short delay to allow the animation to restart
//     useEffect(() => {
//         if (reloadBar) {
//             const timer = setTimeout(() => setReloadBar(false), 50); // Delay for a smooth reset
//             return () => clearTimeout(timer);
//         }
//     }, [reloadBar]);

//     return (
//         <div className={styles['carousel-container']}>
//             <div className={styles['image-container']}>
//                 <div className={styles['custom-image']}>
//                     <div
//                         className={`${styles['image-slide']} ${isAnimating ? styles['slide-animation'] : ''}`}
//                         style={{
//                             transform: `translateX(-${currentImage * 100}%)`, // Move images horizontally
//                             transition: isAnimating ? 'transform 1s ease-in-out' : 'none' // Smooth transition for the sliding effect
//                         }}
//                     >
//                         {imagesList.map((image, index) => (
//                             <div key={index} className={styles['image-wrapper']}>
//                                 <Image
//                                     src={image}
//                                     width={1024}
//                                     height={540}
//                                     alt="Carousel image"
//                                     layout="responsive"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* <div className={styles['loading-bar']}></div> */}

//                 <div 
//                     className={styles['loading-bar']} 
//                     key={reloadBar ? 'reload' : 'no-reload'}  // Cambiar clave para reiniciar la animación
//                 ></div>


//                 <div className={styles['split-text-container']}>
//                     <span
//                         className={`${styles['text-part']} ${styles['fade-in']}`}
//                         key={currentTextIndex}
//                     >
//                         {textList[currentTextIndex]}
//                     </span>
//                 </div>

//                 <div className={styles['split-logo']}>
//                     <span
//                         className={`${styles['text-part']} ${styles['fade-top']}`}
//                         key={currentLogoCicleIndex}
//                     >
//                         {logoCicle[currentLogoCicleIndex]}

//                     </span>
//                 </div>

//                 <div className={styles['arrow-container']}>
//                     <i
//                         className={`${styles['arrow-left']} fa fa-chevron-left`}
//                         onClick={prevImage}
//                     ></i>
//                     <i
//                         className={`${styles['arrow-right']} fa fa-chevron-right`}
//                         onClick={nextImage}
//                     ></i>
//                 </div>
//             </div>
//         </div>
//     );
// }