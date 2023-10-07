export const host = import.meta.env.VITE_NODE_ENV === "development" ? "http://localhost:3001" : import.meta.env.VITE_GLOBAL_URL;
export const base = import.meta.env.VITE_NODE_ENV === "development" ? "http://localhost:3001/images" : `${import.meta.env.VITE_GLOBAL_URL}/images`;
