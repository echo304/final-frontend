import axios from 'axios';

const URL = process.env.API_URL || 'http://localhost:3000';


export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${URL}/products`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the products!', error);
    }
}

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`${URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the product!', error);
    }
}

export const searchProducts = async (searchTerm, category) => {
    try {
        const response = await axios.get(`${URL}/products?name=${searchTerm}&category=${category}`);
        return response.data;
    } catch (error) {
        console.error('There was an error searching the products!', error);
    }
}