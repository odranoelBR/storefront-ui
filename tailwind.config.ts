import type { Config } from "tailwindcss";

export default <Config>{
  content: ["./**/*.vue", "node_modules/@storefront-ui/vue/**/*.{js,mjs}"],
  css: ["~/assets/css/tailwind.css"],

  theme: {
    extend: {
      screens: {
        xxl: "1440px",
        xs: "376px",
      },
      zIndex: {
        60: "60",
        80: "60",
        100: "100",
      },
    },
  },
};
