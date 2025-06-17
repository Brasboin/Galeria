// Datos de ejemplo para las imágenes (puedes reemplazar con tus propias imágenes)
const imageData = {
    2023: {
        enero: {
            main: {
                src: "https://picsum.photos/800/600?random=1",
                title: "Primer día del año",
                description: "Comenzamos el 2023 con alegría y esperanza"
            },
            secondary: [
                { src: "https://picsum.photos/400/300?random=2", date: "01 Enero", title: "Año Nuevo" },
                { src: "https://picsum.photos/400/300?random=3", date: "08 Enero", title: "Reunión familiar" },
                { src: "https://picsum.photos/400/300?random=4", date: "15 Enero", title: "Paseo por la ciudad" },
                { src: "https://picsum.photos/400/300?random=5", date: "22 Enero", title: "Momento especial" }
            ]
        },
        febrero: {
            main: {
                src: "https://picsum.photos/800/600?random=8",
                title: "Mes del amor",
                description: "Febrero lleno de momentos románticos"
            },
            secondary: [
                { src: "https://picsum.photos/400/300?random=9", date: "01 Febrero", title: "Inicio de febrero" },
                { src: "https://picsum.photos/400/300?random=10", date: "14 Febrero", title: "San Valentín" },
                { src: "https://picsum.photos/400/300?random=11", date: "21 Febrero", title: "Aventura" },
                { src: "https://picsum.photos/400/300?random=12", date: "28 Febrero", title: "Fin de mes" }
            ]
        },
        septiembre: {
            main: {
                src: "./septiembre2023/1.jpg",
                title: "Nuestro septiembre especial",
                description: "El mes que marcó el inicio de nuestra historia"
            },
            secondary: [
                { src: "./septiembre2023/2.jpg", date: "tu :3", title: "Wuapa" },
                { src: "./septiembre2023/3.jpg", date: "tu :3", title: "linda :3" },
                { src: "./septiembre2023/4.jpg", date: "tu :3", title: ":3" },
                { src: "./septiembre2023/5.jpg", date: "Polar", title: "Polar con polar jsjs" }
            ]
        },
        octubre: {
            main: {
                src: "./octubre2023/5.jpg",
                title: "Octubre de descubrimientos",
                description: "Conociendonos más cada día"
            },
            secondary: [
                { src: "./octubre2023/4.jpg", date: "Primer viaje", title: "Primer viaje juntos" },
                { src: "./octubre2023/3.jpg", date: "chambeadores", title: "modo chamba" },
                { src: "./octubre2023/2.jpg", date: "chambeadores", title: "con mi saco :3"},
                { src: "./octubre2023/1.jpg", date: "un atardecer porque si" , title: "Solecito"}
            ]
        },
        noviembre: {
            main: {
                src: "./noviembre2023/1.jpg",
                title: "Noviembre de Cumple",
                description: "tan linda en tu cumple"
            },
            secondary: [
                { src: "./noviembre2023/2.jpg", date: "Viajecito", title: "Nosotros en el glamping" },
                { src: "./noviembre2023/3.jpg", date: "de relax", title: "toda relajada jaja" },
                { src: "./noviembre2023/4.jpg", date: ":3", title: "Muy linda mi niña" },
                { src: "./noviembre2023/5.jpg", date: ":3", title: "Juntossss" }
            ]
        },
        diciembre: {
            main: {
                src: "./diciembre2023/3.jpg",
                title: "Diciembre mágico",
                description: "Nuestra primera Navidad como pareja"
            },
            secondary: [
                { src: "./diciembre2023/2.jpg", date: "bolita de amor", title: ":3" },
                { src: "./diciembre2023/4.jpg", date: "Viendo lucecitas", title: "viajecito a villavo" },
                { src: "./diciembre2023/1.jpg", date: "24 a la distancia", title: ":c" },
                { src: "./diciembre2023/5.jpg", date: "noche con cerditosaurio", title: ":3" }
            ]
        }
    },
    2024: {
        enero: {
            main: {
                src: "./enero2024/1.jpg",
                title: "Nuevo año juntos",
                description: "2024 :3"
            },
            secondary: [
                { src: "./enero2024/2.jpg", date: "Family", title: ":3" },
                { src: "./enero2024/3.jpg", date: "Wuapa", title: "mi saquito ;3" },
                { src: "./enero2024/4.jpg", date: "Manguito", title: "Empiezo a creer que te gusta mas el mango que yo :c" },
                { src: "./enero2024/5.jpg", date: ":3", title: "amonosssss" }
            ]
        },
        febrero: {
            main: {
                src: "./febrero2024/4.jpg",
                title: "Febrero DE VACAPERRO jsjsj",
                description: ":3"
            },
            secondary: [
                { src: "./febrero2024/2.jpg", date: "que linda :3", title: "grrrrr"},
                { src: "./febrero2024/3.jpg", date: "detalle", title: "como siempre consintiendome" },
                { src: "./febrero2024/1.jpg", date: ":3", title: "felizzzz" },
                { src: "./febrero2024/5.jpg", date: "michis", title: ":3" }
            ]
        },
        marzo: {
            main: {
                src: "./marzo2024/1.jpg",
                title: "Marzo especial",
                description: "Tanta linda en marzo"
            },
            secondary: [
                { src: "./marzo2024/2.jpg", date: "noche de skincare ", title: "toca repitis" },
                { src: "./marzo2024/3.jpg", date: "Mujer pa bella", title: ":3"},
                { src: "./marzo2024/4.jpg", date: "Mood estudiando", title: "juiciosa :3" },
                { src: "./marzo2024/5.jpg", date: "girasolessssss", title: ":3" }
            ]
        },
        abril: {
            main: {
                src: "./abril2024/1.jpg",
                title: "Abrillll",
                description: "Tu y tu pasion por los mangos jeje"
            },
            secondary: [
                { src: "./abril2024/2.jpg", date: "viajecito", title: "ultimo viaje en bus" },
                { src: "./abril2024/3.jpg", date: "graciass", title: ":3 "},
                { src: "./abril2024/4.jpg", date: "descansando", title: "_3" },
                { src: "./abril2024/5.jpg", date: "chambeadores", title: "ganando puntos con los suegros" }
            ]
        },
        mayo: {
            main: {
                src: "./mayo2024/1.jpg",
                title: "Mayo chambeadores",
                description: "pintando el cuarto jeje"
            },
            secondary: [
                { src: "./mayo2024/2.jpg", date: "primer viaje en motoo", title: ":3" },
                { src: "./mayo2024/3.jpg", date: "wuapos", title: ";3" },
                { src: "./mayo2024/4.jpg", date: "Conociendo el mirador jeje", title: "toca volver a irrr" },
                { src: "./mayo2024/5.jpg", date: "por mas viajess", title: ":3" }
            ]
        },
        junio: {
            main: {
                src: "./junio2024/1.jpg",
                title: "Junio happyyy",
                description: "Wuapos como siempre"
            },
            secondary: [
                { src: "./junio2024/2.jpg", date: ":3", title: "al cine juntos" },
                { src: "./junio2024/3.jpg", date: "NO TENGO DUDAS", title: ":3" },
                { src: "./junio2024/4.jpg", date: "Mujer pa hermosaaaa", title: ":3" },
                { src: "./junio2024/5.jpg", date: "una noche bien tranqui", title: ";3" }
            ]
        },
        julio: {
            main: {
                src: "./julio2024/1.jpg",
                title: "Julioop",
                description: "Meros artistas"
            },
            secondary: [
                { src: "./julio2024/2.jpg", date: "hazme un hijo y abandoname dios mio ", title: ":3" },
                { src: "./julio2024/3.jpg", date: ":3", title: "wuapos" },
                { src: "./julio2024/4.jpg", date: "toda tierna en tu pijama jeje", title: ":3" },
                { src: "./julio2024/5.jpg", date: "Mi niña", title: ":3" }
            ]
        },
        agosto: {
            main: {
                src: "./agosto2024/1.jpg",
                title: "Agosto de playa",
                description: "tomando el sol"
            },
            secondary: [
                { src: "./agosto2024/2.jpg", date: ":3", title: "tu :3" },
                { src: "./agosto2024/3.jpg", date: "a la distancia chambeando ajjaja", title: ":c" },
                { src: "./agosto2024/4.jpg", date: "JAJAJAJAJAJA", title: ":D" },
                { src: "./agosto2024/5.jpg", date: "felizzzz", title: ":3" }
            ]
        },
        septiembre: {
            main: {
                src: "./septiembre2024/1.jpg",
                title: "Septiembre de amor jeje",
                description: "Modo pose"
            },
            secondary: [
                { src: "./septiembre2024/2.jpg", date: ":3", title: "que lindaaaa" },
                { src: "./septiembre2024/3.jpg", date: "mujeronnnn", title: ":3" },
                { src: "./septiembre2024/4.jpg", date: "tan bella con tus florez ", title: ";3" },
                { src: "./septiembre2024/5.jpg", date: "graciasssssss", title: ":D" }
            ]
        },
        octubre: {
            main: {
                src: "./octubre2024/1.jpg",
                title: "Octubre dorado",
                description: "ENAMORAOOOOO"
            },
            secondary: [
                { src: "./octubre2024/2.jpg", date: "de viajecitoo", title: ":3" },
                { src: "./octubre2024/3.jpg", date: "bien lindosss", title: ":D" },
                { src: "./octubre2024/4.jpg", date: "un hombre felizzz", title: ":3" },
                { src: "./octubre2024/5.jpg", date: "Noche de cineee", title: "jajaja" }
            ]
        },
        noviembre: {
            main: {
                src: "./noviembre2024/1.jpg",
                title: "Noviembre sin tii jajajaj",
                description: "Mod Boda "
            },
            secondary: [
                { src: "./noviembre2024/2.jpg", date: "Mi niñaaa", title: ":3" },
                { src: "./noviembre2024/3.jpg", date: "pero que wuapaaa", title: ":3" },
                { src: "./noviembre2024/4.jpg", date: "juntitos ", title: "mi vida" },
                { src: "./noviembre2024/5.jpg", date: "Te amuuuuuu", title: ":3" }
            ]
        },
        diciembre: {
            main: {
                src: "./diciembre2024/1.jpg",
                title: "Diciembre mágico",
                description: "AHHHH QUE HERMOSAAA"
            },
            secondary: [
                { src: "./diciembre2024/2.jpg", date: "y no comparte helado :c", title: "envidiosa"},
                { src: "./diciembre2024/3.jpg", date: "dia en el zoo", title: ":D" },
                { src: "./diciembre2024/4.jpg", date: "Navidad juntos", title: ":3" },
                { src: "./diciembre2024/5.jpg", date: "PINGUINO NAVIDEÑOOOO", title: "ajjajaja" }
            ]
        }
    },
    2025: {
        enero: {
            main: {
                src: "./enero2025/1.jpg",
                title: "primer dia del año juntossss",
                description: "y felices"
            },
            secondary: [
                { src: "./enero2025/2.jpg", date: "Noche felizzz", title: ":D" },
                { src: "./enero2025/3.jpg", date: "Noche de pizzza", title: "ricoo" },
                { src: "./enero2025/4.jpg", date: "tarde de rioo", title: "sjjs" },
                { src: "./enero2025/5.jpg", date: "panza llena corazon contento", title: "Te amu" }
            ]
        },
        febrero: {
            main: {
                src: "./febrero2025/1.jpg",
                title: "Febrero :3",
                description: "Noche de juegosss"
            },
            secondary: [
                { src: "./febrero2025/2.jpg", date: "que linda mi niña", title: ":3" },
                { src: "./febrero2025/3.jpg", date: "Yo cuando te veo ", title: "jeje" },
                { src: "./febrero2025/4.jpg", date: "Noche de entreno", title: "fitness" },
                { src: "./febrero2025/5.jpg", date: "Noche de mimir", title: "wuapa :3" }
            ]
        },
        marzo: {
            main: {
                src: "./marzo2025/1.jpg",
                title: "Marzo de chill",
                description: "Viajecitoooo"
            },
            secondary: [
                { src: "./marzo2025/2.jpg", date: "Mujer chambeadora", title: ":3" },
                { src: "./marzo2025/3.jpg", date: "Mujer hermosa", title: ":D" },
                { src: "./marzo2025/4.jpg", date: "Mujer preciosa :3", title: "amameeee" },
                { src: "./marzo2025/5.jpg", date: "y el afortunado jeje", title: ":3" }
            ]
        },
        abril: {
            main: {
                src: "./abril2025/1.jpg",
                title: "Abrilll",
                description: "La mujer del ingeniero jeje"
            },
            secondary: [
                { src: "./abril2025/2.jpg", date: "El ingeniero", title: ":D" },
                { src: "./abril2025/3.jpg", date: "Dia de chamba y lluvia", title: ":c" },
                { src: "./abril2025/4.jpg", date: "tan linda con mi saco jeje", title: ":D" },
                { src: "./abril2025/5.jpg", date: "wuapaaaaaa", title: "lloro si no estas :c" }
            ]
        },
        mayo: {
            main: {
                src: "./mayo2025/1.jpg",
                title: "Mayo de solecito",
                description: "Viajecitoooooo"
            },
            secondary: [
                { src: "./mayo2025/2.jpg", date: "presumiendo los cascos ajjaja", title: ":D" },
                { src: "./mayo2025/3.jpg", date: "Felciessssss", title: "toca volver a irrr" },
                { src: "./mayo2025/4.jpg", date: "Arriba las wuapas y te fuiste al cierlo ejjeje", title: "wuapa :3" },
                { src: "./mayo2025/5.jpg", date: "Definitivamente amas mas al mango que a mi :c", title: "triste :c" }
            ]
        },
        junio: {
            main: {
                src: "./junio2025/1.jpg",
                title: "Junio happyyyy",
                description: "Con mi regalo de cumpleaños"
            },
            secondary: [
                { src: "./junio2025/2.jpg", date: "te amoo mi chambeadora", title: ":3" },
                { src: "./junio2025/3.jpg", date: "mujer para bellaaa", title: ":D" },
                { src: "./junio2025/4.jpg", date: "un dia muy felizzzz", title: ":)" },
                { src: "./junio2025/5.jpg", date: "Graciassss por todooo", title: "Te amooo" }
            ]
        }
    }
};



