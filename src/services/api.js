const BASE_URL = import.meta.env.VITE_API_URL

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`)
  return res.json()
}

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`)
  return res.json()
}

export const getProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects`)
  return res.json()
}
