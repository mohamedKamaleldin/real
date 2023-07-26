/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "rgba(0, 0, 0, 0.5)",
        darkslategray: "#434343",
        slategray: "#576074",
        "gray-400": "#889099",
        "primary-800": "#1e2640",
        "gray-white": "#fff",
        whitesmoke: {
          "100": "#eaeaea",
          "200": "#e7e9eb",
        },
        gainsboro: "rgba(226, 226, 226, 0.1)",
        steelblue: "#404f7b",
        "primary-700": "#2c3a61",
        "primary-400": "#6e80b4",
        "gray-500": "#6d737a",
        "gray-black": "#1b1d1f",
        "primary-50": "#edeff6",
        "gray-700": "#363a3d",
        "primary-500": "#4a60a1",
        "primary-900": "#0f1320",
      },
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        "body-large-400": "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-5": "1.5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      "21xl": "40px",
      "xs-6": "11.6px",
      "2xs-8": "10.8px",
      "sm-6": "13.6px",
      "mini-5": "14.5px",
      "33xl": "52px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
