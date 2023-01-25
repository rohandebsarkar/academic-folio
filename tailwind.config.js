/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./content/**/*.{md,html}', './layouts/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--global-text-color)',
                secondary: 'var(--global-text-color-light)',
                background: 'var(--global-bg-color)',
                theme: 'var(--global-theme-color)',
            },
        },
    },
};
