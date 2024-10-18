/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary:"#59A8D4",
                secondary:"#ffe1d6",
                tertiary: "#3D3D3D",
                fourth:"#f3f4f6",
                basicWhite:'#ffffff',
                basicText:'#1C1C1C66',
                basicRed:'#FF4560'
            },
            animation: {
				fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
        },
    },
    plugins: [],
});
