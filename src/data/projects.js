export const projects = [
  {
    slug: 'ledgerline',
    template: 'split',
    thumb: 1,
    year: '2026',
    colors: { c1a: '#2a2050', c1b: '#443577', c2a: '#1d1740', c2b: '#332a66' },
    tags: ['React', 'D3.js', 'WebSocket', 'TypeScript'],
    docsLink: true,
    es: {
      eyebrow: 'Panel financiero · SaaS B2B',
      title: 'Ledgerline',
      tagline:
        'Panel de análisis financiero en tiempo real para equipos de tesorería, con visualización de datos en vivo y cierres automatizados.',
      summary:
        'Panel de análisis financiero en tiempo real para equipos de tesorería, con visualización de datos en vivo y cierres automatizados.',
      role: 'Desarrollo front-end',
      stackShort: 'React · D3.js · WebSocket',
      overview1:
        'Ledgerline nació para resolver un problema muy concreto: los equipos de tesorería perdían horas cada mes consolidando datos de varias fuentes antes de poder tomar decisiones.',
      overview2:
        'Conecté el panel directamente con las fuentes de datos vía WebSocket para actualizar los indicadores clave en tiempo real, reduciendo el tiempo de cierre mensual en un 40%.',
      visual1Label: 'Panel financiero en vivo',
      visual2Label: 'Sincronización en tiempo real',
    },
    en: {
      eyebrow: 'Financial dashboard · B2B SaaS',
      title: 'Ledgerline',
      tagline:
        'Real-time financial analytics dashboard for treasury teams, with live data visualization and automated month-end closing.',
      summary:
        'Real-time financial analytics dashboard for treasury teams, with live data visualization and automated month-end closing.',
      role: 'Front-end development',
      stackShort: 'React · D3.js · WebSocket',
      overview1:
        'Ledgerline was built to solve a very specific problem: treasury teams were losing hours every month consolidating data from several sources before they could make decisions.',
      overview2:
        'I connected the dashboard directly to the data sources over WebSocket to update key indicators in real time, cutting the monthly closing time by 40%.',
      visual1Label: 'Live financial dashboard',
      visual2Label: 'Real-time synchronization',
    },
  },
  {
    slug: 'bay-js',
    template: 'cover',
    thumb: 2,
    year: '2025',
    colors: { c1a: '#14202b', c1b: '#1f3d47' },
    tags: ['JavaScript', 'Web Components', 'NPM'],
    docsLink: true,
    es: {
      eyebrow: 'Librería open source',
      title: 'Bay.js',
      tagline:
        'Librería ligera para construir web components reutilizables, sin dependencias, pensada para políticas CSP estrictas.',
      summary:
        'Librería ligera para construir web components reutilizables, sin dependencias, pensada para políticas CSP estrictas.',
      role: 'Autor y mantenedor',
      stackShort: 'JavaScript · Web Components',
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
      eyebrow: 'Open source library',
      title: 'Bay.js',
      tagline:
        'Lightweight library for building reusable web components, with zero dependencies, designed for strict CSP policies.',
      summary:
        'Lightweight library for building reusable web components, with zero dependencies, designed for strict CSP policies.',
      role: 'Author & maintainer',
      stackShort: 'JavaScript · Web Components',
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
    slug: 'cookiemunch',
    template: 'timeline',
    thumb: 3,
    year: '2025',
    colors: {},
    tags: ['JavaScript', 'SCSS', 'Parcel', 'NPM'],
    docsLink: false,
    es: {
      eyebrow: 'Plugin open source',
      title: 'Cookiemunch',
      tagline:
        'Plugin de gestión de cookies, sencillo y personalizable, disponible como paquete npm con temas adaptables.',
      summary:
        'Plugin de gestión de cookies, sencillo y personalizable, disponible como paquete npm con temas adaptables.',
      role: 'Autor y mantenedor',
      stackShort: 'Vanilla JS · SCSS · Parcel',
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
      eyebrow: 'Open source plugin',
      title: 'Cookiemunch',
      tagline: 'Simple, customizable cookie-consent plugin, available as an npm package with adaptable themes.',
      summary: 'Simple, customizable cookie-consent plugin, available as an npm package with adaptable themes.',
      role: 'Author & maintainer',
      stackShort: 'Vanilla JS · SCSS · Parcel',
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
    slug: 'fieldnote',
    template: 'carousel',
    thumb: 4,
    year: '2025',
    colors: {},
    tags: ['React Native', 'SQLite', 'CRDT'],
    docsLink: false,
    es: {
      eyebrow: 'App móvil · Offline-first',
      title: 'Fieldnote',
      tagline:
        'App móvil offline-first para investigación de campo, con sincronización diferencial de datos entre dispositivos.',
      summary:
        'App móvil offline-first para investigación de campo, con sincronización diferencial de datos entre dispositivos.',
      role: 'Desarrollo front-end',
      stackShort: 'React Native · SQLite · CRDT',
      overview1:
        'Fieldnote se diseñó para investigadores que trabajan en zonas sin cobertura de red durante días. La app debía funcionar completamente offline y sincronizar sin conflictos al recuperar conexión.',
      overview2:
        'Usamos una base de datos local en SQLite y estructuras CRDT para resolver conflictos de edición automáticamente cuando varios dispositivos registran datos sobre el mismo punto de estudio.',
      slides: [
        ['#1a2a1e', '#2f4a36', 'Registro de campo'],
        ['#152219', '#26402c', 'Modo offline'],
        ['#1e3324', '#345a3f', 'Sincronización diferencial'],
        ['#213a28', '#3a6247', 'Historial de notas'],
      ],
    },
    en: {
      eyebrow: 'Mobile app · Offline-first',
      title: 'Fieldnote',
      tagline: 'Offline-first mobile app for field research, with differential data sync across devices.',
      summary: 'Offline-first mobile app for field research, with differential data sync across devices.',
      role: 'Front-end development',
      stackShort: 'React Native · SQLite · CRDT',
      overview1:
        'Fieldnote was designed for researchers working in areas with no network coverage for days at a time. The app had to run fully offline and sync without conflicts once a connection came back.',
      overview2:
        'We used a local SQLite database and CRDT structures to automatically resolve editing conflicts when several devices log data about the same study site.',
      slides: [
        ['#1a2a1e', '#2f4a36', 'Field logging'],
        ['#152219', '#26402c', 'Offline mode'],
        ['#1e3324', '#345a3f', 'Differential sync'],
        ['#213a28', '#3a6247', 'Note history'],
      ],
    },
  },
  {
    slug: 'kernel-study',
    template: 'cover',
    thumb: 5,
    year: '2024',
    colors: { c1a: '#2a2010', c1b: '#4a3a1a' },
    tags: ['Rust', 'WebAssembly', 'Canvas'],
    docsLink: false,
    es: {
      eyebrow: 'Proyecto educativo',
      title: 'Kernel Study',
      tagline:
        'Serie de visualizaciones interactivas que explican algoritmos de scheduling de procesos en el navegador.',
      summary:
        'Serie de visualizaciones interactivas que explican algoritmos de scheduling de procesos en el navegador.',
      role: 'Diseño y desarrollo',
      stackShort: 'Canvas · Rust / WASM',
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
      eyebrow: 'Educational project',
      title: 'Kernel Study',
      tagline: 'A series of interactive visualizations explaining process-scheduling algorithms in the browser.',
      summary: 'A series of interactive visualizations explaining process-scheduling algorithms in the browser.',
      role: 'Design & development',
      stackShort: 'Canvas · Rust / WASM',
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
  {
    slug: 'signal-noise',
    template: 'timeline',
    thumb: 6,
    year: '2024',
    colors: {},
    tags: ['Next.js', 'PostgreSQL', 'Operational Transform'],
    docsLink: true,
    es: {
      eyebrow: 'Editor colaborativo',
      title: 'Signal/Noise',
      tagline:
        'Editor colaborativo de documentos técnicos con control de versiones semántico y edición en tiempo real.',
      summary:
        'Editor colaborativo de documentos técnicos con control de versiones semántico y edición en tiempo real.',
      role: 'Desarrollo full-stack',
      stackShort: 'Next.js · Postgres · OT',
      phases: [
        ['Problema', 'Los documentos técnicos compartidos se convertían en un caos de versiones cuando varias personas editaban a la vez.'],
        ['Diseño', 'Diseñé un modelo de edición colaborativa basado en transformación operacional (OT) para fusionar cambios sin conflictos.'],
        ['Desarrollo', 'Implementé el motor de sincronización en tiempo real sobre Next.js y Postgres.'],
        ['Resultado', 'El equipo pasó a editar documentación en paralelo sin conflictos ni versiones duplicadas.'],
      ],
      stats: [
        ['OT', 'Motor de sincronización'],
        ['0', 'Conflictos de edición'],
        ['Next.js', 'Stack principal'],
      ],
    },
    en: {
      eyebrow: 'Collaborative editor',
      title: 'Signal/Noise',
      tagline: 'Collaborative technical-documentation editor with semantic version control and real-time editing.',
      summary: 'Collaborative technical-documentation editor with semantic version control and real-time editing.',
      role: 'Full-stack development',
      stackShort: 'Next.js · Postgres · OT',
      phases: [
        ['Problem', 'Shared technical documents turned into a mess of versions whenever several people edited at once.'],
        ['Design', 'I designed a collaborative editing model based on Operational Transformation (OT) to merge changes without conflicts.'],
        ['Build', 'I implemented the real-time sync engine on top of Next.js and Postgres.'],
        ['Result', 'The team moved to editing documentation in parallel with no conflicts or duplicate versions.'],
      ],
      stats: [
        ['OT', 'Sync engine'],
        ['0', 'Editing conflicts'],
        ['Next.js', 'Core stack'],
      ],
    },
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
