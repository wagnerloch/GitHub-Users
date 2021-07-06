const API_BASE = 'https://api.github.com';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getUsers : async (lastId) => {
        return await basicFetch(`/users?per_page=5&since=${lastId}`)       
    },
    getUserInfo : async (username) => {
        return await basicFetch(`/users/${username}`)
    },
    getPublicRepos : async (username) => {
        return await basicFetch(`/users/${username}/repos`)
    }
}