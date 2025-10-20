
'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './Clients.module.css';

// Importar Google Fonts
import 'font-awesome/css/font-awesome.min.css'; // Para los iconos, si los quieres mantener

// Datos de clientes ficticios con un "unicode" de fondo y color de texto agregado
const clientsList = [
  { 
    name: "TechCorp", 
    unicode: "🌐", 
    slogan: "Innovating", 
    nameFont: "Roboto", 
    sloganFont: "Lora", 
    nameFontSize: '24px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Roboto', 
    sloganFontFamily: 'Arial Black', 
    unicodeTop: '20px', 
    unicodeLeft: '50%', 
    nameTop: '132px', 
    nameLeft: '50%', 
    sloganTop: '160px', 
    sloganLeft: '50%',
    nameTextColor: '#000', // Color de texto para el nombre
    sloganTextColor: '#0000FF', // Color de texto para el slogan
    unicodeTextColor: '#FF0000', // Color de texto para el unicode
  },
  { 
    name: "DataSolutions", 
    unicode: "⽥", 
    slogan: "Driven Success", 
    nameFont: "Roboto", 
    sloganFont: "Merriweather", 
    nameFontSize: '18px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Fira Sans', 
    sloganFontFamily: 'Arial', 
    unicodeTop: '15%', 
    unicodeLeft: '50%', 
    nameTop: '62%', 
    nameLeft: '50%', 
    sloganTop: '70%', 
    sloganLeft: '50%',
    nameTextColor: '#4caf50', // Color de texto para el nombre
    sloganTextColor: '#4caf50', // Color de texto para el slogan
    unicodeTextColor: '#4caf50', // Color de texto para el unicode
  },
  { 
    name: "FusionTech", 
    unicode: "◠", 
    slogan: "Creativity at Work", 
    nameFont: "Verdana ", 
    sloganFont: "Raleway", 
    nameFontSize: '20px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Verdana', 
    sloganFontFamily: 'Raleway', 
    unicodeTop: '18%', 
    unicodeLeft: '50%', 
    nameTop: '55%', 
    nameLeft: '50%', 
    sloganTop: '68%', 
    sloganLeft: '50%',
    nameTextColor: '#009688', // Color de texto para el nombre
    sloganTextColor: '#009688', // Color de texto para el slogan
    unicodeTextColor: '#009688', // Color de texto para el unicode
  },
  { 
    name: "GreenTech", 
    unicode: "◢", 
    slogan: "Sustainability", 
    nameFont: "Comic Sans MS", 
    sloganFont: "Playfair Display", 
    nameFontSize: '20px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Comic Sans MS', 
    sloganFontFamily: 'Playfair Display', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '55%', 
    nameLeft: '50%', 
    sloganTop: '65%', 
    sloganLeft: '50%',
    nameTextColor: '#006400', // Color de texto para el nombre
    sloganTextColor: '#808000', // Color de texto para el slogan
    unicodeTextColor: '#7CFC00', // Color de texto para el unicode
  },
  { 
    name: "FinServe", 
    unicode: "◧", 
    slogan: "Finances", 
    nameFont: "Lucida Console", 
    sloganFont: "Quicksand", 
    nameFontSize: '17px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Lucida Console', 
    sloganFontFamily: 'Courier New', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '56%', 
    nameLeft: '50%', 
    sloganTop: '65%', 
    sloganLeft: '50%',
    nameTextColor: '#f44336', // Color de texto para el nombre
    sloganTextColor: '#f44336', // Color de texto para el slogan
    unicodeTextColor: '#f44336', // Color de texto para el unicode
  },
  { 
    name: "DataSphere", 
    unicode: "〇", 
    slogan: "Your Cloud", 
    nameFont: "Helvetica", 
    sloganFont: "PT Serif", 
    nameFontSize: '20px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Helvetica', 
    sloganFontFamily: 'Trebuchet MS', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '50%', 
    nameLeft: '50%', 
    sloganTop: '130px', 
    sloganLeft: '50%',
    nameTextColor: '#673ab7', // Color de texto para el nombre
    sloganTextColor: '#673ab7', // Color de texto para el slogan
    unicodeTextColor: '#673ab7', // Color de texto para el unicode
  },
  { 
    name: "SmartSystems", 
    unicode: "☑", 
    slogan: "Solutions", 
    nameFont: "Century Gothic", 
    sloganFont: "Bitter", 
    nameFontSize: '17px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Century Gothic', 
    sloganFontFamily: 'Arial Narrow', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '60%', 
    nameLeft: '50%', 
    sloganTop: '70%', 
    sloganLeft: '50%',
    nameTextColor: '#3f51b5', // Color de texto para el nombre
    sloganTextColor: '#3f51b5', // Color de texto para el slogan
    unicodeTextColor: '#3f51b5', // Color de texto para el unicode
  },
  { 
    name: "NextGen Solutions", 
    unicode: "〢", 
    slogan: "Shaping World", 
    nameFont: "Consolas", 
    sloganFont: "Droid Serif", 
    nameFontSize: '24px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Consolas', 
    sloganFontFamily: 'Raleway', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '100px', 
    nameLeft: '50%', 
    sloganTop: '160px', 
    sloganLeft: '50%',
    nameTextColor: '#ff5722', // Color de texto para el nombre
    sloganTextColor: '#ff5722', // Color de texto para el slogan
    unicodeTextColor: '#ff5722', // Color de texto para el unicode
  },
  { 
    name: "GlobalTech", 
    unicode: "🗺", 
    slogan: "Technology", 
    nameFont: "Courier", 
    sloganFont: "Fira Sans", 
    nameFontSize: '20px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Courier', 
    sloganFontFamily: 'Courier', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '140px', 
    sloganLeft: '50%',
    nameTextColor: '#607d8b', // Color de texto para el nombre
    sloganTextColor: '#607d8b', // Color de texto para el slogan
    unicodeTextColor: '#607d8b', // Color de texto para el unicode
  },
  
  { 
    name: "TechWave", 
    unicode: "〤", 
    slogan: "Innovation at Speed", 
    nameFont: "Arial", 
    sloganFont: "Verdana", 
    nameFontSize: '22px', 
    sloganFontSize: '6px',
    nameFontFamily: 'Arial', 
    sloganFontFamily: 'Verdana', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '65%', 
    sloganLeft: '50%',
    nameTextColor: '#1e88e5', 
    sloganTextColor: '#1e88e5', 
    unicodeTextColor: '#1e88e5',
  },
  { 
    name: "QuantumPlus", 
    unicode: "⿺", 
    slogan: "Exploring solutions", 
    nameFont: "Times New Roman", 
    sloganFont: "Courier New", 
    nameFontSize: '18px', 
    sloganFontSize: '6px',
    nameFontFamily: 'Times New Roman', 
    sloganFontFamily: 'Courier New', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '145px', 
    sloganLeft: '50%',
    nameTextColor: '#9c27b0', 
    sloganTextColor: '#9c27b0', 
    unicodeTextColor: '#9c27b0',
  },
  { 
    name: "CyberSpark", 
    unicode: "✇", 
    slogan: "Lighting the Path", 
    nameFont: "Georgia", 
    sloganFont: "Trebuchet MS", 
    nameFontSize: '22px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Georgia', 
    sloganFontFamily: 'Trebuchet MS', 
    unicodeTop: '8%', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '150px', 
    sloganLeft: '50%',
    nameTextColor: '#ff5722', 
    sloganTextColor: '#ff5722', 
    unicodeTextColor: '#ff5722',
  },
  { 
    name: "Next", 
    unicode: "〦", 
    slogan: "Revolutionizing Tomorrow", 
    nameFont: "Courier New", 
    sloganFont: "Lucida Console", 
    nameFontSize: '21px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Courier New', 
    sloganFontFamily: 'Lucida Console', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '52%', 
    nameLeft: '50%', 
    sloganTop: '145px', 
    sloganLeft: '50%',
    nameTextColor: '#009688', 
    sloganTextColor: '#009688', 
    unicodeTextColor: '#009688',
  },
  { 
    name: "FusionCore", 
    unicode: "⟲", 
    slogan: "Pushing Boundaries", 
    nameFont: "Tahoma", 
    sloganFont: "Helvetica", 
    nameFontSize: '20px', 
    sloganFontSize: '12px',
    nameFontFamily: 'Tahoma', 
    sloganFontFamily: 'Helvetica', 
    unicodeTop: '5%', 
    unicodeLeft: '50%', 
    nameTop: '51%', 
    nameLeft: '50%', 
    sloganTop: '140px', 
    sloganLeft: '50%',
    nameTextColor: '#00bcd4', 
    sloganTextColor: '#00bcd4', 
    unicodeTextColor: '#00bcd4',
  },
  { 
    name: "NeuroLink", 
    unicode: "ꄍ", 
    slogan: "Mind Meets Machine", 
    nameFont: "Impact", 
    sloganFont: "Comic Sans MS", 
    nameFontSize: '28px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Impact', 
    sloganFontFamily: 'Comic Sans MS', 
    unicodeTop: '10%', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '150px', 
    sloganLeft: '50%',
    nameTextColor: '#3f51b5', 
    sloganTextColor: '#3f51b5', 
    unicodeTextColor: '#3f51b5',
  },
  { 
    name: "ByteWave", 
    unicode: "⧉", 
    slogan: "The Future of Data", 
    nameFont: "Lucida Sans Unicode", 
    sloganFont: "Segoe UI", 
    nameFontSize: '24px', 
    sloganFontSize: '10px',
    nameFontFamily: 'Lucida Sans Unicode', 
    sloganFontFamily: 'Segoe UI', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '150px', 
    sloganLeft: '50%',
    nameTextColor: '#8bc34a', 
    sloganTextColor: '#8bc34a', 
    unicodeTextColor: '#8bc34a',
  },
  { 
    name: "MetaFlow", 
    unicode: "Ⲱ", 
    slogan: "Flowing to the Future", 
    nameFont: "Palatino Linotype", 
    sloganFont: "Book Antiqua", 
    nameFontSize: '22px', 
    sloganFontSize: '12px',
    nameFontFamily: 'Palatino Linotype', 
    sloganFontFamily: 'Book Antiqua', 
    unicodeTop: '10px', 
    unicodeLeft: '50%', 
    nameTop: '120px', 
    nameLeft: '50%', 
    sloganTop: '68%', 
    sloganLeft: '50%',
    nameTextColor: '#e91e63', 
    sloganTextColor: '#e91e63', 
    unicodeTextColor: '#e91e63',
  },
  { 
    name: "HyperNova", 
    unicode: "⩥", 
    slogan: "Redefining Space", 
    nameFont: "Century Gothic", 
    sloganFont: "Frank Ruhl Libre", 
    nameFontSize: '23px', 
    sloganFontSize: '8px',
    nameFontFamily: 'Century Gothic', 
    sloganFontFamily: 'Frank Ruhl Libre', 
    unicodeTop: '5%', 
    unicodeLeft: '50%', 
    nameTop: '52%', 
    nameLeft: '50%', 
    sloganTop: '150px', 
    sloganLeft: '50%',
    nameTextColor: '#f44336', 
    sloganTextColor: '#f44336', 
    unicodeTextColor: '#f44336',
  }
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Lógica de navegación
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? clientsList.length - 1 : prevIndex - 1));
    setIsManualNavigation(true);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === clientsList.length - 1 ? 0 : prevIndex + 1));
    setIsManualNavigation(true);
  };

  // Calcular el desplazamiento en píxeles basado en un ancho fijo
  const getTranslateXInPixels = () => {
    // const minWidth = 157; // El ancho mínimo de cada elemento
    const minWidth = 148; // El ancho mínimo de cada elemento


    return currentIndex * minWidth; // Mueve la lista por 163px cada vez
  };

  // Funciones de arrastre
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (walk > 50) {
      handlePrev();
      setIsDragging(false);
    } else if (walk < -50) {
      handleNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered && !isDragging) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextIndex = prevIndex + 3;
          return nextIndex >= clientsList.length ? 0 : nextIndex;
        });
        setIsManualNavigation(false);
      }, 12000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isDragging, currentIndex]);

  // Reset manual navigation flag after transition
  useEffect(() => {
    if (isManualNavigation) {
      const timer = setTimeout(() => {
        setIsManualNavigation(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isManualNavigation]);

  // Scroll reveal functionality
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
    <div ref={ref} className={`${styles['carousel-container']} scroll-reveal fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className={styles['main-tittle']}>
        <h3>Clients</h3>
      </div>

      <div 
        className={styles['carousel-wrapper']}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i
          className={`${styles['arrow-left']} fa fa-chevron-left`}
          onClick={handlePrev}
        ></i>

        <div 
          className={styles['clients-list-container']}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className={styles['clients-list']}
            style={{
              transform: `translateX(-${getTranslateXInPixels()}px)`,
              transition: isDragging ? 'none' : isManualNavigation ? 'transform 0.5s ease' : 'transform 8s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          >
            {clientsList.map((client, index) => (
              <div className={styles['client-card']} key={index} style={{
                background: '#f3f3f3',  // Fondo general de la tarjeta
                padding: '20px', // Relleno interno para mejorar la visibilidad
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                position: 'relative', // Para poder usar top/left
                overflow: 'hidden', // Para evitar que los elementos sobresalgan
              }}>
                {/* Unicode de fondo */}
                <div className={styles['unicode-background']} style={{
                  fontSize: '80px', // Tamaño grande para el unicode
                  textAlign: 'center',
                  position: 'absolute',
                  top: client.unicodeTop, // Posición top personalizada
                  left: client.unicodeLeft, // Posición left personalizada
                  transform: 'translateX(-50%)',
                  color: client.unicodeTextColor, // Usar el color del unicode
                }}>
                  {client.unicode}
                </div>
                {/* Nombre con tipografía personalizada */}
                <h3 className={styles['client-name']} style={{
                  fontFamily: client.nameFontFamily,  // Fuente personalizada para el nombre
                  fontSize: client.nameFontSize,  // Tamaño personalizado para el nombre
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: client.nameTextColor, // Usar el color del nombre
                  marginBottom: '10px',
                  position: 'absolute',
                  top: client.nameTop, // Posición top personalizada
                  left: client.nameLeft, // Posición left personalizada
                  transform: 'translateX(-50%)',
                }}>
                  {client.name}
                </h3>
                {/* Slogan con una fuente diferente */}
                <p className={styles['client-slogan']} style={{
                  fontFamily: client.sloganFontFamily,  // Fuente personalizada para el slogan
                  fontSize: client.sloganFontSize,  // Tamaño personalizado para el slogan
                  textAlign: 'center',
                  color: client.sloganTextColor, // Usar el color del slogan
                  // fontStyle: 'italic',
                  position: 'absolute',
                  top: client.sloganTop, // Posición top personalizada
                  left: client.sloganLeft, // Posición left personalizada
                  transform: 'translateX(-50%)',
                }}>
                  {client.slogan}
                </p>
              </div>
            ))}
          </div>
        </div>

        <i
          className={`${styles['arrow-right']} fa fa-chevron-right`}
          onClick={handleNext}
        ></i>
      </div>
    </div>
  );
};

export default Clients;


// 'use client';
// import { useState } from 'react';
// import styles from './Clients.module.css';

// // Importar Google Fonts
// import 'font-awesome/css/font-awesome.min.css'; // Para los iconos, si los quieres mantener

// // Datos de clientes ficticios con un "unicode" de fondo
// const clientsList = [
//   { 
//     name: "TechCorp", 
//     unicode: "〇", 
//     slogan: "Innovating", 
//     nameFont: "Roboto", 
//     sloganFont: "Lora", 
//     nameFontSize: '24px', 
//     sloganFontSize: '10px',
//     nameFontFamily: 'Roboto', 
//     sloganFontFamily: 'Lora', 
//     unicodeTop: '10px', 
//     unicodeLeft: '50%', 
//     nameTop: '110px', 
//     nameLeft: '50%', 
//     sloganTop: '130px', 
//     sloganLeft: '50%' 
//   },
//   { 
//     name: "DataSolutions", 
//     unicode: "〈", 
//     slogan: "Driven Success", 
//     nameFont: "Open Sans", 
//     sloganFont: "Merriweather", 
//     nameFontSize: '18px', 
//     sloganFontSize: '10px',
//     nameFontFamily: 'Open Sans', 
//     sloganFontFamily: 'Merriweather', 
//     unicodeTop: '15px', 
//     unicodeLeft: '-5%', 
//     nameTop: '70px', 
//     nameLeft: '50%', 
//     sloganTop: '90px', 
//     sloganLeft: '50%' 
//   },
//   { 
//     name: "CreativeLabs", 
//     unicode: "「", 
//     slogan: "Creativity at Work", 
//     nameFont: "Poppins", 
//     sloganFont: "Raleway", 
//     nameFontSize: '15px', 
//     sloganFontSize: '8px',
//     nameFontFamily: 'Poppins', 
//     sloganFontFamily: 'Raleway', 
//     unicodeTop: '10px', 
//     unicodeLeft: '0%', 
//     nameTop: '50px', 
//     nameLeft: '50%', 
//     sloganTop: '70px', 
//     sloganLeft: '50%' 
//   },
//   { 
//     name: "GreenTech", 
//     unicode: "】", 
//     slogan: "Sustainable Technology", 
//     nameFont: "Montserrat", 
//     sloganFont: "Playfair Display", 
//     nameFontSize: '20px', 
//     sloganFontSize: '8px',
//     nameFontFamily: 'Montserrat', 
//     sloganFontFamily: 'Playfair Display', 
//     unicodeTop: '15px', 
//     unicodeLeft: '100%', 
//     nameTop: '70px', 
//     nameLeft: '50%', 
//     sloganTop: '90px', 
//     sloganLeft: '50%' 
//   },
//   { 
//     name: "FinServe", 
//     unicode: "〓", 
//     slogan: "Finances", 
//     nameFont: "Oswald", 
//     sloganFont: "Quicksand", 
//     nameFontSize: '17px', 
//     sloganFontSize: '10px',
//     nameFontFamily: 'Oswald', 
//     sloganFontFamily: 'Quicksand', 
//     unicodeTop: '30px', 
//     unicodeLeft: '50%', 
//     nameTop: '83px', 
//     nameLeft: '50%', 
//     sloganTop: '120px', 
//     sloganLeft: '50%' 
//   },
//   { 
//     name: "CloudWorks", 
//     unicode: "〜", 
//     slogan: "Your Cloud, Your Way", 
//     nameFont: "Source Sans Pro", 
//     sloganFont: "PT Serif", 
//     nameFontSize: '24px', 
//     sloganFontSize: '16px',
//     nameFontFamily: 'Source Sans Pro', 
//     sloganFontFamily: 'PT Serif', 
//     unicodeTop: '10px', 
//     unicodeLeft: '50%', 
//     nameTop: '120px', 
//     nameLeft: '50%', 
//     sloganTop: '160px', 
//     sloganLeft: '50%' 
//   },
//   { 
//     name: "SmartSystems", 
//     unicode: "💡", 
//     slogan: "Smart Solutions for a Smart World", 
//     nameFont: "Nunito", 
//     sloganFont: "Bitter", 
//     nameFontSize: '24px', 
//     sloganFontSize: '16px',
//     nameFontFamily: 'Nunito', 
//     sloganFontFamily: 'Bitter', 
//     unicodeTop: '10px', 
//     unicodeLeft: '50%', 
//     nameTop: '120px', 
//     nameLeft: '50%', 
//     sloganTop: '160px', 
//     sloganLeft: '50%' 
//   },
//   { 
//     name: "NextGen Solutions", 
//     unicode: "🚀", 
//     slogan: "Shaping Tomorrow's World", 
//     nameFont: "Lato", 
//     sloganFont: "Droid Serif", 
//     nameFontSize: '24px', 
//     sloganFontSize: '16px',
//     nameFontFamily: 'Lato', 
//     sloganFontFamily: 'Droid Serif', 
//     unicodeTop: '10px', 
//     unicodeLeft: '50%', 
//     nameTop: '120px', 
//     nameLeft: '50%', 
//     sloganTop: '160px', 
//     sloganLeft: '50%' 
//   },
//   { 
//     name: "GlobalTech", 
//     unicode: "🌍", 
//     slogan: "Technology Without Borders", 
//     nameFont: "Ubuntu", 
//     sloganFont: "Fira Sans", 
//     nameFontSize: '24px', 
//     sloganFontSize: '16px',
//     nameFontFamily: 'Ubuntu', 
//     sloganFontFamily: 'Fira Sans', 
//     unicodeTop: '10px', 
//     unicodeLeft: '50%', 
//     nameTop: '120px', 
//     nameLeft: '50%', 
//     sloganTop: '160px', 
//     sloganLeft: '50%' 
//   },
// ];

// const Clients = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Lógica de navegación
//   const handlePrev = () => {
//     setCurrentIndex(prevIndex => (prevIndex === 0 ? clientsList.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex(prevIndex => (prevIndex === clientsList.length - 1 ? 0 : prevIndex + 1));
//   };

//   // Calcular el desplazamiento en píxeles basado en un ancho fijo
//   const getTranslateXInPixels = () => {
//     const minWidth = 163; // El ancho mínimo de cada elemento
//     return currentIndex * minWidth; // Mueve la lista por 163px cada vez
//   };

//   return (
//     <div className={styles['carousel-container']}>
//       <div className={styles['main-tittle']}>
//         <h3>Clients</h3>
//       </div>

//       <div className={styles['carousel-wrapper']}>
//         <i
//           className={`${styles['arrow-left']} fa fa-chevron-left`}
//           onClick={handlePrev}
//         ></i>

//         <div className={styles['clients-list-container']}>
//           <div
//             className={styles['clients-list']}
//             style={{
//               transform: `translateX(-${getTranslateXInPixels()}px)`,
//               transition: 'transform 0.5s ease',
//             }}
//           >
//             {clientsList.map((client, index) => (
//               <div className={styles['client-card']} key={index} style={{
//                 background: '#f3f3f3',  // Fondo general de la tarjeta
//                 padding: '20px', // Relleno interno para mejorar la visibilidad
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 position: 'relative', // Para poder usar top/left
//                 overflow: 'hidden', // Para evitar que los elementos sobresalgan
//               }}>
//                 {/* Unicode de fondo */}
//                 <div className={styles['unicode-background']} style={{
//                   fontSize: '80px', // Tamaño grande para el unicode
//                   textAlign: 'center',
//                   position: 'absolute',
//                   top: client.unicodeTop, // Posición top personalizada
//                   left: client.unicodeLeft, // Posición left personalizada
//                   transform: 'translateX(-50%)',
//                 }}>
//                   {client.unicode}
//                 </div>
//                 {/* Nombre con tipografía personalizada */}
//                 <h3 className={styles['client-name']} style={{
//                   fontFamily: client.nameFontFamily,  // Fuente personalizada para el nombre
//                   fontSize: client.nameFontSize,  // Tamaño personalizado para el nombre
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                   color: '#333',
//                   marginBottom: '10px',
//                   position: 'absolute',
//                   top: client.nameTop, // Posición top personalizada
//                   left: client.nameLeft, // Posición left personalizada
//                   transform: 'translateX(-50%)',
//                 }}>
//                   {client.name}
//                 </h3>
//                 {/* Slogan con una fuente diferente */}
//                 <p className={styles['client-slogan']} style={{
//                   fontFamily: client.sloganFontFamily,  // Fuente personalizada para el slogan
//                   fontSize: client.sloganFontSize,  // Tamaño personalizado para el slogan
//                   textAlign: 'center',
//                   color: '#555',
//                   fontStyle: 'italic',
//                   position: 'absolute',
//                   top: client.sloganTop, // Posición top personalizada
//                   left: client.sloganLeft, // Posición left personalizada
//                   transform: 'translateX(-50%)',
//                 }}>
//                   {client.slogan}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <i
//           className={`${styles['arrow-right']} fa fa-chevron-right`}
//           onClick={handleNext}
//         ></i>
//       </div>
//     </div>
//   );
// };

// export default Clients;


// 'use client';
// import { useState } from 'react';
// import styles from './Clients.module.css';

// // Importar Google Fonts
// import 'font-awesome/css/font-awesome.min.css'; // Para los iconos, si los quieres mantener

// // Datos de clientes ficticios con un "unicode" de fondo
// const clientsList = [
//   { name: "TechCorp", unicode: "🔧", slogan: "Innovating Your Future", nameFont: "Roboto", sloganFont: "Lora", unicodeTop: '10px', unicodeLeft: '50%', nameTop: '120px', nameLeft: '50%', sloganTop: '160px', sloganLeft: '50%' },
//   { name: "DataSolutions", unicode: "📊", slogan: "Data-Driven Success", nameFont: "Open Sans", sloganFont: "Merriweather", unicodeTop: '15px', unicodeLeft: '50%', nameTop: '130px', nameLeft: '50%', sloganTop: '170px', sloganLeft: '50%' },
//   { name: "CreativeLabs", unicode: "🎨", slogan: "Creativity at Work", nameFont: "Poppins", sloganFont: "Raleway", unicodeTop: '10px', unicodeLeft: '50%', nameTop: '120px', nameLeft: '50%', sloganTop: '160px', sloganLeft: '50%' },
//   { name: "GreenTech", unicode: "🌱", slogan: "Sustainable Technology", nameFont: "Montserrat", sloganFont: "Playfair Display", unicodeTop: '10px', unicodeLeft: '50%', nameTop: '120px', nameLeft: '50%', sloganTop: '160px', sloganLeft: '50%' },
//   { name: "FinServe", unicode: "💳", slogan: "Empowering Financial Growth", nameFont: "Oswald", sloganFont: "Quicksand", unicodeTop: '10px', unicodeLeft: '50%', nameTop: '120px', nameLeft: '50%', sloganTop: '160px', sloganLeft: '50%' },
//   { name: "CloudWorks", unicode: "☁️", slogan: "Your Cloud, Your Way", nameFont: "Source Sans Pro", sloganFont: "PT Serif", unicodeTop: '10px', unicodeLeft: '50%', nameTop: '120px', nameLeft: '50%', sloganTop: '160px', sloganLeft: '50%' },
//   { name: "SmartSystems", unicode: "💡", slogan: "Smart Solutions for a Smart World", nameFont: "Nunito", sloganFont: "Bitter", unicodeTop: '10px', unicodeLeft: '50%', nameTop: '120px', nameLeft: '50%', sloganTop: '160px', sloganLeft: '50%' },
//   { name: "NextGen Solutions", unicode: "🚀", slogan: "Shaping Tomorrow's World", nameFont: "Lato", sloganFont: "Droid Serif", unicodeTop: '10px', unicodeLeft: '50%', nameTop: '120px', nameLeft: '50%', sloganTop: '160px', sloganLeft: '50%' },
//   { name: "GlobalTech", unicode: "🌍", slogan: "Technology Without Borders", nameFont: "Ubuntu", sloganFont: "Fira Sans", unicodeTop: '10px', unicodeLeft: '50%', nameTop: '120px', nameLeft: '50%', sloganTop: '160px', sloganLeft: '50%' },
// ];

// const Clients = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Lógica de navegación
//   const handlePrev = () => {
//     setCurrentIndex(prevIndex => (prevIndex === 0 ? clientsList.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex(prevIndex => (prevIndex === clientsList.length - 1 ? 0 : prevIndex + 1));
//   };

//   // Calcular el desplazamiento en píxeles basado en un ancho fijo
//   const getTranslateXInPixels = () => {
//     const minWidth = 163; // El ancho mínimo de cada elemento
//     return currentIndex * minWidth; // Mueve la lista por 163px cada vez
//   };

//   return (
//     <div className={styles['carousel-container']}>
//       <div className={styles['main-tittle']}>
//         <h3>Clients</h3>
//       </div>

//       <div className={styles['carousel-wrapper']}>
//         <i
//           className={`${styles['arrow-left']} fa fa-chevron-left`}
//           onClick={handlePrev}
//         ></i>

//         <div className={styles['clients-list-container']}>
//           <div
//             className={styles['clients-list']}
//             style={{
//               transform: `translateX(-${getTranslateXInPixels()}px)`,
//               transition: 'transform 0.5s ease',
//             }}
//           >
//             {clientsList.map((client, index) => (
//               <div className={styles['client-card']} key={index} style={{
//                 background: '#f3f3f3',  // Fondo general de la tarjeta
//                 padding: '20px', // Relleno interno para mejorar la visibilidad
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 position: 'relative', // Para poder usar top/left
//                 overflow: 'hidden', // Para evitar que los elementos sobresalgan
//               }}>
//                 {/* Unicode de fondo */}
//                 <div className={styles['unicode-background']} style={{
//                   fontSize: '80px', // Tamaño grande para el unicode
//                   textAlign: 'center',
//                   position: 'absolute',
//                   top: client.unicodeTop, // Posición top personalizada
//                   left: client.unicodeLeft, // Posición left personalizada
//                   transform: 'translateX(-50%)',
//                 }}>
//                   {client.unicode}
//                 </div>
//                 {/* Nombre con tipografía personalizada */}
//                 <h3 className={styles['client-name']} style={{
//                   fontFamily: client.nameFont,  // Fuente personalizada para el nombre
//                   fontSize: '24px',
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                   color: '#333',
//                   marginBottom: '10px',
//                   position: 'absolute',
//                   top: client.nameTop, // Posición top personalizada
//                   left: client.nameLeft, // Posición left personalizada
//                   transform: 'translateX(-50%)',
//                 }}>
//                   {client.name}
//                 </h3>
//                 {/* Slogan con una fuente diferente */}
//                 <p className={styles['client-slogan']} style={{
//                   fontFamily: client.sloganFont,  // Fuente personalizada para el slogan
//                   fontSize: '16px',
//                   textAlign: 'center',
//                   color: '#555',
//                   fontStyle: 'italic',
//                   position: 'absolute',
//                   top: client.sloganTop, // Posición top personalizada
//                   left: client.sloganLeft, // Posición left personalizada
//                   transform: 'translateX(-50%)',
//                 }}>
//                   {client.slogan}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <i
//           className={`${styles['arrow-right']} fa fa-chevron-right`}
//           onClick={handleNext}
//         ></i>
//       </div>
//     </div>
//   );
// };

// export default Clients;


// 'use client';
// import { useState } from 'react';
// import styles from './Clients.module.css';

// // Importar Google Fonts
// import 'font-awesome/css/font-awesome.min.css'; // Para los iconos, si los quieres mantener

// // Datos de clientes ficticios con un "unicode" de fondo
// const clientsList = [
//   { name: "TechCorp", unicode: "🔧", slogan: "Innovating Your Future", nameFont: "Roboto", sloganFont: "Lora" },
//   { name: "DataSolutions", unicode: "📊", slogan: "Data-Driven Success", nameFont: "Open Sans", sloganFont: "Merriweather" },
//   { name: "CreativeLabs", unicode: "🎨", slogan: "Creativity at Work", nameFont: "Poppins", sloganFont: "Raleway" },
//   { name: "GreenTech", unicode: "🌱", slogan: "Sustainable Technology", nameFont: "Montserrat", sloganFont: "Playfair Display" },
//   { name: "FinServe", unicode: "💳", slogan: "Empowering Financial Growth", nameFont: "Oswald", sloganFont: "Quicksand" },
//   { name: "CloudWorks", unicode: "☁️", slogan: "Your Cloud, Your Way", nameFont: "Source Sans Pro", sloganFont: "PT Serif" },
//   { name: "SmartSystems", unicode: "💡", slogan: "Smart Solutions for a Smart World", nameFont: "Nunito", sloganFont: "Bitter" },
//   { name: "NextGen Solutions", unicode: "🚀", slogan: "Shaping Tomorrow's World", nameFont: "Lato", sloganFont: "Droid Serif" },
//   { name: "GlobalTech", unicode: "🌍", slogan: "Technology Without Borders", nameFont: "Ubuntu", sloganFont: "Fira Sans" },
// ];

// const Clients = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Lógica de navegación
//   const handlePrev = () => {
//     setCurrentIndex(prevIndex => (prevIndex === 0 ? clientsList.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex(prevIndex => (prevIndex === clientsList.length - 1 ? 0 : prevIndex + 1));
//   };

//   // Calcular el desplazamiento en píxeles basado en un ancho fijo
//   const getTranslateXInPixels = () => {
//     const minWidth = 163; // El ancho mínimo de cada elemento
//     return currentIndex * minWidth; // Mueve la lista por 163px cada vez
//   };

//   return (
//     <div className={styles['carousel-container']}>
//       <div className={styles['main-tittle']}>
//         <h3>Clients</h3>
//       </div>

//       <div className={styles['carousel-wrapper']}>
//         <i
//           className={`${styles['arrow-left']} fa fa-chevron-left`}
//           onClick={handlePrev}
//         ></i>

//         <div className={styles['clients-list-container']}>
//           <div
//             className={styles['clients-list']}
//             style={{
//               transform: `translateX(-${getTranslateXInPixels()}px)`,
//               transition: 'transform 0.5s ease',
//             }}
//           >
//             {clientsList.map((client, index) => (
//               <div className={styles['client-card']} key={index} style={{
//                 background: '#f3f3f3',  // Fondo general de la tarjeta
//                 padding: '20px', // Relleno interno para mejorar la visibilidad
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//               }}>
//                 {/* Unicode de fondo */}
//                 <div className={styles['unicode-background']} style={{
//                   fontSize: '80px', // Tamaño grande para el unicode
//                   textAlign: 'center',
//                   marginBottom: '20px',
//                 }}>
//                   {client.unicode}
//                 </div>
//                 {/* Nombre con tipografía personalizada */}
//                 <h3 className={styles['client-name']} style={{
//                   fontFamily: client.nameFont,  // Fuente personalizada para el nombre
//                   fontSize: '24px',
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                   color: '#333',
//                   marginBottom: '10px',
//                 }}>
//                   {client.name}
//                 </h3>
//                 {/* Slogan con una fuente diferente */}
//                 <p className={styles['client-slogan']} style={{
//                   fontFamily: client.sloganFont,  // Fuente personalizada para el slogan
//                   fontSize: '16px',
//                   textAlign: 'center',
//                   color: '#555',
//                   fontStyle: 'italic',
//                 }}>
//                   {client.slogan}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <i
//           className={`${styles['arrow-right']} fa fa-chevron-right`}
//           onClick={handleNext}
//         ></i>
//       </div>
//     </div>
//   );
// };

// export default Clients;


// 'use client';
// import { useState } from 'react';
// import styles from './Clients.module.css';

// // Importar Font Awesome
// import 'font-awesome/css/font-awesome.min.css';

// // Datos de clientes ficticios
// const clientsList = [
//   { name: "【TechCorp", logo: "fa fa-cogs", slogan: "Innovating Your Future" },
//   { name: "DataSolutions", logo: "fa fa-database", slogan: "Data-Driven Success" },
//   { name: "CreativeLabs", logo: "fa fa-paint-brush", slogan: "Creativity at Work" },
//   { name: "GreenTech", logo: "fa fa-leaf", slogan: "Sustainable Technology" },
//   { name: "FinServe", logo: "fa fa-credit-card", slogan: "Empowering Financial Growth" },
//   { name: "CloudWorks", logo: "fa fa-cloud", slogan: "Your Cloud, Your Way" },
//   { name: "SmartSystems", logo: "fa fa-lightbulb-o", slogan: "Smart Solutions for a Smart World" },
//   { name: "NextGen Solutions", logo: "fa fa-rocket", slogan: "Shaping Tomorrow's World" },
//   { name: "GlobalTech", logo: "fa fa-globe", slogan: "Technology Without Borders" },
//   { name: "SmartSystems", logo: "fa fa-lightbulb-o", slogan: "Smart Solutions for a Smart World" },
//   { name: "NextGen Solutions", logo: "fa fa-rocket", slogan: "Shaping Tomorrow's World" },
//   { name: "GlobalTech", logo: "fa fa-globe", slogan: "Technology Without Borders" },
//   { name: "SmartSystems", logo: "fa fa-lightbulb-o", slogan: "Smart Solutions for a Smart World" },
//   { name: "NextGen Solutions", logo: "fa fa-rocket", slogan: "Shaping Tomorrow's World" },
//   { name: "GlobalTech", logo: "fa fa-globe", slogan: "Technology Without Borders" },
// ];

// const Clients = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Lógica de navegación
//   const handlePrev = () => {
//     setCurrentIndex(prevIndex => (prevIndex === 0 ? clientsList.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex(prevIndex => (prevIndex === clientsList.length - 1 ? 0 : prevIndex + 1));
//   };

//   // Calcular el desplazamiento en píxeles basado en un ancho fijo
//   const getTranslateXInPixels = () => {
//     const minWidth = 163; // El ancho mínimo de cada elemento
//     return currentIndex * minWidth; // Mueve la lista por 120px cada vez
//   };

//   return (
//     <div className={styles['carousel-container']}>

//         <div className={styles['main-tittle']}>
//                 <h3>
//                     Clients
//                 </h3> 
//          </div>


//       <div className={styles['carousel-wrapper']}>
//         <i
//           className={`${styles['arrow-left']} fa fa-chevron-left`}
//           onClick={handlePrev}
//         ></i>

//         <div className={styles['clients-list-container']}>
//           <div
//             className={styles['clients-list']}
//             style={{
//               transform: `translateX(-${getTranslateXInPixels()}px)`, // Aplicar desplazamiento en píxeles
//               transition: 'transform 0.5s ease',
//             }}
//           >
//             {clientsList.map((client, index) => (
//               <div className={styles['client-card']} key={index}>
//                 <i className={`${styles['vision-icon']} ${client.logo}`}></i>
//                 <h3 className={styles['client-name']}>{client.name}</h3>
//                 <p className={styles['client-slogan']}>{client.slogan}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <i
//           className={`${styles['arrow-right']} fa fa-chevron-right`}
//           onClick={handleNext}
//         ></i>
//       </div>
//     </div>
//   );
// };

// export default Clients;


// 'use client';
// import { useState, useEffect } from 'react';
// import styles from './Clients.module.css';

// // Importar Font Awesome
// import 'font-awesome/css/font-awesome.min.css';

// // Datos de clientes ficticios (ahora los logos son íconos de Font Awesome)
// const clientsList = [
//   { name: "TechCorp", logo: "fa fa-cogs", slogan: "Innovating Your Future" },
//   { name: "DataSolutions", logo: "fa fa-database", slogan: "Data-Driven Success" },
//   { name: "CreativeLabs", logo: "fa fa-paint-brush", slogan: "Creativity at Work" },
//   { name: "GreenTech", logo: "fa fa-leaf", slogan: "Sustainable Technology" },
//   { name: "FinServe", logo: "fa fa-credit-card", slogan: "Empowering Financial Growth" },
//   { name: "CloudWorks", logo: "fa fa-cloud", slogan: "Your Cloud, Your Way" },
//   { name: "SmartSystems", logo: "fa fa-lightbulb-o", slogan: "Smart Solutions for a Smart World" },
//   { name: "NextGen Solutions", logo: "fa fa-rocket", slogan: "Shaping Tomorrow's World" },
//   { name: "GlobalTech", logo: "fa fa-globe", slogan: "Technology Without Borders" },
//   { name: "SmartSystems", logo: "fa fa-lightbulb-o", slogan: "Smart Solutions for a Smart World" },
//   { name: "NextGen Solutions", logo: "fa fa-rocket", slogan: "Shaping Tomorrow's World" },
//   { name: "GlobalTech", logo: "fa fa-globe", slogan: "Technology Without Borders" },
// ];

// const Clients = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [clientsPerView, setClientsPerView] = useState(5); // Por defecto, 5 en móvil

//   // Controlar el número de clientes visibles según el tamaño de la ventana
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 600) {
//         setClientsPerView(5); // Móvil
//       } else if (width < 1024) {
//         setClientsPerView(7); // Tablet
//       } else {
//         setClientsPerView(9); // Escritorio, puede ser 9, 12, 15, según lo que necesites
//       }
//     };
    
//     window.addEventListener('resize', handleResize);
//     handleResize(); // Llamar a la función de ajuste en el inicio

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Manejadores de navegación
//   const handlePrev = () => {
//     setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
//   };

//   const handleNext = () => {
//     setCurrentIndex(prevIndex => Math.min(prevIndex + 1, clientsList.length - clientsPerView));
//   };

//   return (
//     <div className={styles['carousel-container']}>
//       <div className={styles['carousel-wrapper']}>
   
//         <i
//             className={`${styles['arrow-left']} fa fa-chevron-left`}
//             onClick={handlePrev}
//         ></i>




//         <div className={styles['clients-list-container']}>
//           <div className={styles['clients-list']} style={{
//             transform: `translateX(-${currentIndex * (100 / clientsPerView)}%)`,
//             transition: 'transform 0.5s ease',
//           }}>
//             {clientsList.map((client, index) => (
//               <div className={styles['client-card']} key={index}>
//                 {/* Usando el ícono de Font Awesome */}
//                 <i className={`${styles['vision-icon']} ${client.logo}`}></i>
//                 <h3 className={styles['client-name']}>{client.name}</h3>
//                 <p className={styles['client-slogan']}>{client.slogan}</p>
//               </div>
//             ))}
//           </div>
//         </div>

       

//         <i
//             className={`${styles['arrow-right']} fa fa-chevron-right`}
//             onClick={handleNext}
//         ></i>



//       </div>
//     </div>
//   );
// };

// export default Clients;


// 'use client'
// import { useEffect, useState } from 'react';
// import styles from './Clients.module.css';
// import Image from 'next/image';
// import 'font-awesome/css/font-awesome.min.css';

// export default function Clients() {
//     const [currentImage, setCurrentImage] = useState(0);
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const [currentLogoCicleIndex, setCurrentLogoCicleIndex] = useState(0);

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
//         setCurrentImage(prevValue => prevValue === 0 ? imagesList.length - 1 : prevValue - 1);
//         setCurrentTextIndex(prevValue => prevValue === 0 ? textList.length - 1 : prevValue - 1); 

//         setCurrentLogoCicleIndex(prevValue => prevValue === 0 ? logoCicle.length - 1 : prevValue - 1); 
//     };

//     const nextImage = () => {
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

//     return (
//         <div className={styles['carousel-container']}>
//             <div className={styles['image-container']}>
//                 <div className={styles['custom-image']}>
//                     <Image
//                         src={imagesList[currentImage]}
//                         width={1024}
//                         height={540}
//                         alt="Carousel image"
//                         layout="responsive"
//                     />
//                 </div>

//                 <div className={styles['loading-bar']}></div>

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