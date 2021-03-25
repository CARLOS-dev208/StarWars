import { getAxiosInstance } from "./axios-instance";

export type SWAAPIEndpoint =
  | "people"
  | "films"
  | "starships"
  | "spacies"
  | "planets";

export type ResourceReturn<T> = {
  getSchema: () => void;
  getById: (id: number) => Promise<T>;
};

export const genericController = <T>(
  endpoint: SWAAPIEndpoint
): ResourceReturn<T> => {
  const axios = getAxiosInstance();

  const getSchema = async () => {
    const res = await axios.get(`/${endpoint}/schema`);
    return res.data;
  };

  const getById = async (id: number): Promise<T> => {
    const res = await axios.get(`/${endpoint}/${id}`);
    return res.data;
  };

  return { getSchema, getById };
};
