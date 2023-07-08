// Save user data to session storage
export const saveUserDataToSession = (userData) => {
  const serializedData = JSON.stringify(userData);
  sessionStorage.setItem("userData", serializedData);
};

// Retrieve user data from session storage
export const getUserDataFromSession = () => {
  const serializedData = sessionStorage.getItem("userData");
  if (serializedData) {
    return JSON.parse(serializedData);
  }
  return null;
};
