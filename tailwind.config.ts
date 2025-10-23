import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#f5f5f7',
        primary: '#0071e3',
        midnight: '#0a0a0a'
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'PingFang SC',
          'Hiragino Sans GB',
          'Noto Sans CJK SC',
          'Source Han Sans SC',
          'Microsoft YaHei',
          'sans-serif'
        ]
      },
      backgroundImage: {
        'radial-spot': 'radial-gradient(80% 60% at 50% 20%, rgba(0,113,227,0.16) 0%, rgba(0,0,0,0) 60%)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      }
    }
  },
  darkMode: 'class'
} satisfies Config;
