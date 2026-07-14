import { defineConfig } from 'astro/config';

// El sitio usa enrutado manual por carpetas (src/pages y src/pages/en)
// en lugar del router de i18n integrado, para mantener las URLs actuales
// (/proyectos/slug) en español como ruta por defecto y /en/... en inglés.
export default defineConfig({
  site: 'https://franucles.com',
});
