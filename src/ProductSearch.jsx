import React, { useState } from 'react';
import axios from 'axios';
import { searchProducts } from './apis/product';

const ProductSearch = ({ setProducts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = async () => {
        try {
            const response = await searchProducts(searchTerm, category);

            setProducts(response);
        } catch (error) {
            console.error('There was an error searching the products!', error);
        }
    };

    return (
        <div className="container mx-auto p-4 mb-4">
            <div className="flex space-x-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name"
                    className="border rounded-lg p-2 flex-1"
                />
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Search by category"
                    className="border rounded-lg p-2 flex-1"
                />
                <button onClick={handleSearch} className="bg-blue-500 text-white rounded-lg p-2">
                    Search
                </button>
            </div>
        </div>
    );
};

export default ProductSearch;
