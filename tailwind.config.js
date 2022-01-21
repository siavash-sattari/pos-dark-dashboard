module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif']
      },
      colors: {
        gray: {
          100: '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          900: '#1F1D2B',
          800: '#252836'
        },
        primary: '#EB966A',
        accent: {
          blue: '#65B0F6',
          orange: '#FFB572',
          red: '#FF7CA3',
          green: '#50D1AA',
          purple: '#9290FE'
        }
      },
      boxShadow: {
        primary: '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top': '4px 4px 0 #252836',
        'inverse-bottom': '4px -4px 0 #252836'
      }
    }
  },
  plugins: []
};
