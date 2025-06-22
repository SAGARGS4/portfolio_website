/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}", // Only if using App Router
		"./styles/**/*.css",
	],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
