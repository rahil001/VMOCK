import axios from 'axios';

export const FETCH_USER = "FETCH_USER";

export function fetchUsers(data) {
    const url = `https://api.github.com/search/users?q=${data}`;
    const request = axios.get(url);
    return {
        type: FETCH_USER,
        payload: request

    }
}