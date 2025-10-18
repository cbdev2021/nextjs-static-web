'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  // Función para alternar la visibilidad del menú
  const displayMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !menuRef.current?.contains(event.target) // Verificar si el clic es fuera del menú
      ) {
        setOpen(false); // Cerrar menú si se hace clic fuera
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Detectar dirección del scroll y controlar el cierre del menú
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setScrollingDown(true); // Detectar scroll hacia abajo
        if (open) {
          setOpen(false); // Cerrar el menú solo si está abierto
        }
      } else {
        setScrollingDown(false); // Detectar scroll hacia arriba
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, open]); // Dependemos de 'open' para garantizar que el menú se cierre solo si está abierto

  // Función para hacer scroll hacia una sección y cerrar el menú
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth',
      });
      setOpen(false); // Cerrar el menú después de hacer clic en un ítem
    }
  };

  return (
    <div
      className={`${styles['header-container']} ${
        scrollingDown ? styles.hidden : ''
      }`}
    >
      <h3 className={styles['logo']} onClick={() => scrollToSection('home')}>〄M&C</h3>
      <nav className={styles['nav']}>
        <div className={styles['ul-list']}>
          <div className={styles['a-item']} onClick={() => scrollToSection('home')}>
            Home
          </div>
          <div className={styles['a-item']} onClick={() => scrollToSection('ourbusiness')}>
            About Us
          </div>
          <div className={styles['a-item']} onClick={() => scrollToSection('services')}>
            Services
          </div>
          <div className={styles['a-item']} onClick={() => scrollToSection('clients')}>
            Clients
          </div>
          <div className={styles['a-item']} onClick={() => scrollToSection('contact')}>
            Contact
          </div>
        </div>
      </nav>
      <div className={styles['hamburger']}>
        <i
          ref={menuRef}
          className="fa fa-bars"
          style={{ fontSize: '30px', cursor: 'pointer' }}
          onClick={displayMenu} // Cambia el estado al hacer clic
        ></i>
      </div>

      {open && (
        <div ref={drawerRef} className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}>
          <div className={styles['item-menu']} onClick={() => scrollToSection('home')}>
            <p className={styles['texto-mobile']}>Home</p>
          </div>
          <div className={styles['item-menu']} onClick={() => scrollToSection('ourbusiness')}>
            <p className={styles['texto-mobile']}>About Us</p>
          </div>
          <div className={styles['item-menu']} onClick={() => scrollToSection('services')}>
            <p className={styles['texto-mobile']}>Services</p>
          </div>
          <div className={styles['item-menu']} onClick={() => scrollToSection('clients')}>
            <p className={styles['texto-mobile']}>Clients</p>
          </div>
          <div className={styles['item-menu']} onClick={() => scrollToSection('contact')}>
            <p className={styles['texto-mobile']}>Contact</p>
          </div>
        </div>
      )}
    </div>
  );
}

// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import styles from './Header.module.css';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [scrollingDown, setScrollingDown] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const drawerRef = useRef<HTMLDivElement | null>(null);
//   const menuRef = useRef<HTMLButtonElement | null>(null);

//   const displayMenu = () => setOpen(!open);

//   useEffect(() => {
//     const handleClickOutside = (event: { target: any }) => {
//       if (
//         drawerRef.current &&
//         !drawerRef.current.contains(event.target) &&
//         !menuRef.current?.contains(event.target) // Verificar si el clic es fuera del menú
//       ) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Detectar dirección del scroll y cerrar el menú si es necesario
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY && currentScrollY > 60) {
//         setScrollingDown(true); // Scroll hacia abajo
//         if (open) {
//           setOpen(false); // Cerrar menú cuando se hace scroll hacia abajo
//         }
//       } else {
//         setScrollingDown(false); // Scroll hacia arriba
//       }
//       setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY); // Evitar que se quede en negativo
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY, open]); // Dependemos de 'open' también para cerrar el menú

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 60,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div
//       className={`${styles['header-container']} ${
//         scrollingDown ? styles.hidden : ''
//       }`}
//     >
//       <h3 className={styles['logo']} onClick={() => scrollToSection('home')}>〄M&C</h3>
//       <nav className={styles['nav']}>
//         <div className={styles['ul-list']}>
//           <div className={styles['a-item']} onClick={() => scrollToSection('home')}>
//             Home
//           </div>
//           <div className={styles['a-item']} onClick={() => scrollToSection('ourbusiness')}>
//             About Us
//           </div>
//           <div className={styles['a-item']} onClick={() => scrollToSection('services')}>
//             Services
//           </div>
//           <div className={styles['a-item']} onClick={() => scrollToSection('clients')}>
//             Clients
//           </div>
//           <div className={styles['a-item']} onClick={() => scrollToSection('contact')}>
//             Contact
//           </div>
//         </div>
//       </nav>
//       <div className={styles['hamburger']}>
//         <i
//           ref={menuRef}
//           className="fa fa-bars"
//           style={{ fontSize: '30px', cursor: 'pointer' }}
//           onClick={displayMenu}
//         ></i>
//       </div>

