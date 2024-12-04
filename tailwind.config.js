/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			primary : "#081131",
			lightDark : "#7b8bb2",
			sky : "#4083ff",
		},
		fontFamily : {
			QuickSand : ['Quicksand','sans-serif']
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
