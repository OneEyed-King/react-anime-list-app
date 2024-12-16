const BASE_URL = "https://api.jikan.moe/v4"

export const fetchRandomAnime = async() =>{
    try {
        const response = await fetch(`${BASE_URL}/top/anime`)
        const data = await response.json();
        return data.data;
    } catch(err) {
        console.log(err);
    }

}

export const fetchSearchedAnime = async(keyword) =>{
    try {
        const response = await fetch(`${BASE_URL}/anime?q=${keyword}`)
        const data = await response.json();
        return data.data;
    } catch(err) {
        console.log(err);
    }

}