// Configuración de meses disponibles por año
const availableMonths = {
    2023: ['septiembre', 'octubre', 'noviembre', 'diciembre'], // Septiembre a diciembre para 2023
    2024: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'], // Todos los meses para 2024
    2025: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']  // Solo hasta junio para 2025
};

// Variables globales
let currentYear = 2023;
let currentMonth = 'septiembre'; // Cambiado a septiembre para 2023
let currentSection = 'gallery';

// Función para generar datos por defecto para meses sin datos
function getDefaultMonthData(year, month, startRandom = 1) {
    const monthNames = {
        enero: "Enero", febrero: "Febrero", marzo: "Marzo", abril: "Abril",
        mayo: "Mayo", junio: "Junio", julio: "Julio", agosto: "Agosto",
        septiembre: "Septiembre", octubre: "Octubre", noviembre: "Noviembre", diciembre: "Diciembre"
    };
    
    return {
        main: {
            src: `https://picsum.photos/800/600?random=${startRandom}`,
            title: `Momentos de ${monthNames[month]}`,
            description: `Recuerdos especiales de ${monthNames[month]} ${year}`
        },
        secondary: Array.from({length: 4}, (_, i) => ({
            src: `https://picsum.photos/400/300?random=${startRandom + i + 1}`,
            date: `${String(i * 7 + 1).padStart(2, '0')} ${monthNames[month]}`,
            title: `Momento ${i + 1}`
        }))
    };
}

