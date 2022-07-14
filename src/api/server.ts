let token = 'keygoeshere';

export const serverCalls = {
    get: async () => {
        const response = await fetch(`#`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async (data:any = {}) => {
        const response = await fetch(`#`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create data from server')
        }

        return await response.json()
    },
    update: async (id:string,data:any = {}) => {
        const response = await fetch(`#`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`#`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if (!response.ok){
            throw new Error('Failed to delete data from server')
        }

        return await response.json()
    }
}