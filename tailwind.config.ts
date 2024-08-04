import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {},
  plugins: [flowbite.plugin()],
};
export default config;