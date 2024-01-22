/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class", // or 'media' or 'class' pour que cela marche dans le dossier utis y'a un fichier Provider.jsx j'ai utiliser l'attribut="class"
  theme: { },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
