import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1//',
    headers: {
        'x-api-key': '885e6e08-df54-4276-818b-e18ce65087ed'
    }
})

export const catsAPI = {
    getCats(currentPage: number) {
        return instance.get(`images/search?limit=15&page=${currentPage}`)
    }
}


export type CatsType = {
    id: string
    url: string
    "breeds": [],
    "categories": [],
    isFavorite: boolean,
}