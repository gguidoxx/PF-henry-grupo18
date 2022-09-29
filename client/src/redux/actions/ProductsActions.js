import axios from "axios";
import swal from "sweetalert";

export function getAllProducts() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/products");
      return dispatch({
        type: "GET_PRODUCTS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/products/byName?name=${name}`
      );
      console.log(json.data);
      if (!json.data.length) {
        swal("Error: no se encontró el producto.", {
          icon: "error",
          buttons: "Cerrar",
        });
      } else {
        return dispatch({
          type: "GET_PRODUCTS_BY_NAME",
          payload: json.data, 
        });
      }
    } catch (error) {}
  };
}

export function postProducts(payload) {
  return async function () {
    var json = await axios.post(`http://localhost:3001/products/create`, payload);
    console.log(payload);
    return json;
  };
}

export function productById(id){
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/products/byId/${id}`
      );
        return dispatch({
          type: "GET_PRODUCTS_BY_ID",
          payload: json.data, 
        });
    } catch (error) {}
  };
}

export const removeDetail = () => {
  return {
      type: 'REMOVE_DETAIL'
  }
}

export function updateProducts(id,payload) {
  return async function () {
    var json = await axios.put(`http://localhost:3001/products/update/${id}`, payload);
    console.log(payload);
    return json;
  };
}