/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'red-bg': "url('/images/red-bg.jpg')",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        lobster: ['var(--font-lobster)'],
        prompt: ['var(--font-prompt)'],
        luckiest: ['var(--font-luckiest)'],
        gelasio: ['var(--font-gelasio)'],
      },
    },
  },
  plugins: [],
};
