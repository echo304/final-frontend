import axios from 'axios';

export const getAllProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/products');
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the products!', error);
    }
}

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the product!', error);
    }
}

export const searchProducts = async (searchTerm, category) => {
    try {
        const response = await axios.get(`http://localhost:3000/products?name=${searchTerm}&category=${category}`);
        return response.data;
    } catch (error) {
        console.error('There was an error searching the products!', error);
    }
}