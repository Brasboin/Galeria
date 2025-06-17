# 💕 Galería de Momentos Románticos

Una galería web elegante y moderna diseñada especialmente para preservar los momentos más especiales de una relación. Con secciones dedicadas para fechas importantes, primer día de pareja y aniversarios.

## ✨ Características Principales

### 🗓️ **Galería por Fechas**
- **Navegación por años**: Organiza contenido entre 2023-2025
- **Vista mensual**: 12 meses disponibles para cada año
- **Layout principal**: Imagen destacada grande + 6 imágenes secundarias
- **Fácil navegación**: Sistema de pestañas intuitivo

### 💕 **Primer Día de Pareja**
- **Momentos únicos**: Sección especial para el día más importante
- **Historia completa**: Primera cita, primer beso, primer "te amo", oficialmente novios
- **Diseño romántico**: Gradientes cálidos en tonos rosa y dorado
- **Layout especial**: Imagen principal + 4 momentos clave

### 💍 **Aniversarios**
- **Timeline de celebraciones**: Cada aniversario con su propia tarjeta elegante
- **Diseño expandible**: Fácil agregar futuros aniversarios
- **Galería por fecha**: 3 imágenes especiales por cada celebración
- **Badges numerados**: Indicadores visuales del número de años
- **Placeholder incluido**: Espacio preparado para futuros años de felicidad

### 🎨 **Diseño y Experiencia**
- **Totalmente responsivo**: Perfecto en móviles, tablets y escritorio
- **Modal interactivo**: Vista ampliada de todas las imágenes
- **Animaciones fluidas**: Transiciones suaves y efectos elegantes
- **Tres paletas de colores**: Azul/morado (general), rosa/dorado (primer día), morado/azul (aniversarios)
- **Efectos glassmorphism**: Fondos translúcidos modernos

## 🚀 Cómo usar

### 1. Subir a GitHub Pages

