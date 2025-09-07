/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        keyframes: {
            slideDown: {
                '0%': { transform: 'translateY(-100%)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
            },
        },
        animation: {
            slideDown: 'slideDown 0.3s ease-out',
        },
    },
};
export const plugins = [];