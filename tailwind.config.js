module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				light: "#252c39",
				dark: "#171a22",
				gray: "#808080",
				white: "#e0e5eb",
			},
			padding: {
				"1/10": "10%",
				"1/5": "20%",
			},
		},
		screens: {
			xxs: "300px",
			xs: "500px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1900px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
