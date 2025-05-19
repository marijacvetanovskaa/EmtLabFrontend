import axiosInstance from "../axios/axios.js";

const authorRepository = {
    findAll: async () => {
        return await axiosInstance.get("/authors");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/authors/${id}`);
    },
    create: async (author) => {
        return await axiosInstance.post("/authors/add", author)
    },
    edit: async (id, author) => {
        return await axiosInstance.put(`/authors/edit/${id}`, author)
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/authors/delete/${id}`);
    },
    getAuthorNames: async () => {
        return await axiosInstance.get("/authors/names")
    },
    getAuthorsByCountry: async () => {
        return await axiosInstance.get("/authors/by-country")
    }

};

export default authorRepository;
