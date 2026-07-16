import { type } from "node:os";
import { text } from "node:stream/consumers";

export const projects = [
    {
    slug: 'aplicaciondocumentacion',
    template: 'carousel',
    thumb: 4,
    year: '2025',
    category: 'work',
    media: {
      slides: [
        { type: 'image', src: '/proyectos/aplicaciondocumentacion/empresa.png' },
        { type: 'image', src: '/proyectos/aplicaciondocumentacion/trabajadores.png' },
        { type: 'image', src: '/proyectos/aplicaciondocumentacion/vehiculos.png' },
        { type: 'image', src: '/proyectos/aplicaciondocumentacion/nominas.png' },
        { type: 'image', src: '/proyectos/aplicaciondocumentacion/descargar_nominas.png' },
        { type: 'image', src: '/proyectos/aplicaciondocumentacion/clasificar_tacografos.png' },
      ],
    },
    tags: ['Python', 'Mircosoft Access', 'Excel'],
    links: {},
    es: {
      eyebrow: 'App de escritorio · Proyecto laboral',
      title: 'Aplicación de documentación',
      tagline:
        'Aplicación de escritorio que permite gestionar la documentación del personal y los vehículos de una empresa. Al tratarse de software propietario solo se proveen imágenes de la aplicación sin datos del cliente.',
      summary:
        'Aplicación de escritorio que permite gestionar la documentación del personal y los vehículos de una empresa.',
      role: 'Desarrollo front-end y back-end',
      stackShort: 'Python · Mircosoft Access · Excel',
      overviews: [
        'La gestión de la documentación del personal y de los efectivos de la empresa es una tarea compleja cuando estos crecen. Esta trasición se puede hacer lo más suave posible si se dispone de un software diseñado para las necesidades y el flujo de trabajo ya instaurado en la empresa. Por este motivo, se llevó a cabo a una aplicación de escritorio para gestionar los datos de la empresa Highway 2022 S.L.',

        'Los principales requisitos de la empresa consistían en disponer de una herramienta que le permitiese centralizar todos los datos del personal y de sus efectivos. De esta forma, el acceso a la documentación necesaria para ciertas gestiones sería casi inmediato y permitiría a nuevos empleados tener una organización clara y precisa. Además de esto, también necesitaban un sistema que clasificara y almacenara una serie de ficheros y que extrajera cierta información de un tipo de documentos PDF. Finalmente, necesitaban extraer, organizar y guardar una serie de datos de una página web.',

        'Para empezar, habría que analizar la decisión de llevar desarrollar una aplicación de escritorio frente a alternativas como una aplicación web. La decisión fue tomada por la empresa, asesorada por mí mismo. Aunque una aplicación web permite accesos remotos mucho más cómodos, debido a la estructura de la empresa y con el objetivo de reducir vectores de ataque se prefirió una aplicación de escritorio más centralizada.',

        'Para implementar la interfaz gráfica se utilizó la librería Qt de Python. El motivo de esta elección viene ligada a la elección del lenguaje de programación. Como se ha comentado anteriormente, la empresa tenía requisitos de consumo de APIs, lectura de PDFs y organización de ficheros por nombre y extensión. Python es un lenguaje que, gracias a su versatilidad y librerías, permite llevar a cabo muchas de estas tareas de forma sencilla. Además, a la empresa le interesaba almacenar los datos consumidos en la API en un Excel diseñado por ellos mismos y Python posee la librería openpyxl que es perfecta para este trabajo.',

        'En cuanto al almacenamiento, se optó por una base de datos en Microsoft Access. Esta elección frente a otros gestores gratuitos como MariaDB o compatibles con otros sistemas operativos como Oracle, atiende a dos cuestiones. La primera es que la empresa trabaja exclusivamente con dispositivos Windows, por lo que no es necesaria compatibilidad con otros sistemas operativos. La segunda es hacer uso del paquete Office del que ya dispone la empresa y que incluye Microsoft Access y gran soporte.',

        'A continuación, se muestran capturas de pantalla del software en funcionamiento. En ellas se puede apreciar como hay diferentes categorías para llevar a cabo toda la gestión de los datos de la empresa, la clasificación de documentos y la posibilidad de descargarlos para revisarlos. Dado que es un software propietario, las imágenes contendrán texto genérico que no exponga ningún dato sensible de la misma.',
      ],
      slideLabels: [
        'Panel de la empresa',
        'Panel trabajadores',
        'Panel vehículos',
        'Panel listado de nóminas',
        'Panel descarga de nóminas',
        'Panel clasificación de tacógrafos',
      ],
    },
    en: {
      eyebrow: 'Desktop app · Work project',
      title: 'Documentation Application',
      tagline:
        'Desktop application for managing staff and vehicle documentation for a company. As this is proprietary software, only screenshots of the application are provided, without client data.',
      summary:
        'Desktop application for managing staff and vehicle documentation for a company.',
      role: 'Front-end and back-end development',
      stackShort: 'Python · Microsoft Access · Excel',
      overviews: [
        'Managing staff and fleet documentation becomes a complex task as a company grows. This transition can be made as smooth as possible with software designed around the needs and workflow already established at the company. For this reason, a desktop application was developed to manage the data of the company Highway 2022 S.L.',

        'In short, the company\'s requirements consisted of having a tool that would let it centralize all the data on its staff and fleet. This way, access to the documentation needed for certain procedures would be almost immediate and would allow new employees to have a clear and precise organization. In addition, they also needed a system to classify and store certain files and extract information from a specific type of PDF document. Finally, they needed to extract, organize, and store a set of data from a website.',

        'To begin with, it was necessary to analyze the decision to develop a desktop application as opposed to other alternatives such as a webapp. The decision was made by the company, with my advice. Although a web application allows for much more convenient remote access, due to the structure of the company and with the aim of reducing attack surfaces, a more centralized desktop application was preferred.',

        'Python\'s Qt library was used to implement the graphical interface. This choice is linked to the choice of programming language. As mentioned earlier, the company had requirements around consuming APIs, reading PDFs, and organizing files by name and extension. Thanks to its versatility and libraries, Python makes it possible to carry out many of these tasks easily. In addition, the company wanted to store the data retrieved from the API in an Excel file designed by themselves, and Python has the openpyxl library, which is perfect for this task.',

        'As for storage, a Microsoft Access database was chosen. This decision, over other free database managers such as MariaDB or ones compatible with other operating systems such as Oracle, comes down to two factors. The first is that the company works exclusively with Windows devices, so compatibility with other operating systems was not necessary. The second is to make use of the Office package the company already had, which includes Microsoft Access and strong support.',

        'Below are screenshots of the software in action. They show the different categories used to manage all of the company\'s data, the classification of documents, and the ability to download them for review. Since this is proprietary software, the images contain generic text that does not expose any of the company\'s sensitive data.',
      ],
      slideLabels: [
        'Company panel',
        'Employees panel',
        'Vehicles panel',
        'Payroll list panel',
        'Payroll download panel',
        'Tachograph classification panel',
      ],
    },
  },
  {
    slug: 'fcontainers',
    template: 'parts',
    thumb: 1,
    year: '2026',
    category: 'personal',
    tags: ['C++', 'Sockets', 'Linux', 'Containers', 'Go', 'CLI', 'Daemon'],
    links: {
      repo: 'https://github.com/FranUcles/fcontainers',
    },
    es: {
      eyebrow: 'Gestor de contenedores · Proyecto personal',
      title: 'fcontainers',
      tagline:
        'Sistema de contenerización para crear y gestionar contenedores ligeros en Linux, haciendo uso únicamente de librerías de sistema.',
      summary:
        'Sistema de contenerización para crear y gestionar contenedores ligeros en Linux, haciendo uso únicamente de librerías de sistema.',
      role: 'Desarrollo a bajo nivel',
      stackShort: 'C++ · Go',
      about: [
        {
          type: 'p',
          text: 'Todo el mundo conoce herramientas de gestión de contenedores como Docker o Podman. Estas herramientas se encargan de crear y gestionar contenedores ligeros para ejecutar aplicaciones de forma aislada. Sin embargo, muchas personas usan estas herramientas sin entender realmente cómo funciona o, incluso, qué es un contenedor en realidad. ¿Cómo son estas herramientas capaces de crear entornos ligeros completamente aislados que compartan el mismo kernel que el host?'
        },
        {
          type: 'p',
          text: 'Mi objetivo con este proyecto ha sido precisamente entender cómo funciona la contenerización y la creación de redes virtuales. fcontainers es un proyecto personal educativo que me ha permitido entender qué factores entran en juego en la contenerización. Por cuestiones evidentes, este proyecto no pretende funcionar sustituir herramientas completamente desarrolladas como las anteriormente mencionadas. Sin embargo, fcontainers destaca por haberse construido completamente desde cero y ser capaz de ejecutar contenedores en primer y segundo plano y conectarlos entre sí.',
        },
        {
          type: 'p',
          text: 'El proyecto está dividido en diferentes partes, tomando Docker como inspiración, que trabajan de forma conjunta:',
        },
        { 
          type: 'list', 
          items: [
            {
              title: "Runtime",
              text: "este programa se encarga de ejecutar los contenedores y, en caso de ser en segundo plano, crear el proceso intermediario (fcontainers-shim)." 
            },
            {
              title: "Daemon",
              text: "el demonio de fcontainers es el que se encargará de gestionar todos los contenedores. Este proceso hará uso de runtime para crear los contenedores, controlará qué contenedores hay en ejecución, gestionará el acceso a aquellos en segundo plano y manejará la eliminación de los mismos cuando se solicite." 
            },
            {
              title: "CLI",
              text: "como indica su nombre, este programa es un CLI que permitirá interactuar con el daemon para manejar los contenedores de forma cómoda por el usuario." 
            },
          ],
          
        }

        
      ],
      aboutmedia: {
        cover: { type: 'image', src:"/proyectos/fcontainers/fcontainers_flujo.png", fit: 'contain'},
        title: "Diagrama de flujo de fcontainers",
      },
      parts: [
        {
          title: "Runtime",
          overviews: [
            {
              type: 'p',
              text: 'El runtime es un programa escrito en C++ que tiene como objetivo crear el contenedor. La primero a destacar es la elección del lenguaje de programación. Aunque todo el proyecto podría haberse realizado en Go, elegí usar C++ para el runtime por una razón princiapl: mantener la creación del contener lo más cercano al SO posible. Por cuestiones de practicidad, no se ha recurrido a las syscalls directamente, pero me parecía interesante y mucho más educativo experimentar con los wrappers de la libería estándar de C.',
            },
            {
              type: 'p',
              text: 'Un aspecto muy importante que maneja el runtime es la conectividad. Este programa se encarga también de crear un switch virtual para que los contenedores puedan comunicarse tanto entre ellos como con el exterior. Esto se ha realizado utilizando la librería libnl que permite encapsular mensajes NETLINK de forma cómoda y sencilla. Gracias a ella, se crean interfaces que conectan el host y el contenedor.'
            },
            {
              type: 'p',
              text: 'Una parte compleja del proyecto fue diseñar el sistema de ejecución en segundo plano. Es necesario un mecanismo para poder crear procesos en este nuevo contenedor. Esto se traduce en ser capaz de crear procesos en el mismo conjunto de pid, mount, net, user, cgroups e ipc namespaces que el proceso que hace de init en el contenedor. Para esta labor, y tomando Docker como referencia, se introdujo el concepto del fcontainers-shim.'
            },
            {
              type: 'p',
              text: 'El fcontainer-shim es un proceso que hace intermediario entre el mundo del contenedor y el mundo del host. Este queda escuchando en un socket a la espera de comandos attatch o exec para ejecutarlos dentor del contendor y redirigir la entrada/salida del mismo. Aunque este proceso podría haberse integrado como parte del init del contenedor, decidí crearlo como un proceso anexo al init con el objetivo de separar los conceptos.'
            },
            {
              type: 'quote',
              quote: 'Un runtime simple, pero que gracias a dependencias mínimas consigue generar contenedores completamente aislados y funcionales.'
            }
          ],
        },
        {
          title: "Daemon-CLI",
          overviews: [
            {
              type: 'p',
              text: 'Tanto el daemon como el CLI son dos herramientas que trabajan en sintonía para permitir al usuario final ejecutar acciones sobre los contenedores de forma transparente a la arquitectura. Ambos programas han sido desarrollados en el mismo proyecto de Go por diversos motivos.'
            },
            {
              type: 'list',
              items: [
                {
                  title: "Goroutines",
                  text: "Go es un lenguaje de programación que permite la ejecución de miles de tareas de forma simultánea sin gran complejidad gracias a las goroutines. Además, también dispone de la librería estándar net que simplifica mucho la gestión de sockets y conexiones. Por eso mismo, se decidió implementar el daemon en Go." 
                },
                {
                  title: "Cobra",
                  text: "la librería Cobra permite configurar los comandos que se pueden o no ejecutar en un programa de Go de forma increíblemente cómoda. De esta manera, con unas pocas líneas de código se puede crear un CLI en Go." 
                },
                {
                  title: "Protocolo compartido",
                  text: "por lo comentado anteriormente tanto el daemon como el CLI se desarrollaron en Go, pero la decición de mantenerlos en el mismo proyecto atiende a depenencia entre ellos. El CLI debe ser capaz de comunicarse eficazmente con el daemon, por lo tanto, ambos deben compartir un protocolo común. Gracias a los types de Go, dos programas en el mismo proyecto de Go pueden manejar la codificación y decodificación de un protocolo común sin procesos extras." 
                },
              ]
            },
            {
              type: 'p',
              text: 'En cuanto a su funcionamiento, el daemon se encarga de ejecutar el runtime para crear los contenedores y almacena en un fichero JSON toda la información relevante del mismo. Por ejemplo, aquí almacena un ID del contenedor, su nombre, su PID, su estado y también el socket de conexión con el shim asociado. De esta manera, se mantiene una correspondencia entre un contenedor y el canal de comunicación con su shim asociado que gestionará todas sus peticiones.'
            },
            {
              type: 'p',
              text: 'Por último, quiero hacer mención a cómo el daemon y el CLI manejan la conexión al contenedor. Este precisa de comunicación previa del fcontainersd hacia el fcontainers-shim, a través del socjet, para indicarle el tipo de conexión (attatch o exec) que quiere el cliente. Posteriormente, se le envía al CLI el socket en el que el shim estará manejando la solicitud realizada.'
            }
          ],
          media: {
            cover: { type: 'image', src: '/proyectos/fcontainers/flujo_exec.png' },
            title: "Diagrama de flujo de commando exec",
          }
        },
      ]
    },
    en: {
      eyebrow: 'Container manager · Personal project',
      title: 'fcontainers',
      tagline:
      'Containerization system for creating and managing lightweight containers on Linux, using only system libraries.',
      summary:
      'Containerization system for creating and managing lightweight containers on Linux, using only system libraries.',
      role: 'Low-level development',
      stackShort: 'C++ · Go',
      about: [
        {
          type: 'p',
          text: 'Everyone knows container management tools like Docker or Podman. These tools handle the creation and management of lightweight containers to run applications in isolation. However, many people use these tools without really understanding how they work or, indeed, what a container actually is. How are these tools able to create fully isolated, lightweight environments that share the same kernel as the host?'
        },
        {
          type: 'p',
          text: 'My goal with this project has been precisely to understand how containerization and virtual networking work. fcontainers is a personal, educational project that has allowed me to understand the factors involved in containerization. For obvious reasons, this project is not intended to replace fully developed tools like the ones mentioned above. However, fcontainers stands out for having been built completely from scratch and for being able to run containers in the foreground and background and connect them to each other.',
        },
        {
          type: 'p',
          text: 'The project is divided into different parts, taking Docker as inspiration, which work together:',
        },
        { 
          type: 'list', 
          items: [
            {
              title: "Runtime",
              text: "this program is responsible for running the containers and, if running in the background, creating the intermediary process (shim)." 
            },
            {
              title: "Daemon",
              text: "the fcontainers daemon is in charge of managing all the containers. This process uses the runtime to create containers, keeps track of which containers are running, manages access to background containers, and handles their removal when requested." 
            },
            {
              title: "CLI",
              text: "as its name indicates, this program is a CLI that allows the user to interact with the daemon in order to manage containers conveniently." 
            },
          ],
        }
      ],
      aboutmedia: {
        cover: { type: 'image', src:"/proyectos/fcontainers/fcontainers_flujo.png", fit: 'contain'},
        title: "fcontainers flow diagram",
      },
      parts: [
        {
          title: "Runtime",
          overviews: [
            {
              type: 'p',
              text: '',
            },
          ],
          media: {
            cover: { type: 'color', c1: '#2a2050', c2: '#443577' },
            title: "Detailed diagram",
          }
        },
        {
          title: "Daemon",
          overviews: [],
          media: {
            cover: { type: 'color', c1: '#2a2050', c2: '#443577' },
            title: "Detailed diagram",
          }
        },
        {
          title: "CLI",
          overviews: [],
          media: {
            cover: { type: 'color', c1: '#2a2050', c2: '#443577' },
            title: "Detailed diagram",
          }
        }
      ]
    },
  },
  {
    slug: 'doraemon',
    template: 'cover',
    thumb: 2,
    year: '2025/2026',
    category: 'academic',
    media: {
      cover: { type: 'color', c1: '#2a2050', c2: '#443577' },
    },
    tags: ['VirtualBox', 'Cyberpanel', 'Greenbone', 'Dovecot', 'Postfix', 'Apache', 'BindDNS', 'MariaDB', 'OpenLDAP', 'OpenVPN', 'nmap', 'Nagios', 'Ntop', 'K8s', 'Snort', 'Overleaf'],
    links: {
      repo: '',
      docs: '/proyectos/doraemon/Proyecto_Doraemon.pdf',
    },
    es: {
      eyebrow: 'Sistema de red y servicios · Proyecto académico',
      title: 'Doraemon',
      tagline:
        'Diseño e implementación de un topología de red y servicios asociados para dos empresas ficticias en un entorno virtualizado.',
      summary:
        'Diseño e implementación de un topología de red y servicios asociados para dos empresas ficticias en un entorno virtualizado.',
      role: 'Diseño y despliegue',
      stackShort: 'VirtualBox',
      overview1:
        'Bay.js surgió de la necesidad de crear componentes reutilizables en proyectos con políticas de seguridad de contenido (CSP) muy restrictivas, donde la mayoría de librerías populares no funcionaban.',
      overview2:
        'El resultado es una librería de menos de 11kb minificada, sin dependencias, que no usa eval ni new Function, disponible como paquete npm o directamente en un build step.',
      quote: 'Menos de 11kb, cero dependencias, compatible con las políticas CSP más estrictas.',
      stats: [
        ['<11kb', 'Tamaño del bundle'],
        ['0', 'Dependencias'],
        ['100%', 'Compatible con CSP'],
      ],
    },
    en: {
      eyebrow: 'Net and services system · Academic project',
      title: 'Doraemon',
      tagline:
        'Design and implementation of a network topology and associated services for two fictitious companies in a virtualized environment.',
      summary:
        'Design and implementation of a network topology and associated services for two fictitious companies in a virtualized environment.',
      role: 'Design & deploy',
      stackShort: 'VirtualBox',
      overview1:
        'Bay.js came out of the need to build reusable components in projects with very strict Content Security Policies (CSP), where most popular libraries simply did not work.',
      overview2:
        'The result is a library under 11kb minified, with zero dependencies, that never uses eval or new Function, available as an npm package or dropped straight into a build step.',
      quote: 'Under 11kb, zero dependencies, compatible with the strictest CSP policies.',
      stats: [
        ['<11kb', 'Bundle size'],
        ['0', 'Dependencies'],
        ['100%', 'CSP compatible'],
      ],
    },
  },
  {
    slug: 'homelab',
    template: 'timeline',
    thumb: 3,
    year: '2025/2026',
    category: 'personal',
    media: {},
    tags: ['ProxmoxVE', 'WebServices', 'Wireguard', 'Nginx', 'Cloudflare', 'Jellyfin', 'Immich', 'Authelia', 'OPNsense'],
    links: {
      repo: '',
      docs: '',
    },
    es: {
      eyebrow: 'Homelab · Proyecto personal',
      title: 'Homelab',
      tagline:
        'Homelab que provee y expone diferentes servicios tanto a la red pública como a una red privada accedida mediante una VPN. Estos servicios van desde un servidor web hasta un servicio de streaming de video y audio privado. Además, también permite llevar a cabo laboratorios en entornos aislados y completamente virtualizados de forma remota.',
      summary:
        'Homelab que provee y expone servicios tanto a la red pública como a una red privada accedida mediante una VPN.',
      role: 'Diseño y despliegue',
      stackShort: 'ProxmoxVE · Nginx · Cloudflare',
      phases: [
        ['Problema', 'Los paneles de consentimiento de cookies existentes eran pesados o difíciles de personalizar para marcas pequeñas.'],
        ['Diseño', 'Definí un sistema de temas basado en variables CSS que cualquiera pudiera adaptar sin tocar el JavaScript.'],
        ['Desarrollo', 'Construí el plugin con JavaScript vanilla y SCSS, empaquetado con Parcel para mantenerlo ligero.'],
        ['Lanzamiento', 'Lo publiqué como paquete npm, con documentación y varios temas de ejemplo listos para usar.'],
      ],
      stats: [
        ['npm', 'Publicado como paquete'],
        ['0', 'Dependencias externas'],
        ['∞', 'Temas personalizables'],
      ],
    },
    en: {
      eyebrow: 'Homelab  · Personal project',
      title: 'Homelab',
      tagline: 'Homelab that provides and exposes various services to both the public network and a private network accessed via VPN. These services range from a web server to a private video and audio streaming service. It also allows labs to be carried out remotely in isolated, fully virtualized environments.',
      summary: 'Homelab that provides and exposes services to both the public network and a private network accessed via VPN.',
      role: 'Design & deploy',
      stackShort: 'ProxmoxVE · Nginx · Cloudflare',
      phases: [
        ['Problem', 'Existing cookie-consent banners were heavy or hard to customize for smaller brands.'],
        ['Design', 'I defined a CSS-variable-based theming system anyone could adapt without touching the JavaScript.'],
        ['Build', 'I built the plugin with vanilla JavaScript and SCSS, bundled with Parcel to keep it lightweight.'],
        ['Launch', 'Published it as an npm package, with documentation and several ready-made example themes.'],
      ],
      stats: [
        ['npm', 'Published as a package'],
        ['0', 'External dependencies'],
        ['∞', 'Customizable themes'],
      ],
    },
  },
  {
    slug: 'autocryoet',
    template: 'cover',
    thumb: 5,
    year: '2025/2026',
    category: 'academic',
    media: {
      cover: { type: 'color', c1: '#2a2050', c2: '#443577' },
    },
    tags: ['Python', 'Machine Learning', 'Pandas', 'Numpy', 'DisPerSE', 'TomoTwin', 'VTK', 'Conda'],
    links: {
      repo: 'https://github.com/FranUcles/auto-cryoet',
      docs: 'https://tfg.franucles.com/informatica/tfg-informatica-francisco-uclesayllon.pdf',
    },
    es: {
      eyebrow: 'Análisis de tomogramas · Proyecto académico',
      title: 'Auto-CryoET',
      tagline:
        'Herramienta de terminal para el análisis automatizado y no supervisado de tomogramas en criomicroscopia electrónica haciendo uso de teoría de Morse discreta.',
      summary:
        'Herramienta de terminal para el análisis automatizado y no supervisado de tomogramas en criomicroscopia electrónica.',
      role: 'Análisis de datos e imágenes',
      stackShort: 'Python · Machine Learning · VTK · Conda',
      overview1:
        'Kernel Study es un proyecto personal para explicar de forma visual e interactiva cómo funcionan los algoritmos de planificación de procesos en un sistema operativo.',
      overview2:
        'El motor de simulación está escrito en Rust y compilado a WebAssembly por rendimiento, mientras que el renderizado interactivo se hace sobre Canvas directamente en el navegador.',
      quote: 'Ver un algoritmo de scheduling ejecutarse paso a paso enseña más que cualquier diagrama estático.',
      stats: [
        ['60fps', 'Renderizado estable'],
        ['6', 'Algoritmos simulados'],
        ['100%', 'En el navegador'],
      ],
    },
    en: {
      eyebrow: 'Tomogram analysis · Academic project',
      title: 'Auto-CryoET',
      tagline: 'Terminal tool for automated, unsupervised analysis of tomograms in cryo-electron microscopy using discrete Morse theory.',
      summary: 'Terminal tool for automated, unsupervised analysis of tomograms in cryo-electron microscopy ',
      role: 'Image and data analysis',
      stackShort: 'Python · Machine Learning · VTK · Conda',
      overview1:
        'Kernel Study is a personal project to explain, visually and interactively, how process-scheduling algorithms work inside an operating system.',
      overview2:
        'The simulation engine is written in Rust and compiled to WebAssembly for performance, while the interactive rendering happens on Canvas straight in the browser.',
      quote: 'Watching a scheduling algorithm run step by step teaches more than any static diagram.',
      stats: [
        ['60fps', 'Stable rendering'],
        ['6', 'Algorithms simulated'],
        ['100%', 'Runs in the browser'],
      ],
    },
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