//       {open && (
//         <div ref={drawerRef} className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('home')}>
//             <p className={styles['texto-mobile']}>Home</p>
//           </div>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('ourbusiness')}>
//             <p className={styles['texto-mobile']}>About Us</p>
//           </div>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('services')}>
//             <p className={styles['texto-mobile']}>Services</p>
//           </div>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('clients')}>
//             <p className={styles['texto-mobile']}>Clients</p>
//           </div>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('contact')}>
//             <p className={styles['texto-mobile']}>Contact</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import styles from './Header.module.css';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [scrollingDown, setScrollingDown] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const drawerRef = useRef<HTMLDivElement | null>(null);
//   const menuRef = useRef<HTMLButtonElement | null>(null);

//   const displayMenu = () => setOpen(!open);

//     useEffect(() => {
//     const handleClickOutside = (event: { target: any }) => {
//       if (
//         drawerRef.current &&
//         !drawerRef.current.contains(event.target) 
//         // &&  !menuRef.current.contains(event.target)
//       ) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Detect scroll direction
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY && currentScrollY > 60) {
//         setScrollingDown(true); // Scroll hacia abajo
//       } else {
//         setScrollingDown(false); // Scroll hacia arriba
//       }
//       setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY); // Evitar que se quede en negativo
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 60,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div
//       className={`${styles['header-container']} ${
//         scrollingDown ? styles.hidden : ''
//       }`}
//     >
//       <h3 className={styles['logo']} onClick={() => scrollToSection('home')}>〄M&C</h3>
//       <nav className={styles['nav']}>
//         <div className={styles['ul-list']}>
//           <div className={styles['a-item']} onClick={() => scrollToSection('home')}>
//             Home
//           </div>
//           <div className={styles['a-item']} onClick={() => scrollToSection('ourbusiness')}>
//             About Us
//           </div>
//           <div className={styles['a-item']} onClick={() => scrollToSection('services')}>
//             Services
//           </div>
//           <div className={styles['a-item']} onClick={() => scrollToSection('clients')}>
//             Clients
//           </div>
//           <div className={styles['a-item']} onClick={() => scrollToSection('contact')}>
//             Contact
//           </div>
//         </div>
//       </nav>
//       <div className={styles['hamburger']}>
//         <i
//           ref={menuRef}
//           className="fa fa-bars"
//           style={{ fontSize: '30px', cursor: 'pointer' }}
//           onClick={displayMenu}
//         ></i>
//       </div>

//       {open && (
//         <div ref={drawerRef} className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('home')}>
//             <p className={styles['texto-mobile']}>Home</p>
//           </div>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('ourbusiness')}>
//             <p className={styles['texto-mobile']}>About Us</p>
//           </div>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('services')}>
//             <p className={styles['texto-mobile']}>Services</p>
//           </div>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('clients')}>
//             <p className={styles['texto-mobile']}>Clients</p>
//           </div>
//           <div className={styles['item-menu']} onClick={() => scrollToSection('contact')}>
//             <p className={styles['texto-mobile']}>Contact</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import styles from './Header.module.css';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const drawerRef = useRef<HTMLDivElement | null>(null);
//   const menuRef = useRef<HTMLButtonElement | null>(null);

//   const displayMenu = () => setOpen(!open);

//   useEffect(() => {
//     const handleClickOutside = (event: { target: any }) => {
//       if (
//         drawerRef.current &&
//         !drawerRef.current.contains(event.target) 
//         // &&  !menuRef.current.contains(event.target)
//       ) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 60,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className={styles['header-container']}>
//       <h3 className={styles['logo']} onClick={() => scrollToSection('home')}>〄M&C</h3>
//       <nav className={styles['nav']}>
//         <div className={styles['ul-list']}>
//           <div
//             className={styles['a-item']}
//             onClick={() => scrollToSection('home')}
//           >
//             Home
//           </div>
//           <div
//             className={styles['a-item']}
//             onClick={() => scrollToSection('ourbusiness')}
//           >
//             About Us
//           </div>
//           <div
//             className={styles['a-item']}
//             onClick={() => scrollToSection('services')}
//           >
//             Services
//           </div>

//           <div
//             className={styles['a-item']}
//             onClick={() => scrollToSection('clients')}
//           >
//             Clients
//           </div>


//           <div
//             className={styles['a-item']}
//             onClick={() => scrollToSection('contact')}
//           >
//             Contact
//           </div>
//         </div>
//       </nav>
//       <div className={styles['hamburger']}>
//         <i
//           ref={menuRef}
//           className="fa fa-bars"
//           style={{ fontSize: '30px', cursor: 'pointer' }}
//           onClick={displayMenu}
//         ></i>
//       </div>

//       {open && (
//         <div
//           ref={drawerRef}
//           className={`${styles['nav-hamburger']} ${open ? styles.active : ''}`}
//         >
//           <div
//             className={styles['item-menu']}
//             onClick={() => scrollToSection('home')}
//           >
//             <p className={styles['texto-mobile']}>Home</p>
//           </div>
//           <div
//             className={styles['item-menu']}
//             onClick={() => scrollToSection('ourbusiness')}
//           >
//             <p className={styles['texto-mobile']}>About Us</p>
//           </div>
//           <div
//             className={styles['item-menu']}
//             onClick={() => scrollToSection('services')}
//           >
//             <p className={styles['texto-mobile']}>Services</p>
//           </div>

//           <div
//             className={styles['item-menu']}
//             onClick={() => scrollToSection('clients')}
//           >
//             <p className={styles['texto-mobile']}>Clients</p>
//           </div>

//           <div
//             className={styles['item-menu']}
//             onClick={() => scrollToSection('contact')}
//           >
//             <p className={styles['texto-mobile']}>Contact</p>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }
