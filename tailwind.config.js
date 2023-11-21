/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./daisyui/**/*.{html,js}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    primary: '#ffc708',
                    secondary: '#f1f1f1',
                    accent: '#ffc708',
                },
            },
        ],
    },
}
