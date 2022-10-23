import Axios from 'axios';

const API = Axios.create({
  baseURL: 'https://valorant-api.com/v1/',
});

export const getAgents = async () => {
  try {
    const { data } = await API.get('agents');
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAgentsById = async (id) => {
  try {
    const { data } = await API.get(`agents/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getWeapons = async () => {
  try {
    const { data } = await API.get('weapons');
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getWeaponsbyId = async (id) => {
  try {
    const { data } = await API.get(`weapons/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getWeaponsSkinById = async (id) => {
  try {
    const { data } = await API.get(`weapons/skins/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMaps = async () => {
  try {
    const { data } = await API.get('maps');
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMapsBydId = async (id) => {
  try {
    const { data } = await API.get(`maps/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSprays = async () => {
  try {
    const { data } = await API.get('sprays');
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSpraysById = async (id) => {
  try {
    const { data } = await API.get(`sprays/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCards = async () => {
  try {
    const { data } = await API.get('playercards');
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCardsById = async (id) => {
  try {
    const { data } = await API.get(`playercards/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTitles = async () => {
  try {
    const { data } = await API.get('playertitles');
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTitlesById = async (id) => {
  try {
    const { data } = await API.get(`playertitles/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};
