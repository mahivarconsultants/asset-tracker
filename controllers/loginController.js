import config from "../config";
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
