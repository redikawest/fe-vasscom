const url = 'http://127.0.0.1:3000/api/product'

export const listProduct = async (accessToken, queryParams) => {
    try {
        const queryString = new URLSearchParams(queryParams).toString();
        const urlWithParams = `${url}?${queryString}`;

        const response = await fetch(urlWithParams, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product list');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching product list:', error);
        throw error;
    }
};

export const detailProduct = async (productId) => {
    try {
        
        const response = await fetch(`${url + '/' + productId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product list');
        }

        const data = await response.json();

        return data;
        
    } catch (error) {
        console.error('Error fetching product list:', error);
        throw error;
    }
}