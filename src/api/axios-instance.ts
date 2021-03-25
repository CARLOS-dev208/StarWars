import axios, { AxiosInstance } from "axios";

const baseURL = "https://swapi.dev/api";

export const getAxiosInstance = (): AxiosInstance => {
  let axiosInstance = axios.create({ baseURL: baseURL });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;

      if (status > 399) {
        console.info("Erro na api. Status:", status);
      }
    }
  );
  return axiosInstance;
};