// Función para obtener datos de un mes específico
function getMonthData(year, month) {
    if (imageData[year] && imageData[year][month]) {
        return imageData[year][month];
    }
    
    // Generar datos por defecto
    const randomSeed = year * 1000 + Object.keys({
        enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
        julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12
    })[Object.keys({
        enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
        julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12
    }).indexOf(month)] * 10;
    
    return getDefaultMonthData(year, month, randomSeed);
}



// Función para actualizar la galería
function updateGallery() {
    const monthData = getMonthData(currentYear, currentMonth);
    
    // Actualizar el título
    const monthNames = {
        enero: "Enero", febrero: "Febrero", marzo: "Marzo", abril: "Abril",
        mayo: "Mayo", junio: "Junio", julio: "Julio", agosto: "Agosto",
        septiembre: "Septiembre", octubre: "Octubre", noviembre: "Noviembre", diciembre: "Diciembre"
    };
    
    document.querySelector('.current-month').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Actualizar imagen principal
    const mainImage = document.querySelector('.main-image');
    const imageTitle = document.querySelector('.image-title');
    const imageDescription = document.querySelector('.image-description');
    
    mainImage.src = monthData.main.src;
    mainImage.alt = monthData.main.title;
    imageTitle.textContent = monthData.main.title;
    imageDescription.textContent = monthData.main.description;
    
    // Actualizar imágenes secundarias
    const imageGrid = document.querySelector('.image-grid');
    imageGrid.innerHTML = '';
    
    monthData.secondary.forEach((image, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.style.animationDelay = `${index * 0.1}s`;
        
        imageItem.innerHTML = `
            <img src="${image.src}" alt="${image.title || image.date}">
            <div class="image-info">
                <span class="image-date">${image.date}</span>
            </div>
        `;
        
        // Añadir evento click para modal
        imageItem.addEventListener('click', () => {
            openModal(image.src, image.title || image.date, image.date);
        });
        
        imageGrid.appendChild(imageItem);
    });
    
    // Añadir evento click a la imagen principal
    document.querySelector('.main-image-container').onclick = () => {
        openModal(monthData.main.src, monthData.main.title, monthData.main.description);
    };
    
    // Reiniciar animaciones
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.style.animation = 'none';
    galleryContainer.offsetHeight; // Trigger reflow
    galleryContainer.style.animation = 'fadeIn 0.6s ease-out';
    
}

