import config from "../config";
/**
 * Controller methods to invoke API calls
 * @param {*} userId
 * @param {*} password
 * @returns
 */
const login = async (userId, password) => {
  const data = {
    userId,
    password,
  };
  return fetch(`${config.api.baseUrl}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((data) => {
        throw data;
      });
    } else return response.json();
  });
};
export { login };
