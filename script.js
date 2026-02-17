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
        titulo: "Introducción",
        año: "",
        texto:
            "Esta es una infografía en formato de línea de tiempo que refleja un resumen sobre el Proceso histórico de la ingeniería"
            + " usando tecnologías como: HTML, CSS, JS y GitHub (Pages)"
            + "<br>"
            + "<br>"
            + "Nota: la página aun no cuenta con un sistema responsivo, por lo que"
            + "<br>"
            + "recomiendo verlo en un computador a resolución Full HD (1920x1080)"
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
        imagenes: [
            "https://i.blogs.es/85f8a9/casas-del-neolitico/650_1200.jpeg"
            , "https://upload.wikimedia.org/wikipedia/commons/3/3d/Sioux_Tipi_by_Karl_Bodmer_1833.jpg"]
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
        imagenes: ["https://www.creaf.cat/sites/default/files/wp-featured-images/Madan_portada_23.jpg"]
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
        imagenes: [
            "https://www.ucm.es/quidestliber/file/papiro-1?ver=n"
            , "https://www.worldhistory.org/img/r/p/1500x1500/86.jpg"
            , "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Imhotep%2C_donated_by_Padisu_MET_DP164134.jpg/960px-Imhotep%2C_donated_by_Padisu_MET_DP164134.jpg"
            ,"https://content-historia.nationalgeographic.com.es/medio/2022/10/07/imagen-de-la-piramide-escalonada-de-djoser-en-saqqara_718001eb_1280x829.jpg"
        ]
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
        imagenes: [
            "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/24851/images/8u0onGrS2CaKb2mVVVNA_file.jpg"
            , "https://www.worldhistory.org/img/r/p/1500x1500/14341.jpg"
            , "https://content-historia.nationalgeographic.com.es/medio/2019/05/07/7-maravillas-jardines-babilonia-antes_7654bcc8_1400x788.jpg"
        ]
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
        imagenes: [
            "https://upload.wikimedia.org/wikipedia/commons/9/91/View_of_the_Acropolis_Athens_%28pixinn.net%29.jpg"
            , "https://st5.depositphotos.com/13064652/74522/i/450/depositphotos_745228004-stock-photo-man-tribe-suebi-sweben-sueven.jpg"
            , "https://upload.wikimedia.org/wikipedia/commons/6/6e/Retrato_de_un_erudito_%28%C2%BFArqu%C3%ADmedes%3F%29%2C_por_Domenico_Fetti.jpg"
            , "https://muyinteresante.okdiario.com/wp-content/uploads/sites/5/2025/07/hallazgo-puerta-faro-de-alejandria.jpg"
        ]
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
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwDNojQw69IMxZs-HeSUEOCCXSDK_zsk5-Q&s"
            , "https://content-historia.nationalgeographic.com.es/medio/2018/02/28/a325302d__1280x861.jpg"
            , "https://upload.wikimedia.org/wikipedia/commons/4/4e/Apamea_Syria%2C_cardo_maxima.jpg"
            , "https://upload.wikimedia.org/wikipedia/commons/d/d5/Bridge_Alcantara.JPG"
        ]
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
        imagenes: [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJO0cfwRxwuY82rRxW9KjGFL1DvQeMPDTxuyrpRCybAn4XT6G57LM7S0Ux2JNqykSXI1S2pd6zZqRmek_rODXdZS9H537c_HwGXbB3ZlJM0a8sQVf1PuI-_As8o3C_qcEBR_0xyNYaxJxo/s1600/images+(71).jpg"
            , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYo41gDJPYai9hI6pQSCUusMX224Jp3XS31Q&s"
            , "https://sintop.wordpress.com/wp-content/uploads/2019/02/castillo-de-la-mota.jpg"
            , "https://i.pinimg.com/474x/c4/26/26/c42626be354b423dfa5b796ea6529a65.jpg"
        ]
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
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCLOmfLsVZO9U5_hTf0hXnan96nlu-vtaew&s"
            , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RlvKPMk6dm3aw6BWXizskLFtT51HPHw2YQ&s"
            , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhC4r7DGYEFYBvHFampiCu8-Uq3UC_fViIQ&s"
            , "https://upload.wikimedia.org/wikipedia/commons/e/ea/Court_ladies_pounding_silk_from_a_painting_%28%E6%8D%A3%E7%BB%83%E5%9B%BE%29_by_Emperor_Huizong.jpg"
        ]
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
            + "Se destaca la creacion de dispositivos para trabajos repetitivos y la conversión de energia en movimiento"

        ,
        centeredTexto: false,
        imagenes: [
            "https://www.caixabank.com/docs/contentmedia/52106/La-maquina-de-vapor-el-motor-que-impulso-la-Revolucion-Industrial.jpg"
            , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhbv2FOsbcNMVqa4L6TeHehXl8LmbN3nMCw&s"
            , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM00tODu8EnhiJ6zvpY_4gxwA8TrNVjUwig&s"
        ]
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
        imagenes: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Eiffelturm.JPG/330px-Eiffelturm.JPG"
            ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRW_31MJqcg6dUbhMO9mVbKeaZLknibrT8UA&s"
            ,"https://media.cnn.com/api/v1/images/stellar/prod/cnne-1514071-image-400.png?q=w_1110,c_fill"
        ]
    },
    {
        titulo: "Era de la Ingeniería Eléctrica",
        año: "1879 d.C ",
        texto:

            "Se produce la Segunda Revolución Industrial gracias a la electricidad como nueva fuente de energía.  "
        ,
        centeredTexto: false,
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGhZgxbsyr9ruem85p4wT43mqfOCe94Fx8w&s"
            ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTaxvqze_BBbGTTp7BoLTphg1qs9RBQeQ9Q&s"
            ,"https://www.tecsaqro.com.mx/wp-content/uploads/2022/03/ingenieria_electrica_1.jpg"
            ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqoWHOKbQzgQFWsj8Ddx3l5cqt7mowPRJ2Yg&s"
        ]
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
        imagenes: [
            "https://media.ford.com/content/dam/fordmedia/North%20America/mx/2022/06/16/Henry%20Ford.jpg"
            ,"https://www.ford.es/content/dam/guxeu/rhd/central/brochureware/experience-ford/news/our-founder/ford-ourfounder-eu-First_Model_AA_1931-16x9-2160x1215-FC.jpg.renditions.original.png"
        ]
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
        imagenes: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IoTp0eNGl3zchDjVxqbPces3SZx4qO6xoQ&s"]
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
            + "<br>"
            + "- Cyborgs donde se combina el hombre con la maquina"
        ,
        centeredTexto: false,
        imagenes: ["https://static.nationalgeographicla.com/files/styles/image_3200/public/01-dna-nationalgeographic_2490526.jpg?w=1600"]
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
        imagenes: ["https://www.csrconsulting.com.mx/wp-content/uploads/2022/01/globalizaci-n.jpeg"]
    },
    {
        titulo: "Referencias",
        año: "Febrero 2026",
        texto:
            "Esta infografía está basada en:"
            + "<br>"
            + "<br>"
            + "Cuevas, A., Amarilla, A., Meza, R., & Corvalán, R. (2019). Había una vez: historia de la Ingeniería . http://dx.doi.org/10.30972/eitt.503724"
            + "<br>"
            + "<br>"
            + "El conjunto de imágenes usadas aquí, son inserciones mediante enlace, por lo que cada una tiene su referencia a su origen "
        ,
        centeredTexto: true,
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

    // 2.1


    // 2.2 Generar el contenido automáticamente
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