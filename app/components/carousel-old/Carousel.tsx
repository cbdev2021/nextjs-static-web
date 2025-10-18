'use client'
import { useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

export default function Carousel() {

    const [currentImage, setCurrentImage] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const imagesList = [
        'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    // const textList = [
    //     "Web Apps:  Custom tools to optimize your business.",
    //     "Tech Consulting:  Strategic solutions aligning technology with goals.",
    //     "Digital Transformation:  Driving business forward with innovation.",
    //     "System Integration:  Connecting platforms for efficient operations."
    // ];

    const textList = [
        "Custom tools to optimize your business.",
        "Strategic solutions aligning technology with goals.",
        "Driving business forward with innovation.",
        "Connecting platforms for efficient operations."
    ];

    const prevImage = () => {
        setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
    }

    const nextImage = () => {
        setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
    }

    const prevText = () => {
        setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1);
    }

    const nextText = () => {
        setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
            nextText();
        }, 8000); // Cambia la imagen y el texto cada 3 segundos

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles['carousel-container']}>
            <div className={styles['image-container']}>


                <div className={styles['text-container']}>


                </div>

                {/* <Image
                    src={imagesList[currentImage]}
                    width={1024}
                    height={540}
                    alt="Carousel image"
                    layout="responsive"
                    className={styles['custom-image']}
                /> */}

                <div className={styles['custom-image']}>
                    <Image
                        src={imagesList[currentImage]}
                        width={1024}
                        height={540}
                        alt="Carousel image"
                        layout="responsive"
                        // className={styles['custom-image']}
                    />


                </div>

               <div className={styles['loading-bar']}></div>

                <div className={styles['split-text-container']}>
                     <span className={`${styles['text-part']} ${styles['fade-in']}`} key={currentTextIndex}>
                        {textList[currentTextIndex]}
                    </span> 
               
                </div>
 
                <div className={styles['arrow-container']}>
                    <i
                        className={`${styles['arrow-left']} fa fa-arrow-left`}
                        onClick={prevImage}
                    ></i>
                    <i
                        className={`${styles['arrow-right']} fa fa-arrow-right`}
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
//     const [animationClass, setAnimationClass] = useState('');

//     const imagesList = [
//         'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     ];

//     const textList = [
//         "Empowering your digital presence",
//         "Crafting innovative web experiences",
//         "Web solutions that work for you",
//         "Building the future with technology"
//     ];

//     const prevImage = () => {
//         setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
//     }

//     const nextImage = () => {
//         setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
//     }

//     const prevText = () => {
//         setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1);
//     }

//     const nextText = () => {
//         setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1);
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextImage();
//             nextText();
//         }, 3000); // Cambia la imagen y el texto cada 3 segundos

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     useEffect(() => {
//         // Cambiar la animación cada vez que el texto cambie
//         setAnimationClass('fade-in'); // o 'fade-up' si prefieres el efecto de "subida"
//     }, [currentTextIndex]);

//     return (
//         <div className={styles['carousel-container']}>
//             <div className={styles['image-container']}>
//                 <Image
//                     src={imagesList[currentImage]}
//                     width={1024}
//                     height={540}
//                     alt="Carousel image"
//                     layout="responsive"
//                     className={styles['custom-image']}
//                 />
//                 <div className={styles['split-text-container']}>
//                     <span className={`${styles['text-part']} ${styles[animationClass]}`}>{textList[currentTextIndex]}</span>
//                 </div>
    
//                 <div className={styles['arrow-container']}>
//                     <i
//                         className={`${styles['arrow-left']} fa fa-arrow-left`}
//                         onClick={prevImage}
//                     ></i>
//                     <i
//                         className={`${styles['arrow-right']} fa fa-arrow-right`}
//                         onClick={nextImage}
//                     ></i>
//                 </div>
    
//                 <div className={styles['loading-bar']}></div>
//             </div>
//         </div>
//     );
// }


// 'use client'
// import { useEffect, useState } from 'react';
// import styles from './Carousel.module.css';
// import Image from 'next/image';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Carousel() {

//     const [currentImage, setCurrentImage] = useState(0);
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);

//     const imagesList = [
//         'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     ];

//     const textList = [
//         "Empowering your digital presence",
//         "Crafting innovative web experiences",
//         "Web solutions that work for you",
//         "Building the future with technology"
//     ];

//     const prevImage = () => {
//         setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
//     }

//     const nextImage = () => {
//         setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
//     }

//     const prevText = () => {
//         setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1);
//     }

//     const nextText = () => {
//         setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1);
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextImage();
//             nextText();
//         }, 3000); // Cambia la imagen y el texto cada 3 segundos

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <div className={styles['carousel-container']}>
//             <div className={styles['image-container']}>
//                 <Image
//                     src={imagesList[currentImage]}
//                     width={1024}
//                     height={540}
//                     alt=""
//                     layout="responsive"
//                     className={styles['custom-image']}
//                 />
//                 <div className={styles['split-text-container']}>
//                     {/* <span className={`${styles['text-part']} ${styles['left']}`}>{textList[currentTextIndex].split(" ")[0]}</span>
//                     <span className={`${styles['text-part']} ${styles['right']}`}>{textList[currentTextIndex].split(" ").slice(1).join(" ")}</span> */}

//                     <span className={styles['text-part']}>{textList[currentTextIndex]}</span>
                
//                 </div>
    
//                 <div className={styles['arrow-container']}>
//                     <i
//                         className={`${styles['arrow-left']} fa fa-arrow-left`}
//                         onClick={prevImage}
//                     ></i>
//                     <i
//                         className={`${styles['arrow-right']} fa fa-arrow-right`}
//                         onClick={nextImage}
//                     ></i>
//                 </div>
    
//                 <div className={styles['loading-bar']}></div>
//             </div>
//         </div>
//     );
// }

// 'use client';
// import { useEffect, useState } from 'react';
// import styles from './Carousel.module.css';
// import Image from 'next/image';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Carousel() {

//     const [currentImage, setCurrentImage] = useState(0);
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);

