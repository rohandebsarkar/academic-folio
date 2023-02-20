/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./content/**/*.{md,html}', './themes/**/layouts/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--global-text-color-primary)',
                secondary: 'var(--global-text-color-shade)',
                background: 'var(--global-bg-color)',
                theme: 'var(--global-theme-color)',
                header: 'var(--global-header-color)',
                footer: 'var(--global-footer-color)',
                divider: 'var(--global-divider-color)',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        h2: {
                            'margin-top': '0',
                        },
                        h5: {
                            'font-weight': '500',
                        },
                        'ul li input': {
                            margin: '0',
                        },
                        'h1, h2, h3, h4, h5, h6, sup, .footnotes ol li': {
                            'scroll-margin-top': '5rem',
                        },
                        code: {
                            'font-size': '1rem',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                        'max-width': 'none',
                        '--tw-prose-body': theme('colors.primary'),
                        '--tw-prose-headings': theme('colors.primary'),
                        '--tw-prose-lead': theme('colors.primary'),
                        '--tw-prose-links': theme('colors.primary'),
                        '--tw-prose-bold': theme('colors.primary'),
                        '--tw-prose-counters': theme('colors.primary'),
                        '--tw-prose-bullets': theme('colors.primary'),
                        '--tw-prose-hr': theme('colors.secondary'),
                        '--tw-prose-quotes': theme('colors.primary'),
                        '--tw-prose-quote-borders': theme('colors.primary'),
                        '--tw-prose-captions': theme('colors.primary'),
                        '--tw-prose-code': theme('colors.theme'),
                        '--tw-prose-pre-code': theme('colors.theme'),
                        '--tw-prose-pre-bg': theme('colors.background'),
                        '--tw-prose-th-borders': theme('colors.secondary'),
                        '--tw-prose-td-borders': theme('colors.secondary'),
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography')({
            className: 'markdown',
        }),
    ],
};
