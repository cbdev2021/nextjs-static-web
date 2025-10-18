import { getDefaultAutoSelectFamilyAttemptTimeout } from "net";
import styles from './Services.module.css';



export default function Services() {

    const imagesList = [

        // 'https://media.istockphoto.com/id/1145769284/photo/creative-web-designer-planning-application-and-developing-template-layout-framework-for.jpg?s=1024x1024&w=is&k=20&c=8uirgnNAwdPaQx8a0QOGHKoL9qKBFOQMv9efGNgQDmw=',
        
        'https://media.istockphoto.com/id/846843116/es/foto/ux-mujer-arquitecto-tiene-discusi%C3%B3n-con-el-ingeniero-de-dise%C3%B1o-masculino-que-trabajan-en-la.jpg?s=1024x1024&w=is&k=20&c=BEKz1B5xK6mYObA2EazfBeOCtleJm9BBseXH1KEYoUU=',
        'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        'https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=1024x1024&w=is&k=20&c=L3b3Yi5MhR--0Y4O_AaFl6ARfDeM9BWfwvsGqECf6hw=',

        'https://media.istockphoto.com/id/935330354/es/foto/c%C3%B3digo-fuente-de-etereum-cryptocurrency-y-sistema-descentralizado-de-contratos-para-la-gesti%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=PiJ3ymZpjMVL-w8HC6FgXIBMucRIg74wVEcvgJyITmg=',

        'https://media.istockphoto.com/id/1194430802/photo/male-and-female-programmers-talking-solving-problem-using-computers-doing-high-five-after.jpg?s=1024x1024&w=is&k=20&c=n0iDtG16Kcqm3jDlbDKyQAlALFc9_yAdLW_3e0PVFHA=',



        'https://media.istockphoto.com/id/2169040453/photo/ux-ui-designers-discussing-and-brainstorming-on-wireframes-for-a-website-and-mobile-app.jpg?s=1024x1024&w=is&k=20&c=GkXQYZo4IbkrDpQZPJvDeS8YnMSS7dyviOL5MMr9DnM=',

        'https://images.unsplash.com/photo-1615525137689-198778541af6?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1721910821871-f8caece8d381?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',


        'https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://media.istockphoto.com/id/1785752228/photo/multi-level-security-system.jpg?s=1024x1024&w=is&k=20&c=XhNiDPbCiOxX0qy7zUGB_SnUE8Yj0AztDMq4TM8Wmfk=',
        'https://plus.unsplash.com/premium_photo-1725400817468-ddb0135d865d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',



    ];

    return (
        // <div className={styles['services-container']}>          
        //         <div className={styles['service-card']}>
        //             <h3 className={styles['service-tittle']}>Custom Web Application Development (Frontend & Backend)</h3>
        //             <p className={styles['service-text']}>Custom web application development involves both frontend and backend processes. The frontend focuses on creating visually appealing and dynamic interfaces, ensuring a user-friendly experience. The backend handles server-side logic, database management, and integrations with other systems. We build web applications that are tailored to each client's specific needs, ensuring scalability, security, and efficiency for long-term success.</p>
        //         </div>
        // </div>

        <div className={styles['services-container']}>

            <div className={styles['main-tittle']}>
                <h3>
                    Services
                </h3> 
            </div>


            <div className={styles['service-card']} style={{
                backgroundImage: `url(${imagesList[0]})`,
                backgroundSize: 'cover',   // Esto hace que la imagen cubra todo el área del contenedor
                backgroundPosition: 'center', // Esto centra la imagen dentro del contenedor
                backgroundRepeat: 'no-repeat' // Evita que se repita la imagen si es más pequeña que el contenedor
            }}>
                <div className={styles['scale-contain']}>
                    <h3 className={styles['service-tittle']}>UX/UI User Experience Design</h3>
                    <p className={styles['service-text']}>Frontend development is responsible for building the visible aspects of web applications that users interact with directly. This includes implementing responsive design, ensuring accessibility, and creating dynamic interfaces using modern web technologies. We develop highly interactive and visually engaging experiences, focusing on delivering smooth performance and a flawless user interface across all devices.</p>
                </div>
            </div>

            <div className={styles['service-card']} style={{
                backgroundImage: `url(${imagesList[1]})`,
                backgroundSize: 'cover',
            }}>
                <div className={styles['scale-contain']}>
                    <h3 className={styles['service-tittle']}>Frontend Development</h3>
                    <p className={styles['service-text']}>Custom web application development involves both frontend and backend processes. The frontend focuses on creating visually appealing and dynamic interfaces, ensuring a user-friendly experience. The backend handles server-side logic, database management, and integrations with other systems. We build web applications that are tailored to each client's specific needs, ensuring scalability, security, and efficiency for long-term success.</p>
                </div>
            </div>

            <div className={styles['service-card']} style={{ backgroundImage: `url(${imagesList[2]})`, backgroundSize: 'cover', }}>
                <div className={styles['scale-contain']}>
                    <h3 className={styles['service-tittle']}>API REST/Web Services</h3>
                    <p className={styles['service-text']}>API development and web services allow different software applications to communicate and interact efficiently. We specialize in creating robust, scalable REST APIs and web services that enable smooth integration between various systems, ensuring seamless data exchange. Our solutions provide secure, fast, and reliable connections to enhance functionality across multiple platforms and services.</p>
                </div>
            </div>

            <div className={styles['service-card']} style={{ backgroundImage: `url(${imagesList[3]})` }}>
                <div className={styles['scale-contain']}>
                    <h3 className={styles['service-tittle']}>Backend Development</h3>
                    <p className={styles['service-text']}>Backend development focuses on the server-side components of web applications, ensuring proper functionality, performance, and security. This involves creating the architecture, server-side logic, and database interactions that support the application’s core features. Our backend solutions are designed to be scalable, secure, and optimized for performance, enabling your web applications to function smoothly and reliably.</p>
                </div>
            </div>

            {/* <div className={styles['service-card']} style={{ backgroundImage: `url(${imagesList[4]})`,
                backgroundSize: 'cover', }}>

                <h3 className={styles['service-tittle']}>Database Design</h3>
                <p className={styles['service-text']}>Database design is essential for structuring and organizing data efficiently to ensure fast and secure data retrieval. We specialize in designing relational and non-relational databases, optimizing them for performance and scalability. Our database solutions ensure data integrity, security, and high availability, laying a solid foundation for your web applications to grow and evolve seamlessly over time.</p>
            </div> */}

            <div className={styles['service-card']} style={{
                backgroundImage: `url(${imagesList[4]})`,
                backgroundSize: 'cover',
            }}>
                <div className={styles['scale-contain']}>
                    <h3 className={styles['service-tittle']}>Database Design</h3>
                    <p className={styles['service-text']}>Database design is essential for structuring and organizing data efficiently to ensure fast and secure data retrieval. We specialize in designing relational and non-relational databases, optimizing them for performance and scalability. Our database solutions ensure data integrity, security, and high availability, laying a solid foundation for your web applications to grow and evolve seamlessly over time.</p>
                </div>
            </div>
        </div>
    );
}