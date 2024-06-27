/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens:{
			'mobile':'420px',
			'sm':'640px',
			'md':'768px',
			'lg':'1024px',
			'xl':'1280px',
			'2xl':'1536px'
		},
		colors:{
			'green/60':'#CAFF33',
			'gray/11':'#1c1c1c',
			'gray/10':'#191919',
			'gray/15':'#262626',
			'gray/70':'#b3b3b3',
		},
		extend: {},
	},
	plugins: [],
}
