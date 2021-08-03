import config from "../config";
/**
 * Controller methods to invoke API calls
 * @param {*} userId
 * @param {*} password
 * @returns
 */
const getAssets = async () => {
  return fetch(`${config.api.baseUrl}/device`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.json());
    }
    return response.json().then((res) => res.data);
  });
};
export { getAssets };
