import axios from "axios";
import swal from "sweetalert";



export function getAllProducts() {
  return async function (dispatch) {
    try {
      var json = await axios.get(process.env.REACT_APP_URL_API+"/products");
      console.log(json.data);
      return dispatch({
        type: "GET_PRODUCTS",
        payload: json.data,
      });
    } catch (error) {
      console.log(process.env.REACT_APP_URL_API);
    }
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        process.env.REACT_APP_URL_API+`/products/byName?name=${name}`
      );

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
    var json = await axios.post(
      process.env.REACT_APP_URL_API+"/products/create",
      payload
    );
    console.log(payload);
    return json;
  };
}

export function productById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(process.env.REACT_APP_URL_API+`/products/byId/${id}`);
      console.log(json.data);
      return dispatch({
        type: "GET_PRODUCTS_BY_ID",
        payload: json.data,
      });
    } catch (error) {}
  };
}

export const removeDetail = () => {
  return {
    type: "REMOVE_DETAIL",
  };
};

export function updateProducts(id, payload) {
  return async function () {
    var json = await axios.put(
     process.env.REACT_APP_URL_API+ `/products/update/${id}`,
      payload
    );
    console.log(payload);
    return json;
  };
}

export function getProductsByBrand(brand) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
      process.env.REACT_APP_URL_API+ `/products/byBrand?brand=${brand}`
      );
      console.log(json.data);
      return dispatch({
        type: "GET_PRODUCTS_BY_BRAND",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByBrand(payload) {
  return {
    type: "FILTER_BY_BRAND",
    payload,
  };
}

export const pagesControl = (number) => {
  return {
    type: "CURRENT_PAGES",
    payload: number,
  };
};
export function removeFilters() {
  return {
    type: "REMOVE_FILTERS",
  };
}

/* export async function cloudinaryImage(base64EncodedImage){
  console.log(base64EncodedImage)
  try {
    return async (dispatch) => {

      const res = await axios.post('http://localhost:3001/cloudinary/api/upload', { data: base64EncodedImage})

      console.log(res, "Esto es res23 156+4156+46+46+e5n el")

      localStorage.setItem("profileImage", res.data.url)
      window.location.reload('http://localhost:3000/');

      return dispatch({
        type: 'CLOUDINARY_IMAGE',
        payload: base64EncodedImage,
      })
}
  } catch (err) {
      console.error(err);
  }
}; */