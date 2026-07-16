import { type } from "node:os";
import { text } from "node:stream/consumers";

export const projects = [
    {
    slug: 'aplicaciondocumentacion',
    template: 'carousel',
    thumb: 4,
    year: '2025',
    category: 'work',
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
      slides: [
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/empresa.png' },
          label: 'Panel de la empresa'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/trabajadores.png' },
          label: 'Panel trabajadores'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/vehiculos.png' },
          label: 'Panel vehículos'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/nominas.png' },
          label: 'Panel listado de nóminas'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/descargar_nominas.png' },
          label: 'Panel descarga de nóminas'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/clasificar_tacografos.png' },
          label: 'Panel clasificación de tacógrafos'
        },
      ]
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
      slides: [
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/empresa.png' },
          label: 'Company panel'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/trabajadores.png' },
          label: 'Employees panel'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/vehiculos.png' },
          label: 'Vehicles panel'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/nominas.png' },
          label: 'Payroll list panel'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/descargar_nominas.png' },
          label: 'Payroll download panel'
        },
        {
          media: { type: 'image', src: '/proyectos/aplicaciondocumentacion/clasificar_tacografos.png' },
          label: 'Tachograph classification panel'
        },
      ]
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
          
        },
        {
          type: "image",
          media: { type: 'image', src:"/proyectos/fcontainers/fcontainers_flujo.png", fit: 'contain'},
          label: "Diagrama de flujo de fcontainers",
        }  
      ],
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
            },
            {
              type: 'image',
              media: { type: 'image', src: '/proyectos/fcontainers/flujo_exec.png' },
              label: "Diagrama de flujo de commando exec",
            }
          ],
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
              text: "this program is responsible for running the containers and, if running in the background, creating the intermediary process (fcontainers-shim)." 
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
          
        },
        {
          type: "image",
          media: { type: 'image', src:"/proyectos/fcontainers/fcontainers_flujo.png", fit: 'contain'},
          label: "fcontainers flow diagram",
        }
        
      ],
      parts: [
        {
          title: "Runtime",
          overviews: [
            {
              type: 'p',
              text: 'The runtime is a program written in C++ whose goal is to create the container. The first thing worth noting is the choice of programming language. Although the whole project could have been done in Go, I chose C++ for the runtime for one main reason: to keep the creation of the container as close to the OS as possible. For practicality, I did not resort to syscalls directly, but I found it interesting and much more educational to experiment with the C standard library wrappers.',
            },
            {
              type: 'p',
              text: 'A very important aspect that the runtime handles is connectivity. This program also takes care of creating a virtual switch so that containers can communicate both with each other and with the outside world. This was done using the libnl library, which allows NETLINK messages to be encapsulated in a convenient and simple way. Thanks to it, interfaces are created that connect the host and the container.'
            },
            {
              type: 'p',
              text: 'A complex part of the project was designing the background execution system. A mechanism is needed to be able to create processes within this new container. This translates into being able to create processes in the same set of pid, mount, net, user, cgroups, and ipc namespaces as the process acting as init inside the container. For this task, and taking Docker as a reference, the concept of the fcontainers-shim was introduced.'
            },
            {
              type: 'p',
              text: 'The fcontainer-shim is a process that acts as an intermediary between the world of the container and the world of the host. It listens on a socket waiting for attach or exec commands to run inside the container and redirect its input/output. Although this process could have been integrated as part of the container\'s init, I decided to create it as a separate process alongside init in order to keep the concepts separate.'
            },
            {
              type: 'quote',
              quote: 'A simple runtime that, thanks to minimal dependencies, manages to produce fully isolated and functional containers.'
            }
          ],
        },
        {
          title: "Daemon-CLI",
          overviews: [
            {
              type: 'p',
              text: 'Both the daemon and the CLI are two tools that work in tandem to allow the end user to perform actions on containers transparently with respect to the architecture. Both programs were developed within the same Go project for several reasons.'
            },
            {
              type: 'list',
              items: [
                {
                  title: "Goroutines",
                  text: "Go is a programming language that allows thousands of tasks to run simultaneously with little complexity thanks to goroutines. It also has the standard net library, which greatly simplifies the management of sockets and connections. For this reason, it was decided to implement the daemon in Go." 
                },
                {
                  title: "Cobra",
                  text: "the Cobra library makes it incredibly easy to configure the commands that can or cannot be run in a Go program. This way, a CLI can be built in Go with just a few lines of code." 
                },
                {
                  title: "Shared protocol",
                  text: "as mentioned above, both the daemon and the CLI were developed in Go, but the decision to keep them within the same project stems from the dependency between them. The CLI must be able to communicate effectively with the daemon, so both must share a common protocol. Thanks to Go's types, two programs within the same Go project can handle the encoding and decoding of a shared protocol without extra processes." 
                },
              ]
            },
            {
              type: 'p',
              text: 'As for how it works, the daemon is responsible for running the runtime to create the containers and stores all the relevant information about them in a JSON file. For example, it stores a container ID, its name, its PID, its state, and also the connection socket to the associated shim. This way, a correspondence is maintained between a container and the communication channel with its associated shim, which handles all of its requests.'
            },
            {
              type: 'p',
              text: 'Finally, I want to mention how the daemon and the CLI handle the connection to the container. This requires prior communication from fcontainersd to the fcontainers-shim, through the socket, to indicate the type of connection (attach or exec) the client wants. Afterward, the CLI is sent the socket on which the shim will be handling the requested operation.'
            },
            {
              type: 'image',
              media: { type: 'image', src: '/proyectos/fcontainers/flujo_exec.png' },
              label: "Exec command flow diagram",
            }
          ],
        },
      ]
    },
  },
  {
    slug: 'doraemon',
    template: 'system',
    thumb: 2,
    year: '2025/2026',
    category: 'academic',
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
      stackShort: 'VirtualBox · Docker · K8s',
      architecture: {
        intro: [
          { type: 'p', text: 'Contexto general del sistema...' },
        ],
        diagram: {
          cover: { type: 'image', src: '/proyectos/sistema/diagrama-red.png', fit: 'contain' },
          title: 'Diagrama general de la red',
        }
      },
      services: [
        {
          title: 'API Gateway',
          tagline: 'Punto de entrada único',
          overviews: [
            { type: 'p', text: 'Explico el gateway...' },
            { type: 'image', media: { type: 'image', src: '/proyectos/sistema/gateway.png' }, label: 'Panel del gateway' },
            { type: 'p', text: 'Sigo explicando tras la imagen...' },
          ],
        },
        {
          title: 'API Gateway',
          tagline: 'Punto de entrada único',
          overviews: [
            { type: 'p', text: 'Explico el gateway...' },
            { type: 'image', media: { type: 'image', src: '/proyectos/sistema/gateway.png' }, label: 'Panel del gateway' },
            { type: 'p', text: 'Sigo explicando tras la imagen...' },
          ],
        },
        // más servicios...
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
      architecture: {
        intro: [
          { type: 'p', text: 'Contexto general del sistema...' },
        ],
        diagram: {
          cover: { type: 'image', src: '/proyectos/sistema/diagrama-red.png', fit: 'contain' },
          title: 'Diagrama general de la red',
        }
      },
      services: [
        {
          title: 'API Gateway',
          tagline: 'Punto de entrada único',
          overviews: [
            { type: 'p', text: 'Explico el gateway...' },
            { type: 'image', media: { type: 'image', src: '/proyectos/sistema/gateway.png' }, label: 'Panel del gateway' },
            { type: 'p', text: 'Sigo explicando tras la imagen...' },
          ],
        },
        {
          title: 'API Gateway',
          tagline: 'Punto de entrada único',
          overviews: [
            { type: 'p', text: 'Explico el gateway...' },
            { type: 'image', media: { type: 'image', src: '/proyectos/sistema/gateway.png' }, label: 'Panel del gateway' },
            { type: 'p', text: 'Sigo explicando tras la imagen...' },
          ],
        },
        // más servicios...
      ],
    },
  },
  {
    slug: 'homelab',
    template: 'system',
    thumb: 3,
    year: '2025/2026',
    category: 'personal',
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
      architecture: {
        intro: [
          { 
            type: 'p', 
            text: 'Cuando estaba en el último curso de la carrera de informática tuve que llevar a cabo un proyecto donde necesitaba desplegar simular un red completa. Además, tenía la necesidad de desplegar de forma manual muchos de los servicios que la red debía proveer. Este trabajo me enseñó que no resulta complicado montar ciertos servicios siempre y cuando se tuviera una maquina donde ejecutarlos. Y ahí me pregunté, ¿por qué no hacer yo lo mismo con un ordenador viejo? Así nació este proyecto de homelab y, tras investigar, descubrí que era un mundo con infinitas posibilidades.' 
          },
          { 
            type: 'p', 
            text: 'Inicialmente, y siguiendo la línea del trabajo de la universidad, decidí montarlo utilizando una imagen base de Debian server. De esta manera, cada servicio debía ser montado y configurado con cuidado por mi parte. Más tarde descubrí ProxmoxVE y eso cambió completamente la forma de gestionar el homelab. ProxmoxVE es un sistema operativo que funciona como hipervisor tipo 1 y que posee una enorme comunidad que, usando scripts, te permite desplegar un servicio en cuestión de minutos. Más allá de la facilidad de desplegar servicios, la faceta de hipervisor de este sistema operativo abría una nueva posibilidad: maquinas virtuales remotas.' 
          },
          { 
            type: 'p', 
            text: 'Durante el desarrollo del proyecto mencionado al inicio me topé con una complicación importante: necesitaba demasiadas máquinas virtuales. Al tener que simular una topología de ser de dos empresas eran necesarias más maquinas virtuales de las que mi ordenador era capaz de sostener comodamente. Gracias a ProxmoxVE esta limitante queda resuelta gracias a la posibilidad de conectarse a maquinas virtuales que se ejecutan en ProxmoxVE. Además, al ser un hipervisor tipo 1, ProxmoxVE es mucho más eficiente que otras herramientas de virtualización como VirtualBox.' 
          },
        ],
      },
      services: [
        {
          title: 'Immich',
          tagline: 'Nube de fotos privada',
          overviews: [
            { type: 'p', text: 'Immich es un servicio que permite tener una nube al puro estilo de Google Fotos. Esto me ha permitido no depender de suscripciones para mis imágenes y videos; garantizando que si mi móvil se rompe, mi contenido se encuentra a salvo. Además, haciendo uso de sus usuarios me ha permitido compartir este servicio con familiares y amigos.' },
          ],
        },
        {
          title: 'Jellyfin',
          tagline: 'Servicio de streaming privado',
          overviews: [
            { type: 'p', text: 'Jellyfin es un servicio de streaming de audio y video al estilo de Netflix. A diferencia de Immich, este servicio no sustituye a Netflix pues no cuenta con un catálogo tan extenso. Sin embargo, me ha permitido disfrutar de peliculas y series que tenía en casa en formato físico. Mucho de este contenido no está en otras plataformas y me parecia una pena dejar de disfrutar de este contenido por no tener un reproductor DVD a mano. Además, Jellyfin permite reproducción en dispositivos tipo ChromeCast y así tengo todo el contenido en cualquier parte. ¿Quién no quiere eso?' },
          ],
        },
        {
          title: 'Servidor Nginx',
          tagline: 'Servidor web',
          overviews: [
            { type: 'p', text: 'Nginx es un conocido servidor web que me ha permitido desplegar cualquier página web que desee. Tener un servicio de este estilo proporciona una gran versatilidad ya que me permite servir cualquier contenido que quiera publicar. De hecho, este mismo portfolio se sirve gracias a este servidor web. Otro ejemplo de uso es el distribuir documentos PDFs relevantes para mi como mi CV o mis informes de los TFGs.' },
          ],
        },
        {
          title: 'Laboratorio virtual',
          tagline: 'Entorno de maquinas virtuales aisladas',
          overviews: [
            { type: 'p', text: 'Este es el servicio más curioso de todos. Gracias a la versatilidad y la eficiencia de ProxmoxVE ejecutando maquinas virtuales, decidí montar un servicio de laboratorios virtuales. Este es completamente privado.' },
            { type: 'p', text: 'Para poder crear las maquinas virtuales y las redes entre ellos, como en VirtualBox, es necesario tener acceso al panel de ProxmoxVE. Este acceso está muy protegido ya que precisa de un usuario y contraseña de Authelia para acceder a la página de selección de nodo; luego también será necesario un usuario con permisos y contraseña de ProxmoxVe del nodo asignado. De esta manera, se garantiza una gran protección para gestionar las maquinas virtuales y las redes del labortatorio.'},
            { type: 'p', text: 'Para acceder a la red de las maquinas virtuales, se necesita un certificado válido de una VPN creada con Wireguard. Esta es la forma más segura de permitir el acceso a la red interna de las maquinas virtuales desde internet. Aunque se podría usar Wireguard en el propio ProxmoxVE, he considerado usar OPNsense para esta labor. Todas las maquinas virtuales necesitan un router para controlar quien accede a internet y quien. Para cubrir ambas necesidades, la VPN y el router, decidí montar y configurar un router OPNsense que vigila toda la red del laboratorio virtual.'}
          ],
        }
      ],
      challenges: [
        {
          challenge: 'Disponer de un dominio y un DNS para poder acceder a los servicios públicos desde cualquier parte.',
          solution: 'Adquirir un dominio usando Cloudflare para usar su servicio gratuito de DNS.'
        },
        {
          challenge: 'Evitar que la dirección IP del servidor se filtre comprometiendo así la seguridad del sistema.',
          solution: 'Hacer uso de Cloudflare Tunnel para garantizar anonimato y conseguir protección DDoS.'
        },
        {
          challenge: 'Getionar el acceso al panel de control de ProxmoxVE cuando hay más de un servidor sin utilizar Proxmox Cluster.',
          solution: 'Servir una página web personalizada que permita seleccionar a cuales de los servidores Proxmox se quiere acceder.'
        },
        {
          challenge: 'Evitar el acceso a aquellos servicios que son privados e incluso a la página de selección de clúster. Solo los usuarios autenticados y autorizados deben acceder.',
          solution: 'Utilizar Authelia como proxy que permita interceptar todas las peticiones a servicios privados y garantizar la autenticación y autorización del usuario.'
        }
      ],
      slides: [
        {
          media: { type: 'image', src: '/proyectos/homelab/login_proxmox.png' },
          label: 'Inicio de sesión de Proxmox'
        },
        {
          media: { type: 'image', src: '/proyectos/homelab/node1.png' },
          label: 'Panel de Proxmox del primer nodo con sus servicios'
        },
        {
          media: { type: 'image', src: '/proyectos/homelab/node2.png' },
          label: 'Panel de Proxmox del segundo nodo con sus maquinas virtuales'
        },
        {
          media: { type: 'image', src: '/proyectos/homelab/select_node.png' },
          label: 'Página de selección de nodos del homelab'
        },
        {
          media: { type: 'image', src: '/proyectos/homelab/opnsense.png' },
          label: 'Panel de OPNsense del laboratorio virtual'
        }
      ]
    },
    en: {
      eyebrow: 'Homelab · Personal project',
      title: 'Homelab',
      tagline:
        'Homelab that provides and exposes different services to both the public network and a private network accessed via a VPN. These services range from a web server to a private video and audio streaming service. In addition, it also allows conducting laboratories in isolated and fully virtualized environments remotely.',
      summary:
        'Homelab that provides and exposes services to both the public network and a private network accessed via a VPN.',
      role: 'Design and deployment',
      stackShort: 'ProxmoxVE · Nginx · Cloudflare',
      architecture: {
        intro: [
          { 
            type: 'p', 
            text: 'During my final year of my Computer Science degree, I had to carry out a project where I needed to deploy and simulate a complete network. Additionally, I needed to manually deploy many of the services that the network was supposed to provide. This work taught me that setting up certain services is not complicated as long as you have a machine to run them on. And that\'s when I asked myself: why not do the same with an old computer? Thus, this homelab project was born and, after researching, I discovered it was a world of infinite possibilities.' 
          },
          { 
            type: 'p', 
            text: 'Initially, following the line of my university work, I decided to set it up using a Debian server base image. This way, each service had to be carefully set up and configured by me. Later, I discovered ProxmoxVE, and that completely changed how I managed the homelab. ProxmoxVE is an operating system that functions as a type 1 hypervisor and has a huge community that, using scripts, allows you to deploy a service in a matter of minutes. Beyond the ease of deploying services, the hypervisor aspect of this operating system opened up a new possibility: remote virtual machines.' 
          },
          { 
            type: 'p', 
            text: 'During the development of the project mentioned at the beginning, I ran into a major complication: I needed too many virtual machines. Having to simulate a network topology for two companies required more virtual machines than my computer could comfortably handle. Thanks to ProxmoxVE, this limitation was resolved due to the ability to connect to virtual machines running on ProxmoxVE. Furthermore, being a type 1 hypervisor, ProxmoxVE is much more efficient than other virtualization tools like VirtualBox.' 
          },
        ],
      },
      services: [
        {
          title: 'Immich',
          tagline: 'Private photo cloud',
          overviews: [
            { type: 'p', text: 'Immich is a service that allows you to have a cloud in the pure style of Google Photos. This has allowed me to not rely on subscriptions for my images and videos, ensuring that if my phone breaks, my content is safe. Moreover, making use of its user management, I\'ve been able to share this service with family and friends.' },
          ],
        },
        {
          title: 'Jellyfin',
          tagline: 'Private streaming service',
          overviews: [
            { type: 'p', text: 'Jellyfin is an audio and video streaming service in the style of Netflix. Unlike Immich, this service does not replace Netflix as it doesn\'t have such an extensive catalog. However, it has allowed me to enjoy movies and series that I had at home in physical format. Much of this content is not available on other platforms, and it seemed a shame to stop enjoying it just because I didn\'t have a DVD player at hand. Additionally, Jellyfin allows playback on Chromecast-type devices, so I have all the content anywhere. Who wouldn\'t want that?' },
          ],
        },
        {
          title: 'Nginx Server',
          tagline: 'Web server',
          overviews: [
            { type: 'p', text: 'Nginx is a well-known web server that has allowed me to deploy any webpage I want. Having a service of this kind provides great versatility as it allows me to serve any content I want to publish. In fact, this very portfolio is served thanks to this web server. Another example of its use is distributing PDF documents relevant to me, such as my CV or my Bachelor\'s thesis reports.' },
          ],
        },
        {
          title: 'Virtual Lab',
          tagline: 'Isolated virtual machine environment',
          overviews: [
            { type: 'p', text: 'This is the most curious service of all. Thanks to the versatility and efficiency of ProxmoxVE running virtual machines, I decided to set up a virtual lab service. This is completely private.' },
            { type: 'p', text: 'To be able to create the virtual machines and the networks between them, like in VirtualBox, you need access to the ProxmoxVE panel. This access is highly protected as it requires an Authelia username and password to access the node selection page; then a ProxmoxVE user with permissions and password for the assigned node is also required. This guarantees great protection for managing the virtual machines and the laboratory networks.'},
            { type: 'p', text: 'To access the virtual machines\' network, a valid certificate from a VPN created with WireGuard is required. This is the most secure way to allow access to the internal network of the virtual machines from the internet. Although WireGuard could be used on ProxmoxVE itself, I chose to use OPNsense for this task. All virtual machines need a router to control who accesses the internet and who doesn\'t. To cover both needs—the VPN and the router—I decided to set up and configure an OPNsense router that oversees the entire virtual lab network.'}
          ],
        }
      ],
      challenges: [
        {
          challenge: 'Having a domain and a DNS to be able to access public services from anywhere.',
          solution: 'Acquiring a domain using Cloudflare to use its free DNS service.'
        },
        {
          challenge: 'Preventing the server\'s IP address from leaking, thus compromising system security.',
          solution: 'Using Cloudflare Tunnel to guarantee anonymity and achieve DDoS protection.'
        },
        {
          challenge: 'Managing access to the ProxmoxVE control panel when there is more than one server without using Proxmox Cluster.',
          solution: 'Serving a custom webpage that allows selecting which of the Proxmox servers to access.'
        },
        {
          challenge: 'Preventing access to those services that are private, including the cluster selection page. Only authenticated and authorized users should have access.',
          solution: 'Using Authelia as a proxy to intercept all requests to private services and guarantee user authentication and authorization.'
        }
      ],
      slides: [
        {
          media: { type: 'image', src: '/proyectos/homelab/login_proxmox.png' },
          label: 'Proxmox login'
        },
        {
          media: { type: 'image', src: '/proyectos/homelab/node1.png' },
          label: 'Proxmox panel of the first node with its services'
        },
        {
          media: { type: 'image', src: '/proyectos/homelab/node2.png' },
          label: 'Proxmox panel of the second node with its virtual machines'
        },
        {
          media: { type: 'image', src: '/proyectos/homelab/select_node.png' },
          label: 'Homelab node selection page'
        },
        {
          media: { type: 'image', src: '/proyectos/homelab/opnsense.png' },
          label: 'OPNsense panel of the virtual lab'
        }
      ]
    },
  },
  {
    slug: 'autocryoet',
    template: 'workflow',
    thumb: 5,
    year: '2025/2026',
    category: 'academic',
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
      workflow: {
        intro: [
          {
            type: 'p',
            text: 'Este proyecto forma parte de mi Trabajo Fin de Grado (TFG) de mi grado en Ingeniería Informática. Su objetivo es automatizar el análisis de tomogramas obtenidos con técnicas de crio-microscopía electrónica. Su enfoque es diseñar un flujo de trabajo que conecte herramientas ya existentes para crear un proceso automatizado y no supervisado.',
          },
          {
            type: 'p',
            text: 'Este trabajo supuso un reto en toda regla ya que trabaja con muchos campos de la informática como el análisis de imágenes, el machine learning y el análisis de datos. Este proyecto me ha permitido aprender mucho sobre manejo de datos utilizando Pandas y Numpy para manejar grandes volúmenes de datos. Además, hacer que herramientas tan diferentes como TomoTwin y DisPerSE trabajen en armonía, fue todo un reto.',
          },
          {
            type: 'p',
            text: 'A pesar de todas las complicaciones, finalmente conseguí desarrollar una herramienta de terminal que ejecuta todo un flujo de trabajo de forma autónoma. Solo es necesario darle información básica sobre el modelo de la red neuronal y ciertos parámetros para que la herramienta trabaje. Asimismo, en el repositorio de la herramienta también se detalla el proceso de instalación que cree para poder distribuir la herramienta cómodamente entre los potenciales usuarios. Aunque los detalles del desarrollo de la herramienta y de implementación son complejos y se pueden revisar en la documentación, a continuación se muestran las diferente etapas del flujo de trabajo con una breve descripción.',
          },
        ],
        diagram: {
          title: 'Diagrama del workflow de Auto-CryoET',
          cover: { type: 'image', src: '/proyectos/autocryoet/workflow_completo.jpg' },
        },
        steps: [
          {
            title: 'Análisis del tomograma',
            description:
              'Esta es la primera etapa y se encarga de analizar el tomograma de entrada. La idea es utilizar la red neuronal de TomoTwin para extraer un mapa de 32 características de cada punto del tomograma. Posteriormente, haciendo uso de herramientas de reducción dimensional se obtendrá una nube de puntos en 2D.',
            
          },
          {
            title: 'Preprocesado',
            description:
              'Esta fase está desarrollado completamente en Python y es la encargada de generar una imagen 2D y una mácara a partir de la nube de puntos de la fase anterior. Estos dos elementos serán cruciales para que DisPerSE haga su análisis topológico. Además, esta fase también proporcionará la correspondencia entre los píxeles de la imagen y los puntos de la nube de puntos.',
          },
          {
            title: 'Análisis topológico',
            description:
              'Haciendo uso de la herramienta DisPerSE, se realiza un análisis de la imagen para determinar qué zonas de la nube de puntos son más densas. Esas zonas son las que corresponderán a las estructuras del tomograma original.',
          },
          {
            title: 'Postprocesado',
            description:
              'Esta fase utiliza Python para transformar el resultado de la fase anterior de vuelta al tomograma. Necesitamos seleccionar qué zonas del tomograma se corresponden con las zonas de la imagen seleccionada por el análisis de DisPerSE. Esto nos permitirá obtener la segmentación que estabamos buscando.',
          },
          {
            title: 'Visualizado',
            description:
              'Esta fase es opcional y permite visualizar la segmentación del tomograma en una herramienta llamada Napari.',
          },
        ],
      },
      slides: [
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_init.png', fit: 'contain'},
          label: 'Menú inicial en Auto-CryoET'
        },
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_select_etapas.png', fit: 'contain' },
          label: 'Menú de selección de etapas a ejecutar en Auto-CryoET'
        },
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_completo_confirm.png', fit: 'contain' },
          label: 'Resumen de todas las etapas del workflow en Auto-CryoET'
        },
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_ask_parameters.png', fit: 'contain' },
          label: 'Solicitud de parámetros por parte de Auto-CryoET'
        },
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_success.png', fit: 'contain' },
          label: 'Ejecución correcta del flujo completo de Auto-CryoET'
        }
      ]
    },
    en: {
      eyebrow: 'Tomogram analysis · Academic project',
      title: 'Auto-CryoET',
      tagline:
        'Terminal tool for automated, unsupervised analysis of cryo-electron microscopy tomograms using discrete Morse theory.',
      summary:
        'Terminal tool for automated, unsupervised analysis of cryo-electron microscopy tomograms.',
      role: 'Data and image analysis',
      stackShort: 'Python · Machine Learning · VTK · Conda',
      workflow: {
        intro: [
          {
            type: 'p',
            text: 'This project is part of my Bachelor\'s Thesis (TFG) for my degree in Computer Engineering. Its goal is to automate the analysis of tomograms obtained through cryo-electron microscopy techniques. Its approach is to design a workflow that connects existing tools to create an automated, unsupervised process.',
          },
          {
            type: 'p',
            text: 'This work was a real challenge, as it draws on many fields of computer science such as image analysis, machine learning, and data analysis. This project allowed me to learn a great deal about data handling using Pandas and Numpy to manage large volumes of data. In addition, getting tools as different as TomoTwin and DisPerSE to work in harmony was quite a challenge.',
          },
          {
            type: 'p',
            text: 'Despite all the complications, I eventually managed to develop a terminal tool that runs an entire workflow autonomously. It only needs basic information about the neural network model and certain parameters for the tool to work. The tool\'s repository also details the installation process I created in order to distribute the tool conveniently among potential users. Although the details of the tool\'s development and implementation are complex and can be reviewed in the documentation, the different stages of the workflow are shown below with a brief description.',
          },
        ],
        diagram: {
          title: 'Auto-CryoET workflow diagram',
          cover: { type: 'image', src: '/proyectos/autocryoet/workflow_completo.jpg' },
        },
        steps: [
          {
            title: 'Tomogram analysis',
            description:
              'This is the first stage and handles the analysis of the input tomogram. The idea is to use the TomoTwin neural network to extract a 32-feature map for each point in the tomogram. Afterward, dimensionality reduction tools are used to obtain a 2D point cloud.',
            
          },
          {
            title: 'Preprocessing',
            description:
              'This phase is developed entirely in Python and is responsible for generating a 2D image and a mask from the point cloud produced in the previous phase. These two elements will be crucial for DisPerSE to perform its topological analysis. This phase also provides the correspondence between the pixels of the image and the points of the point cloud.',
          },
          {
            title: 'Topological analysis',
            description:
              'Using the DisPerSE tool, the image is analyzed to determine which areas of the point cloud are densest. These areas are the ones that will correspond to the structures in the original tomogram.',
          },
          {
            title: 'Postprocessing',
            description:
              'This phase uses Python to transform the result of the previous phase back into the tomogram. We need to select which areas of the tomogram correspond to the areas of the image selected by the DisPerSE analysis. This allows us to obtain the segmentation we were looking for.',
          },
          {
            title: 'Visualization',
            description:
              'This phase is optional and allows the tomogram segmentation to be visualized in a tool called Napari.',
          },
        ],
      },
      slides: [
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_init.png', fit: 'contain'},
          label: 'Initial menu in Auto-CryoET'
        },
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_select_etapas.png', fit: 'contain' },
          label: 'Stage selection menu in Auto-CryoET'
        },
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_completo_confirm.png', fit: 'contain' },
          label: 'Summary of all workflow stages in Auto-CryoET'
        },
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_ask_parameters.png', fit: 'contain' },
          label: 'Auto-CryoET requesting parameters'
        },
        {
          media: { type: 'image', src: '/proyectos/autocryoet/workflow_success.png', fit: 'contain' },
          label: 'Successful execution of the full Auto-CryoET workflow'
        }
      ]
    },
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