// Función para actualizar los tabs de meses según el año
function updateMonthTabs() {
    const monthTabs = document.querySelector('.month-tabs');
    const allMonths = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const monthNames = {
        enero: "Enero", febrero: "Febrero", marzo: "Marzo", abril: "Abril",
        mayo: "Mayo", junio: "Junio", julio: "Julio", agosto: "Agosto",
        septiembre: "Septiembre", octubre: "Octubre", noviembre: "Noviembre", diciembre: "Diciembre"
    };
    
    // Limpiar tabs existentes
    monthTabs.innerHTML = '';
    
    // Obtener meses disponibles para el año actual
    const yearMonths = availableMonths[currentYear] || allMonths;
    
    // Crear tabs solo para los meses disponibles
    yearMonths.forEach(month => {
        const tab = document.createElement('button');
        tab.className = 'month-tab';
        tab.dataset.month = month;
        tab.textContent = monthNames[month];
        
        // Marcar como activo si es el mes actual
        if (month === currentMonth) {
            tab.classList.add('active');
        }
        
        // Agregar evento click
        tab.addEventListener('click', function() {
            // Remover active de todos los tabs
            monthTabs.querySelectorAll('.month-tab').forEach(t => t.classList.remove('active'));
            // Añadir active al tab clickeado
            this.classList.add('active');
            
            currentMonth = this.dataset.month;
            updateGallery();
        });
        
        monthTabs.appendChild(tab);
    });
    
    // Si el mes actual no está disponible en el año seleccionado, cambiar al primer mes disponible
    if (!yearMonths.includes(currentMonth)) {
        currentMonth = yearMonths[0];
    }
}

