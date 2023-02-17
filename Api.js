import axios from "axios";

export async function registers(username, password) {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    const response = await axios
      .post(
        "https://fakestoreapi.com/users",
        JSON.stringify({ email, username, password }),
        requestOptions
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        throw error;
      });
    return response;
  }
  
  export async function login(email, password) {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    const response = await axios
      .post(
        "https://fakestoreapi.com/auth/login",
        JSON.stringify({ email: email, password: password }),
        requestOptions
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        throw error;
      });
    return response;
    }

    export async function getAllProducts() {
    const requestOptions = {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
       // Authorization: "Bearer " + localStorage.getItem("username, password"),
      },
    };
    return axios.get("https://fakestoreapi.com/products", requestOptions);
}

export async function getProduct(id) {
    const requestOptions = {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios.get(
      `https://fakestoreapi.com/products/${id}`,
      requestOptions
    );
  }