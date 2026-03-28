import axios from "axios";

const API = "http://localhost:8080/api/players";

export const getPlayers = () => axios.get(API);
export const addPlayer = (player) => axios.post(API, player);
export const getPlayer = (id) => axios.get(`${API}/${id}`);
export const updatePlayer = (id, player) => axios.put(`${API}/${id}`, player);
export const deletePlayer = (id) => axios.delete(`${API}/${id}`);