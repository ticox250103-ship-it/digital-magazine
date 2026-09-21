/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f2ff',
                    100: '#b3d7fb',
                    200: '#ed772e', // Orange (highlights/selection)
                    300: '#ed772e', // Orange (gradients)
                    400: '#ed772e', // Orange (hover states)
                    500: '#007bf2', // Bright blue (buttons, primary UI)
                    600: '#007bf2', // Bright blue
                    700: '#0062c2',
                    800: '#153172', // Navy 
                    900: '#153172', // Navy (selection text)
                },
                dark: {
                    DEFAULT: '#1e3653', // Dark Slate
                    paper: '#1d3644',   // Dark Teal
                    border: '#153172'   // Deep Navy
                },
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#153172', // Navy (body text)
                    900: '#1e3653', // Dark Slate (headings)
                }
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'subtle-float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
