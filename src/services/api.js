import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-3f1b.onrender.com",
})
