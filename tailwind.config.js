/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d8ecff',
          200: '#b9deff',
          300: '#89c9ff',
          400: '#52abff',
          500: '#2a88ff',
          600: '#1468f5',
          700: '#0d52e1',
          800: '#1143b6',
          900: '#143c8f',
          950: '#112657',
        },
        accent: {
          50: '#edfff7',
          100: '#d5ffee',
          200: '#aeffdd',
          300: '#70ffc4',
          400: '#2bfda3',
          500: '#00e688',
          600: '#00bf6d',
          700: '#009559',
          800: '#067548',
          900: '#07603d',
          950: '#003721',
        },
        dark: {
          50: '#f6f6f9',
          100: '#ececf2',
          200: '#d4d5e3',
          300: '#afb0cb',
          400: '#8486ae',
          500: '#656895',
          600: '#50527b',
          700: '#424464',
          800: '#393b54',
          900: '#1e1f35',
          950: '#0f1021',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(42, 136, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(42, 136, 255, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
