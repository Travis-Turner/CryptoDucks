export const BASE_URL = 'https://api.nomoreparties.co';

export const register = (username, password, email, history) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password, email})
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    history.push('/login')
    return res;
  })
  .catch((err) => console.log(err))
};
export const authorize = (identifier, password) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({identifier, password})
  })
  .then((response => response.json()))
  .then(res => res)
  .catch(err => console.log(err))
};
export const authFormSubmit = (email, password) => {
  authorize(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.jwt);
        const userData = {
          email: data.user.email,
          username: data.user.username
        }
        localStorage.setItem('userData', JSON.stringify(userData));
      });
      return new Promise((resolve, reject) => {
        resolve();
      })
};