//     const imagesList = [
//         'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     ];

//     const textList = [
//         "Empowering your digital presence",
//         "Crafting innovative web experiences",
//         "Web solutions that work for you",
//         "Building the future with technology"
//     ];

//     const prevImage = () => {
//         setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
//     }

//     const nextImage = () => {
//         setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
//     }

//     const prevText = () => {
//         setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1);
//     }

//     const nextText = () => {
//         setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1);
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextImage();
//             nextText();
//         }, 3000); // Cambia la imagen y el texto cada 3 segundos

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <div className={styles['carousel-container']}>
//             <div className={styles['image-container']}>
//                 <Image
//                     src={imagesList[currentImage]}
//                     width={1024}
//                     height={540}
//                     alt=""
//                     layout="responsive"
//                     className={styles['custom-image']}
//                 />
//                 <div className={styles['split-text-arrow-container']}>
//                     <i
//                         className={`${styles['arrow-left']} fa fa-arrow-left`}
//                         onClick={prevImage}
//                     ></i>

//                     <div className={styles['split-text-container']}>
//                         <span className={`${styles['text-part']} ${styles['left']}`}>
//                             {textList[currentTextIndex].split(" ")[0]}
//                         </span>
//                         <span className={`${styles['text-part']} ${styles['right']}`}>
//                             {textList[currentTextIndex].split(" ").slice(1).join(" ")}
//                         </span>
//                     </div>

//                     <i
//                         className={`${styles['arrow-right']} fa fa-arrow-right`}
//                         onClick={nextImage}
//                     ></i>
//                 </div>
//             </div>

//             <div className={styles['loading-bar']}></div>
//         </div>
//     );
// }




// 'use client'
// import { useEffect, useState } from 'react';
// import styles from './Carousel.module.css';
// import Image from 'next/image';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Carousel() {

//     const [currentImage, setCurrentImage] = useState(0);
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);

//     const imagesList = [
//         'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     ];

//     const textList = [
//         "Empowering your digital presence",
//         "Crafting innovative web experiences",
//         "Web solutions that work for you",
//         "Building the future with technology"
//     ];

//     const prevImage = () => {
//         setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
//     }

//     const nextImage = () => {
//         setCurrentImage(prevValue => prevValue === imagesList.length - 1 ? 0 : prevValue + 1);
//     }

//     const prevText = () => {
//         setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1);
//     }

//     const nextText = () => {
//         setCurrentTextIndex(prevValue => prevValue === textList.length - 1 ? 0 : prevValue + 1);
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextImage();
//             nextText();
//         }, 3000); // Cambia la imagen y el texto cada 3 segundos

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <div className={styles['carousel-container']}>
//             <div className={styles['image-container']}>
//                 <Image
//                     src={imagesList[currentImage]}
//                     width={1024}
//                     height={540}
//                     alt=""
//                     layout="responsive"
//                     className={styles['custom-image']}
//                 />
//             <div className={styles['split-text-container']}>
//                 <span className={`${styles['text-part']} ${styles['left']}`}>{textList[currentTextIndex].split(" ")[0]}</span>
//                 <span className={`${styles['text-part']} ${styles['right']}`}>{textList[currentTextIndex].split(" ").slice(1).join(" ")}</span>
//             </div>

//             <div className={styles['arrow-container']}>
//                 <i
//                     className={`${styles['arrow-left']} fa fa-arrow-left`}
//                     onClick={prevImage}
//                 ></i>
//                 <i
//                     className={`${styles['arrow-right']} fa fa-arrow-right`}
//                     onClick={nextImage}
//                 ></i>
//             </div>

//             </div>

//             <div className={styles['loading-bar']}></div>

           
//         </div>
//     );
// }


// 'use client'
// import { useEffect, useState } from 'react';
// import styles from './Carousel.module.css';
// import Image from 'next/image';
// import 'font-awesome/css/font-awesome.min.css';


// export default function Carousel() {

