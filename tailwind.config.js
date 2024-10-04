/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}", // scanne les fichiers dans le dossier pages
		"./components/**/*.{js,ts,jsx,tsx}", // scanne les fichiers dans le dossier components
		"./app/**/*.{js,ts,jsx,tsx}", // scanne les fichiers dans le dossier app (si vous utilisez la nouvelle structure de dossier)
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
