/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8ff',
          100: '#e6f1ff',
          200: '#cfe4ff',
          300: '#a9d0ff',
          400: '#7bb7ff',
          500: '#4d9dff',
          600: '#2f83f3',
          700: '#2467c2',
          800: '#1c4f93',
          900: '#163f75'
        }
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'ui-sans-serif',
          'system-ui',
          'Apple SD Gothic Neo',
          'Segoe UI',
          'Roboto',
          'Noto Sans KR',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}


