// 1. Tus datos: Solo agrega o quita objetos aquí
const datosCronologicos = [
    {
        titulo: "Proceso histórico de la ingeniería",
        año: "",
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

        ,
        centeredTexto: true,
        imagenes: []
    },
    {
        titulo: "Ingeniería Primitiva",
        año: "20.000 a.C.",
        texto:
            "La Ingeniería, nace junto con el hom­bre primitivo, se caracterizaron por investigar formas para satisfacer una necesidad"
            + "<br>"
            + "<br>"
            + "- El Homo  Sa­piens (el hombre  que  sabe)"
            + "<br>"
            + "- El Homo Faber (el  hombre  que  hace)"
        ,
        centeredTexto: false,
        imagenes: [
            "https://i.ytimg.com/vi/5PLhPSkflC4/sddefault.jpg"
            , "https://f5c4537feeb2b644adaf-b9c0667778661278083bed3d7c96b2f8.ssl.cf1.rackcdn.com/piezas/639/punzones-de-hueso-coleccion-de-arte-prehispanico-museo-amparo-puebla-20160210-121528.jpg"
            , "https://cdn0.unprofesor.com/es/posts/3/5/2/aparicion_del_fuego_en_el_paleolitico_resumen_2253_600.jpg"
        ]
    },
    {
        titulo: "",
        año: "8.000 a.C.",
        texto:
            "El desarrollo de la ingeniería como tal, comenzó en Asia Menor y África, cuando los hombres se asentaron con modestas edificaciones "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Ingeniería Antigua: Era de las Estructuras ",
        año: "4.000 a.C.",
        texto:
            "Inicia con asentamientos junto a los ríos Nilo y Éufrates."
            + "<br>"
            + "Surge la escritura"
            + "<br>"
            + "Construir edificaciones estables era un desafío."
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Egipto",
        año: "3.400 a.C. - 1.500 a.C. ",
        texto:
            "En Egipto, Crearon el papiro a partir de una planta acuática y crearon una escritura(el Jeroglífico)."
            + "<br> El maestro de obras del rey era un experto en construcciones, como un ingeniero civil."
            + "<br> Imhotep, fue considerado el primer Ingeniero Civil y padre de la mampostería, por su especialidad en construir pirámides."
            + "<br> Los Maestros de Obras Ineni y Senenmut fueron expertos en la construcción de Obeliscos o Grandes Agujas del Faraón, con bloques de granito."
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Mesopotamia",
        año: "1.100 a.C. - 561 a.C. ",
        texto:
            "En Mesopotamia se estableció el reino de Babilonia, donde surge como director de obras El rey Hammurabi y "
            + "su legado “el Código de Hammurabi” el conjunto de leyes más antiguo que incluye la responsabilidad profesional"
            + " de los ingenieros a sus construcciones."
            + "<br>"
            + "Los jardines colgantes surgieron bajo el dominio del rey Nabucodonosor II como regalo a su esposa Amytis"

        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Grecia",
        año: "1.400 a.C. - 100 a.C.",
        texto:

            "En Grecia las ciudades de Micenas, Atenas y Esparta se vuelven los centros del conocimiento de la época"
            + "<br>"
            + "Pytheos fue el primero que entrenó a sus aprendices en escuelas y escribió tratados para los constructores. "
            + "<br>"
            + "Los griegos eran grandes navegantes y por ello Dinócrates realizó los planos y Sostratus  construyó el Faro "
            + "<br>"
            + "También Arquímedes, aparte de sus estudios sobre geometría y mecánica; in­ventó un tornillo sin fin para extraer agua. "

        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Roma",
        año: "500 a.C. - 476 d. C. ",
        texto:

            "En Roma nacieron los grandes ingenieros de la antigüedad, donde se destaca la construcción de:"
            + "<br>"
            + "<br>"
            + "- Acueductos y calles pavimentadas "
            + "<br>"
            + "- Redes de carreteras  "
            + "<br>"
            + "- Puentes, en donde el pontífice era el ingeniero especializado "
            + "<br>"
            + "- Grandes obras como el Coliseo Romano "
            + "<br>"
            + "<br>"
            + "Y entre otros, el uso de la polea, el sifón invertido o bomba en tuberías de plomo. "
            + "<br>"
            + "Todo gracias a que fueron incorporando ideas de los países que conquistaron hasta la caída del Imperio Romano de Occidente"

        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Ingeniería Medieval: Era Feudal y Renacimiento ",
        año: "476 d. C. - 1492 d. C. ",
        texto:
            "Se presentó la construcción basada en la fuerza no humana o fuentes de Potencia."
            + "<br>"
            + "<br>"
            + "También se utilizó por primera vez la palabra ingeniero "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Europa",
        año: "476 d. C. - 1492 d. C. ",
        texto:
            "En Europa se construyeron fortalezas, fosos, puentes levadizos y murallas entre otros.Como fuentes principales de potencia se usaron:"
            + "<br>"
            + "<br>"
            + "- La fuerza hidráulica "
            + "<br>"
            + "- La fuerza eólica "
            + "<br>"
            + "- El caballo "
            + "<br>"
            + "<br>"
            + "Otros avances se dieron en la navegación con el timón giratorio y las velas, dando pie a la construcción de carabelas con solidos cascos "
            + "<br>"
            + "En escritura se dio la imprenta mecánica con tipografía móvil "
            + "<br>"
            + "El cristianismo desarrollo nuevas técnicas de construcción, elaborando catedrales góticas con naves de grandes dimensiones, gracias al arco gótico y los arbotantes, haciendo estructuras livianas "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Europa Renacimiento ",
        año: "476 d. C. - 1492 d. C. ",
        texto:
            "En el renacimiento aparecieron grandes personajes como"
            + "<br>"
            + "<br>"
            + "- Galileo Galilei: quien descubrió leyes y estudio comportamientos físicos, Inventó herramientas como el termoscopio y el telescopio.Contribuyo el método científico. "
            + "<br>"
            + "- Leonardo da Vinci: inventó lo que se conocería hoy como un gato hidráulico, el odómetro, la rueda dentada, el juego de poleas entre otros más. "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "China",
        año: "476 d. C. - 1492 d. C. ",
        texto:
            "En China desarrollan la química y la óptica, el papel, la pólvora, las primeras brújulas, la seda, entre otros. Una de sus grandes construcciones es la Gran Muralla China "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Arabia",
        año: "476 d. C. - 1492 d. C. ",
        texto:
            "En Arabia desarrollaron los molinos de viento, el ajedrez. Realizaron la refinación del azúcar y crearon saladeros para conservas de carne, se destacaron en productos de aseo y estética como jabones y perfumes. Introdujeron la numeración arábiga innovando con el número cero (0) "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Ingeniería Moderna: Era de la Mecánica ",
        año: "1492  d. C. - 1789 d. C. ",
        texto:

            "Desde el descubrimiento de América y el Novísimo mundo(Australia 1770), hasta la revolución francesa."
            + "<br>"
            + "<br>"
            + "Se destaca la creacion de dispositivos para trabajos repetitivos y la conversion de energia en movimiento"

        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "",
        año: "1492  d. C. - 1789 d. C. ",
        texto:

            "- En Holanda Daniel Gabriel Fahrenheit inventa el termómetro de mercurio "
            + "<br>"
            + "- En Francia Sebastien Le Preste Vauban es considerado el primer Ingeniero de Francia, su obra de vida fue el Puerto de Dunkerque en el canal de la Mancha y el desarrollo de la ingeniería Militar  "
            + "<br>"
            + "- En escocia luego de una serie de adaptaciones de antiguas invenciones(Eolípila; Bomba Atmosférica; máquina que mueve agua usando menos combustible) se crea la máquina de vapor "
            + "<br>"
            + "- En Inglaterra se lleva a cabo la primera revolución industrial gracias a la máquina de vapor con la que empezaron a moverse distintos tipos de máquinas, luego se formó la sociedad de ingenieros(1828), incluyendo cambios como el título “Civil” para dar a entender que la ingeniería no es única del tema militar "
            + "<br>"
            + "- En América Benjamín Franklin inventó el pararrayos que luego serian usadas en edificaciones "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Ingeniería Contemporánea",
        año: "1789 d.C ",
        texto:

            "En Francia Napoleón Emperador funda la primera escuela de ingeniería del país(1794), se construye la torre Eiffel(1889) "
            + "<br>"
            + "<br>"
            + "En Alemania surge la Ingeniería Sanitaria, primer sistema de saneamiento urbano "
            + "<br>"
            + "<br>"
            + "En Estados Unidos de América se da inicio al transporte urbano con el tranvía(1832) y luego el subterráneo, el ferrocarril fue un medio de transporte tan importante que nace la escuela de ingeniería Ferroviaria  "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Era de la Ingeniería Eléctrica",
        año: "1879 d.C ",
        texto:

            "Se produce la Segunda Revolución Industrial gracias a la electricidad como nueva fuente de energía.  "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "",
        año: "Siglo XIX d.C ",
        texto:

            "- Alessandro Volta fabrica la primera pila eléctrica."
            + "<br>"
            + "<br>"
            + "- Thomas Alva Edisson inventó el Fonógrafo y la bombilla eléctrica"
            + "<br>"
            + "<br>"
            + "- Samuel Morse inventa el telégrafo eléctri­co."
            + "<br>"
            + "<br>"
            + "- El ingeniero eléctrico Nikola Tesla crea el sistema de corriente alterna."
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "",
        año: "1913 d.C ",
        texto:

            "Henry Ford Crea dos modelos de automóvil incorporando la línea automática de montaje, fabricando 10 millones de unidades."
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Era de la Ingeniería Electrónica y de la Informática",
        año: "1946 d.C ",
        texto:

            "La tercera revolución industrial se da por la electrónica, se controla la electricidad con componentes "
            + "<br>"
            + "<br>"
            + "- Lee De Forest es considerado el “Pa­dre de la electrónica” dado que inventó el triodo "
            + "<br>"
            + "- Se dio lugar al alumbrado público. "
            + "<br>"
            + "- Michael Faraday crea el primer motor eléctri­co. "
            + "<br>"
            + "- Jack Kilby inventa el primer circuito integrado o microchip. "
            + "<br>"
            + "- Se crea la mega computadora ENIAC que luego dio paso a minicomputadoras "
            + "<br>"
            + "- Se desarrolla ARPANET luego internet "
            + "<br>"
            + "- Inicia la exploración espacial "
        ,
        centeredTexto: false,
        imagenes: []
    },
    {
        titulo: "Era de la Biotecnología y la Bioingeniería",
        año: "1959 d.C ",
        texto:

            "Se desarrolla el Microscopio Electrónico gracias a Ernst Ruska(Físico) y Max Knoll(Inge­niero eléctrico) "
            + "<br>"
            + "<br>"
            + "<br>"
            + "Se destacan:"
            + "<br>"
            + "<br>"
            + "- La Inteligencia artificial como software diseñado para autoaprendizaje "
            + "<br>"
            + "- La robótica para la sustitución parcial de la mano de obra humana "
            + "<br>"
            + "- Biomateriales en los que destacan los dispositivos de uso clínico "
            + "<br>"
            + "- La ingeniería Genética donde se logra la decodificación del Código Genético "
            + "<br>"
            + "- Bio-Medicina donde se ven prótesis 3D "
            + "- <br>"
            + "- Cyborgs donde se combina el hombre con la maquina"
    ,
    centeredTexto: false,
    imagenes: []
    },
    {
        titulo: "Era de la Socioingeniería",
        año: "1980 d.C ",
        texto:

            "Se aborda la necesidad de construir entorno a la sociedad, la naturaleza y el medio ambiente, donde se destaca el uso de energías renovables "
    ,
    centeredTexto: false,
    imagenes: []
    },
    {
        titulo: "Era de la Globalización",
        año: "2000 d.C ",
        texto:

            "Se da el desafío a los ingenieros de ser Inter o Multi disciplinarios, combinando conocimientos específicos a su área con otros como medicina, economía, etc. "
    ,
    centeredTexto: false,
    imagenes: []
    }
    //{
    //    titulo: "",
    //    año: "4.000 a.C.",
    //    texto:

    //    ,
    //    centeredTexto: false,
    //    imagenes: []
    //}
];

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline-container');
    const wrapper = document.querySelector('.scroll-wrapper');

    // 2. Generar el contenido automáticamente
    datosCronologicos.forEach(item => {
        // 1. Crear el contenedor principal del hito
        const section = document.createElement('section');
        section.className = 'milestone';

        // 2. Crear el div .content
        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        // --- CONDICIONAL: Título ---
        if (item.titulo != "") {
            const h2 = document.createElement('h2');
            h2.textContent = item.titulo;
            contentDiv.appendChild(h2);
        }

        // --- EL PUNTO (Siempre presente según tu estructura) ---
        const dot = document.createElement('div');
        dot.className = 'dot';
        contentDiv.appendChild(dot);

        // --- CONDICIONAL: Año ---
        if (item.año != "") {
            const h3 = document.createElement('h3');
            h3.className = 'ano';
            h3.textContent = item.año;
            contentDiv.appendChild(h3);
        }

        // --- CONDICIONAL: Texto ---
        if (item.texto) {
            const p = document.createElement('p');

            if (item.centeredTexto == true) {
                p.className = 'p_centered';
            }

            p.innerHTML = item.texto;
            contentDiv.appendChild(p);
        }

        // --- CONDICIONAL: Mosaico de Imágenes ---
        if (item.imagenes && item.imagenes.length > 0) {
            const mosaicoDiv = document.createElement('div');
            mosaicoDiv.className = 'mosaico';

            // Creamos cada imagen individualmente
            item.imagenes.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = src;
                mosaicoDiv.appendChild(img);
            });

            contentDiv.appendChild(mosaicoDiv);
        }

        // 3. Unir todo al DOM
        section.appendChild(contentDiv);
        timeline.appendChild(section);

        //const section = document.createElement('section');
        //section.className = 'milestone';

        //// Generamos el HTML de las imágenes del mosaico
        //const mosaicoHTML = item.imagenes.map(img => `<img src="${img}" alt="foto">`).join('');

        //if (item.año == "") {
        //    section.innerHTML = `
        //    <div class="content">
        //        <h2>${item.titulo}</h2>
        //        <div class="dot"></div>
        //        <p>${item.texto}</p>
        //        <div class="mosaico">${mosaicoHTML}</div>
        //    </div>
        //`;
        //} else {
        //    section.innerHTML = `
        //    <div class="content">
        //        <h2>${item.titulo}</h2>
        //        <div class="dot"></div>
        //        <h3 class="ano">${item.año}</h3>
        //        <p>${item.texto}</p>
        //        <div class="mosaico">${mosaicoHTML}</div>
        //    </div>
        //`;
        //}

        //timeline.appendChild(section);
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