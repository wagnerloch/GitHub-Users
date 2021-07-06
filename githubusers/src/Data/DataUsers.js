const API_BASE = 'https://api.github.com';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

const getUsers = async (lastId) => {
    return await basicFetch(`/users?per_page=5&since=${lastId}`)       
}

const getUserInfo = async (username) => {
    return await basicFetch(`/users/${username}`)
}

const getPublicRepos = async (username) => {
    return await basicFetch(`/users/${username}/repos`)
}

const publicFunctions = {
    getUsers,
    getUserInfo,
    getPublicRepos
}

export default publicFunctions