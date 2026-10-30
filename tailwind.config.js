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
        cero: {
          dark: '#0B0F19',
          darker: '#070A12',
          card: 'rgba(17, 24, 39, 0.75)',
          border: 'rgba(255, 255, 255, 0.1)',
          cyan: '#00F2FE',
          blue: '#4FACFE',
          purple: '#8B5CF6',
          emerald: '#10B981',
          rose: '#F43F5E',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 242, 254, 0.35)',
        'glow-blue': '0 0 25px rgba(79, 172, 254, 0.35)',
        'glow-purple': '0 0 25px rgba(139, 92, 246, 0.35)',
        'glow-red': '0 0 30px rgba(244, 63, 94, 0.45)',
        'glow-emerald': '0 0 25px rgba(16, 185, 129, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

