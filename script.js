// 1. Tus datos: Solo agrega o quita objetos aquí
const datosCronologicos = [
    {
        año: "Proceso histórico de la ingeniería",
        texto:
            "<br>"
            + "<br>"
            + "<br>"
            + "Tarea 1 - Reconocimiento de la formación en Ingeniería"
            + "<br>"
            + "<br>"
            + "<br>"
            + "David Leonardo Ramirez Baquero <br> <br>"
            + "<br>"
            + "Ingeniería Multimedia"
            + "<br>"
            + "<br>"
            + "<br>"
            + "Universidad Nacional Abierta y a Distancia “UNAD”"
            + "<br>"
            + "Escuela de Ciencias Básicas, Tecnología e Ingeniería"
            + "<br>"
            + "INTRODUCCIÓN A LA INGENIERÍA (MULTIMEDIA)"
            + "<br>"
            + "Febrero 2026"
            + "<br>"
            + "Grupo 202456784_60"

        , imagenes: []
    },
    {
        año: "Ingeniería Primitiva",
        texto:
            "La  Ingeniería,  nace  junto  con  el  hom­bre y se  remonta a 20.000  años  antes  de la era  cristiana.  Los  hombres  primitivos,  se caracterizaron  por  investigar:  el Homo  Sa­piens (el hombre  que  sabe) y por  construir: el Homo Faber (el  hombre  que  hace)  para satisfacer  una  necesidad."
        ,imagenes: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"]
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline-container');
    const wrapper = document.querySelector('.scroll-wrapper');

    // 2. Generar el contenido automáticamente
    datosCronologicos.forEach(item => {
        const section = document.createElement('section');
        section.className = 'milestone';

        // Generamos el HTML de las imágenes del mosaico
        const mosaicoHTML = item.imagenes.map(img => `<img src="${img}" alt="foto">`).join('');

        section.innerHTML = `
            <div class="content">
                <h2>${item.año}</h2>
                <div class="dot"></div>
                <p>${item.texto}</p>
                <div class="mosaico">${mosaicoHTML}</div>
            </div>
        `;

        timeline.appendChild(section);
    });

    // 3. Ajustar el ancho de la línea según la cantidad de elementos
    timeline.style.width = `${datosCronologicos.length * 200}vw`;

    // 4. Control de la rueda del ratón (Scroll Horizontal) 
    wrapper.addEventListener('wheel', (evt) => {
        if (evt.deltaY !== 0) {
            wrapper.scrollLeft += evt.deltaY + 0.5;
            evt.preventDefault();
        }
    }, { passive: false });
});