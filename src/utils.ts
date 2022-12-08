export default class Utils {
    public static async get<T>(endpoint: string, clientId: string): Promise<T> {
        const url = `https://api.imgur.com/${endpoint}`;
        const req = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${clientId}`,
            },
        });

        if (req.status !== 200) {
            throw new Error(`Failed to create get() request. Error code: ${req.status}`);
        }
        const json = await req.json();
        return json as T;
    }

    public static async post<T>(endpoint: string, clientId: string, jsonValue?: any): Promise<T> {
        const url = `https://api.imgur.com/${endpoint}`;
        const req = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Client-ID ${clientId}`,
            },
            body: jsonValue,
        });

        if (req.status !== 200) {
            throw new Error(`Failed to create post() request. Error code: ${req.status}`);
        }
        const json = await req.json();
        return json as T;
    }

    public static async delete<T>(endpoint: string, clientId: string, jsonValue?: any): Promise<T> {
        const url = `https://api.imgur.com/${endpoint}`;
        const req = await fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: `Client-ID ${clientId}`,
            },
            body: jsonValue ?? null,
        });

        if (req.status !== 200) {
            throw new Error(`Failed to create get() request. Error code: ${req.status}`);
        }
        const json = await req.json();
        return json as T;
    }

    public static async put<T>(endpoint: string, clientId: string, jsonValue?: any): Promise<T> {
        const url = `https://api.imgur.com/${endpoint}`;
        const req = await fetch(url, {
            method: "PUT",
            headers: {
                Authorization: `Client-ID ${clientId}`,
            },
            body: jsonValue ?? null,
        });

        if (req.status !== 200) {
            throw new Error(`Failed to create get() request. Error code: ${req.status}`);
        }
        const json = await req.json();
        return json as T;
    }
}
