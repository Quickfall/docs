// docmd.config.js
export default defineConfig({
  // --- Core ---
  title: 'My Documentation',
  url: 'https://quickfall-docs.tobezdev.com/',

  // --- Branding ---
  logo: {
    light: 'assets/images/quickfall_logo_full_dark_transparent.png',
    dark: 'assets/images/quickfall_logo_full_dark_transparent.png',
    alt: 'Logo',
    href: '/',
  },
  favicon: 'assets/images/favicon.ico',

  // --- Source & Output ---
  src: 'docs',
  out: 'site',

  // --- Layout & UI Architecture ---
  layout: {
    spa: true,
    header: {
      enabled: true,
    },
    sidebar: {
      collapsible: false,
      defaultCollapsed: false,
    },
    optionsMenu: {
      position: 'menubar',
      components: {
        search: true,      
        themeSwitch: true, 
        sponsor: 'https://github.com/sponsors/Quickfall',     
      }
    },
    footer: {
      style: 'minimal',
      content: '&copy; ' + new Date().getFullYear() + ' Quickfall. All rights reserved.',
      branding: false
    }
  },

  // --- Theme Settings ---
  theme: {
    name: 'default',
    appearance: 'system',
    codeHighlight: true,    
    customCss: [
      'assets/css/fixedFooter.css',
      'assets/css/hidePageFooterActionsBarOnDesktops.css',
    ],          
  },

  // --- General Features ---
  minify: true,           
  autoTitleFromH1: true,  
  copyCode: true,         
  pageNavigation: true,   
  
  customJs: [],           


  // --- Navigation (Sidebar) ---
  navigation: [
    { title: 'Home', path: '/', icon: 'home' },
  ],

  // --- Plugins ---
  plugins: {
    seo: { aiBots: false },
    sitemap: { defaultChangefreq: 'weekly' },
    analytics: { googleV4: { measurementId: '' } },
  },
  
  // --- Edit Link ---
  editLink: {
    enabled: false,
    baseUrl: 'https://github.com/quickfall/docs/edit/main/docs/',
    text: 'Contribute to the Docs!'
  }
});