1. Haz fork de este repositorio o crea uno nuevo
2. Sube todos los archivos (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Ve a Settings > Pages en tu repositorio
4. Selecciona "Deploy from a branch" > "main" > "/ (root)"
5. ¡Tu galería estará disponible en `https://tu-usuario.github.io/tu-repositorio`!

### 2. Personalizar con tus imágenes

#### Para la Galería por Fechas
Edita `script.js` y busca la sección `imageData`:

```javascript
const imageData = {
    2023: {
        enero: {
            main: {
                src: "https://tu-imagen-principal.jpg",
                title: "Título especial",
                description: "Descripción romántica"
            },
            secondary: [
                { 
                    src: "https://tu-imagen.jpg", 
                    date: "01 Enero", 
                    title: "Momento especial" 
                },
                // Máximo 6 imágenes secundarias
            ]
        }
    }
};
```

#### Para Primer Día de Pareja
En `index.html`, busca la sección `first-day-section` y personaliza:

```html
<div class="special-date">Tu fecha especial</div>
<img src="tu-imagen-principal.jpg" alt="Nuestro primer día">
```

```html
<div class="moment-info">
    <h4>Tu primer momento</h4>
    <p>Descripción de ese momento</p>
</div>
```

#### Para Aniversarios
En `index.html`, busca `anniversaries-section` y personaliza cada tarjeta:

```html
<div class="anniversary-date">Tu fecha de aniversario</div>
<h3 class="anniversary-title">Primer Aniversario</h3>
<p class="anniversary-description">Tu historia de ese año</p>
```

### 3. Agregar Nuevos Aniversarios

Para agregar más aniversarios, duplica una tarjeta existente en `index.html`:

```html
<!-- Tercer Aniversario -->
<div class="anniversary-card">
    <div class="anniversary-badge">
        <span class="anniversary-number">3er</span>
        <span class="anniversary-label">Año</span>
    </div>
    <div class="anniversary-content">
        <div class="anniversary-date">14 de Febrero, 2026</div>
        <h3 class="anniversary-title">Tercer Aniversario</h3>
        <p class="anniversary-description">Tres años de aventuras y crecimiento juntos</p>
        <div class="anniversary-images">
            <img src="imagen1.jpg" alt="Tercer aniversario 1">
            <img src="imagen2.jpg" alt="Tercer aniversario 2">
            <img src="imagen3.jpg" alt="Tercer aniversario 3">
        </div>
    </div>
</div>
```

## 🎨 Personalización de Colores

### Sección Galería (Azul/Morado)
```css
background: linear-gradient(135deg, #667eea, #764ba2);
```

### Primer Día de Pareja (Rosa/Dorado)
```css
background: linear-gradient(135deg, #ff6b6b, #ffd93d);
```

### Aniversarios (Morado/Azul)
```css
background: linear-gradient(135deg, #667eea, #764ba2);
```

## 📱 Navegación

### Botones Principales
- **📅 Galería por Fechas**: Vista tradicional por años y meses
- **💕 Primer Día de Pareja**: Momentos especiales del inicio
- **💍 Aniversarios**: Celebraciones anuales

### Controles Específicos
- **En Galería**: Selector de años (2023-2025) + pestañas de meses
- **En secciones especiales**: Solo navegación entre secciones

## 📱 Responsive Design

### Desktop (>768px)
- Layout de dos columnas para galería principal
- Tarjetas de aniversarios con badge lateral
- Navegación horizontal completa

### Tablet/Móvil (≤768px)
- Layout de una columna
- Tarjetas de aniversarios apiladas
- Navegación adaptada verticalmente
- Botones de sección más compactos

## 🔧 Funcionalidades Técnicas

### Sistema de Modal
- Click en cualquier imagen abre vista ampliada
- Información contextual según la sección
- Cierre con Escape o click fuera
- Compatible con touch

### Animaciones
- Fade in al cambiar secciones
- Hover effects en todas las imágenes
- Transiciones suaves entre estados
- Parallax sutil en scroll

### Optimizaciones
- Precarga de imágenes para mejor rendimiento
- Sistema de lazy loading
- Animaciones CSS3 optimizadas

## 🆘 Solución de Problemas

### Las secciones no cambian
- Verifica que el JavaScript se cargue correctamente
- Revisa la consola del navegador para errores
- Asegúrate de que los `data-section` coincidan

### Imágenes no cargan
- Verifica URLs absolutas o rutas relativas correctas
- Para GitHub: usa rutas relativas como `./images/foto.jpg`
- Para servicios externos: verifica que permitan hotlinking

### Responsive no funciona
- Verifica la etiqueta viewport en el HTML
- No modifiques las media queries sin cuidado
- Testa en modo desarrollo del navegador

## 🎯 Ideas para Expandir

### Funcionalidades Románticas
- **Contador de días juntos** en tiempo real
- **Sección de mensajes de amor** intercambiados
- **Timeline interactiva** de la relación
- **Galería de regalos especiales**
- **Metas y sueños futuros**

### Mejoras Técnicas
- **Sistema de comentarios** en cada imagen
- **Slideshow automático** para aniversarios
- **Compartir en redes sociales**
- **Exportar momentos como PDF**
- **PWA para instalar como app**

## 💝 Consejos de Uso Romántico

### Para Primer Día de Pareja
- Incluye la hora exacta en las descripciones
- Usa fotos del lugar donde se conocieron
- Agrega anécdotas divertidas de ese día
- Menciona qué sintieron en cada momento

### Para Aniversarios
- Escribe sobre cómo han crecido ese año
- Incluye fotos de viajes o eventos especiales
- Menciona metas cumplidas juntos
- Añade planes para el próximo año

### Para la Galería General
- Organiza por eventos importantes de cada mes
- Incluye tanto fotos especiales como cotidianas
- Agrega fechas específicas en las descripciones
- Mezcla selfies con fotos tomadas por otros

## 📄 Licencia

Este proyecto es de código abierto y gratuito. ¡Compártelo con otras parejas para que también preserven sus momentos especiales! 💕

---

✨ **¡Creado con amor para preservar el amor!** ✨

¡Disfruta documentando todos los momentos hermosos de tu relación! 💕📸 