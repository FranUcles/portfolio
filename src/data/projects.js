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
    template: 'split',
    thumb: 1,
    year: '2026',
    category: 'personal',
    media: {
      row1: { type: 'color', c1: '#2a2050', c2: '#443577' },
      row2: { type: 'color', c1: '#1d1740', c2: '#332a66' },
    },
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
      overview1:
        'Ledgerline nació para resolver un problema muy concreto: los equipos de tesorería perdían horas cada mes consolidando datos de varias fuentes antes de poder tomar decisiones.',
      overview2:
        'Conecté el panel directamente con las fuentes de datos vía WebSocket para actualizar los indicadores clave en tiempo real, reduciendo el tiempo de cierre mensual en un 40%.',
      visual1Label: 'Panel financiero en vivo',
      visual2Label: 'Sincronización en tiempo real',
    },
    en: {
      eyebrow: 'Financial dashboard · B2B SaaS',
      title: 'fcontainers',
      tagline:
        'Containerization system for creating and managing lightweight containers on Linux, using only system libraries.',
      summary:
        'Containerization system for creating and managing lightweight containers on Linux, using only system libraries.',
      role: 'Low-level development',
      stackShort: 'C++ · Go',
      overview1:
        'Ledgerline was built to solve a very specific problem: treasury teams were losing hours every month consolidating data from several sources before they could make decisions.',
      overview2:
        'I connected the dashboard directly to the data sources over WebSocket to update key indicators in real time, cutting the monthly closing time by 40%.',
      visual1Label: 'Live financial dashboard',
      visual2Label: 'Real-time synchronization',
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
