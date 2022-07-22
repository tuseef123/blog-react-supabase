// const { red } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        //Form styles
        osm: "640px",
        omd: "768px",
        'omd-1': { 'max': '767px' },
        olg: "1024px",
        oxl: "1280px",
        oxl1: "1300px",
        oxl2: "1440px",
        o2xl: "1536px",
      },
      colors: {
        //blue
        blue: {
          1: "#0B5FFF",
          2: "#0F69F6",
          3: "#E1EEF9",
          4: "#204ECF",
          7: "#E1EEF9",
          hover: "#4C8BFF",
        },

        // Alert
        alert: {
          success: {
            DEFAULT: '#f6ffed',
            fill: '#5cad1f',
            border: '#b7eb8f'
          },
          info: {
            DEFAULT: '#e6f7ff',
            fill: '#007ecc',
            border: '#91d5ff'
          },
          warning: {
            DEFAULT: '#fffbe6',
            fill: '#cc9c00',
            border: '#ffe58f'
          },
          error: {
            DEFAULT: '#fff2f0',
            fill: '#cc1100',
            border: '#ffccc7',
            hover: '#b20000'
          }
        },

        // White
        white: {
          1: "#fff",
          2: "#F6F8FA;",
          3: "#d9d9d9",
        },
        // grey
        grey: {
          1: "#666666",
          2: "#EFEFEF",
        },
        // red
        red: {
          1: "red",
        }
 
      },
      boxShadow: {
        //Form styles      
        "header": "0px 0px 0px 1px rgba(38, 47, 54, 0.08), 0px 2px 3px rgba(38, 47, 54, 0.1)",
        "companies": "11.0966px 19.9739px 24.7824px rgba(209, 217, 230, 0.67), 11.0966px 8.87728px 12.5761px rgba(209, 217, 230, 0.34), 11.0966px 10.3568px 14.0557px rgba(209, 217, 230, 0.4), 11.0966px 12.946px 16.6449px rgba(209, 217, 230, 0.48), -7.39773px -10.5116px 11.1582px rgba(255, 255, 255, 0.375)",
        "clientHeaderMenu" : "0px 5px 15px 0px rgba(0, 0, 0, 0.2)",

      },
    },
  },
  plugins: [],
}