// Función para cambiar de sección
function switchSection(sectionName) {
    currentSection = sectionName;
    
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Actualizar botones de navegación
    const sectionBtns = document.querySelectorAll('.section-btn');
    sectionBtns.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Mostrar/ocultar selectores de año según la sección
    const yearSelector = document.getElementById('yearSelector');
    const monthTabs = document.getElementById('monthTabs');
    
    if (sectionName === 'gallery') {
        yearSelector.style.display = 'flex';
        monthTabs.style.display = 'flex';
    } else {
        yearSelector.style.display = 'none';
        monthTabs.style.display = 'none';
    }
}

// Función para abrir el modal
function openModal(src, title, description) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = src;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'block';
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}



// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Botones de sección
    const sectionButtons = document.querySelectorAll('.section-btn');
    sectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            switchSection(this.dataset.section);
        });
    });
    
    // Botones de año
    const yearButtons = document.querySelectorAll('.year-btn');
    yearButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            yearButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            currentYear = parseInt(this.dataset.year);
            
            // Actualizar tabs de meses según el año seleccionado
            updateMonthTabs();
            
            // Actualizar galería
            updateGallery();
        });
    });
    
    // Los event listeners para los tabs de meses se crean dinámicamente en updateMonthTabs()
    
    // Modal events
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar modal al hacer click fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Event listeners para imágenes de secciones especiales
    setupSpecialSectionEvents();
    
    // Inicializar tabs de meses según el año inicial
    updateMonthTabs();
    
    // Inicializar la galería
    updateGallery();
});