//     const [currentImage, setCurrentImage] = useState(0);
//     // const imagesList = [
//     //     'https://media.istockphoto.com/id/2187329511/photo/hispanic-latin-female-programmer-coding-at-night-in-a-high-tech-workspace-with-multiple.jpg?s=612x612&w=0&k=20&c=J_ptBgGj4FZ4yiSEC9r_sZjzGthRIDRZk_3mKmxFTj0=',
//     //     'https://media.istockphoto.com/id/1027994148/photo/overworked-young-man-at-front-of-laptop-having-headache-programming-and-coding-technologies.jpg?s=612x612&w=0&k=20&c=hIhuzylIkrEdjcARMTV8RP_pszT4gKlrcQUjlD0Gtn4=',
//     //     'https://media.istockphoto.com/id/2114252804/photo/asian-woman-developer-devops-coding-software-data-working-at-night-in-office.jpg?s=612x612&w=0&k=20&c=Uk1927ih4JebrgegWcVb8ZncO2hrabxdL8w17BDdjaM='
//     // ];

//     const imagesList = [
//         'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://plus.unsplash.com/premium_photo-1682088318236-8c4958076b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

//         'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         'https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         // 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     ];




//     // useEffect(
//     //     // () => {
//     //     //     let time = 3000;
//     //     //     const timer =
//     //     //         setInterval(() => {
//     //     //             if (time <= 0) {
//     //     //                 clearInterval(timer);
//     //     //                 nextImage();
//     //     //             } else {
//     //     //                 console.log(`${time -= 100} ms restantes`);
//     //     //             }
//     //     //         }, 100
//     //     //         );

//     //     // }, []


//     // );



//     const prevImage = () => {

//         setCurrentImage(
//             preValue => {
//                 if ((preValue - 1) === -1) {
//                     return preValue + 2
//                 }
//                 else {
//                     return preValue - 1
//                 }
//             }
//         );


//     }

//     const nextImage = () => {
//         setCurrentImage(
//             preValue => {
//                 if ((preValue + 1) === 4) {
//                     return preValue - 2
//                 }
//                 else {
//                     return preValue + 1
//                 }
//             }
//         );

//         // setCurrentImage(
//         //     preValue => {
//         //         if ((preValue - 1) === 3) {
//         //             return preValue - 2
//         //         }
//         //         else {
//         //             return preValue - 1
//         //         }
//         //     }
//         // );

//     }

//     // useEffect(
//     //     () => {
//     //         const interval = setInterval(nextImage, 8000); // Ejecuta nextImage cada 3 segundos
//     //         return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
//     //     }, []
//     // );



//     const [currentTextIndex, setCurrentTextIndex] = useState(0);

//     const textList = [
//         "Empowering your digital presence",
//         "Crafting innovative web experiences",
//         "Web solutions that work for you"
//     ];

//     // Función para pasar al texto anterior
//     const prevText = () => {
//         setCurrentTextIndex(prevValue => {
//             if (prevValue === 0) {
//                 return textList.length - 1; // Si estamos en el primer texto, vamos al último
//             }
//             return prevValue - 1; // Si no, restamos 1 al índice
//         });
//     }

//     // Función para pasar al siguiente texto
//     const nextText = () => {
//         setCurrentTextIndex(prevValue => {
//             if (prevValue === textList.length - 1) {
//                 return 0; // Si estamos en el último texto, volvemos al primero
//             }
//             return prevValue + 1; // Si no, sumamos 1 al índice
//         });
//     }

//     useEffect(() => {
//         // Ejecuta nextImage cada 8 segundos
//         const imageInterval = setInterval(nextImage, 3000);

//         // Ejecuta nextText cada 8 segundos
//         const textInterval = setInterval(nextText, 9000);

//         // Limpiar ambos intervalos cuando el componente se desmonte
//         return () => {
//             clearInterval(imageInterval);
//             clearInterval(textInterval);
//         };
//     }, []);





//     return (
//         <div className={styles['carousel-container']}>


//             {/* <Image
//                 src={imagesList[currentImage]}
//                 width={1024}
//                 height={540}
//                 alt={''}
//                 layout="responsive" // Hace que la imagen se ajuste al contenedor
//                 // layout="fill" // Hace que la imagen se ajuste al contenedor
//             /> */}

//             <div>
//                 <Image
//                     src={imagesList[currentImage]}
//                     width={1024}
//                     height={540}
//                     alt={''}
//                     layout="responsive" // Hace que la imagen se ajuste al contenedor
//                     // layout="fill" // Hace que la imagen se ajuste al contenedor
//                     className={styles['custom-image']}
//                 />
//             </div>

//             <div className={styles['loading-bar']}></div>

//             <div className={styles['arrow-container']}>
//                 <i
//                     className={`${styles['arrow-left']} fa fa-arrow-left`}
//                     onClick={prevImage}>
//                 </i>
//                 <br></br>
//                 <i
//                     className={`${styles['arrow-right']} fa fa-arrow-right`}
//                     onClick={prevImage}>
//                 </i>
//             </div>
 
//         </div >
//     );
// }