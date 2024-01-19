const url = 'http://127.0.0.1:3000/api/user'

export const listUser = async (queryParams) => {
    try {
        const queryString = new URLSearchParams(queryParams).toString();
        const urlWithParams = `${url}?${queryString}`;
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzA1NjM2NDA2LCJleHAiOjE3MDU3MjI4MDZ9.oOJCGa8ujYqUeqoEKjyR0dSmPbSknQxrzdSUJVaePjI'

        const response = await fetch(urlWithParams, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user list');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching user list:', error);
        throw error;
    }
};

export const detailUser = async (userId) => {
    try {
        
        const response = await fetch(`${url + '/' + userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user list');
        }

        const data = await response.json();

        return data;
        
    } catch (error) {
        console.error('Error fetching user list:', error);
        throw error;
    }
}