// Función para configurar eventos de secciones especiales
function setupSpecialSectionEvents() {
    // Eventos para sección "Primer Día de Pareja"
    const loveImages = document.querySelectorAll('.love-image, .love-moment img');
    loveImages.forEach(img => {
        img.addEventListener('click', function() {
            const title = this.alt || 'Momento especial';
            const description = this.closest('.main-moment') ? 
                this.closest('.main-moment').querySelector('.moment-description')?.textContent || 'Nuestro primer día juntos' :
                this.closest('.love-moment').querySelector('h4')?.textContent || 'Momento de amor';
            
            openModal(this.src, title, description);
        });
    });
    
    // Eventos para sección "Aniversarios"
    const anniversaryImages = document.querySelectorAll('.anniversary-images img');
    anniversaryImages.forEach(img => {
        img.addEventListener('click', function() {
            const anniversaryCard = this.closest('.anniversary-card');
            const anniversaryTitle = anniversaryCard.querySelector('.anniversary-title')?.textContent || 'Aniversario';
            const anniversaryDate = anniversaryCard.querySelector('.anniversary-date')?.textContent || '';
            
            openModal(this.src, anniversaryTitle, anniversaryDate);
        });
    });
}

// Función para añadir efectos de parallax suave al scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.gallery-container');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed * 0.1}px)`;
    }
});

// Precargar imágenes para mejor experiencia
function preloadImages() {
    const imageUrls = [];
    
    Object.keys(imageData).forEach(year => {
        Object.keys(imageData[year]).forEach(month => {
            const monthData = imageData[year][month];
            imageUrls.push(monthData.main.src);
            monthData.secondary.forEach(img => imageUrls.push(img.src));
        });
    });
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Iniciar precarga después de cargar la página
window.addEventListener('load', preloadImages);

// Función para detectar si es dispositivo móvil y ajustar comportamientos
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustes para móviles
if (isMobile()) {
    // Reducir efectos de hover en móviles
    document.body.classList.add('mobile');
    
    // Usar eventos touch en lugar de hover para móviles
    document.querySelectorAll('.image-item').forEach(item => {
        item.addEventListener('touchstart', function() {
            this.classList.add('touched');
        });
        
        item.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('touched');
            }, 300);
        });
    });
} 