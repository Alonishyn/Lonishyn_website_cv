{import('tailwindcss').Config}
export default {
  darkMode: 'class', // Включаем переключение тем через класс
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}