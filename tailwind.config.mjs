/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cosmicBlack: '#07070F',
        sacredGold: '#D4A017',
        vedicIndigo: '#1A0F3C',
        deepIndigo: '#120B2A',
        electricBlue: '#00C8FF',
        lotusWhite: '#F0EDE6',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 120s linear infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
