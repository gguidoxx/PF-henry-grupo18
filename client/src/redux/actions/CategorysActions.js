import axios from "axios";




export function getAllCategorys() {
  return async function (dispatch) {
    try {
      var json = await axios.get(process.env.REACT_APP_URL_API+`/category`);
      return dispatch({
        type: "GET_CATEGORYS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function putCategory(id, payload) {
  return async function () {
    var json = await axios.put(
      process.env.REACT_APP_URL_API+`/category/update/${id}`,
      payload
    );
    return json;
  };
}

export function createCategory(payload) {
  return async function () {
    var json = await axios.post(
      process.env.REACT_APP_URL_API+"/category/create",
      payload
    );
    return json;
  };
}

export function filterByCategory(payload){
  return {
    type: 'FILTER_BY_CATEGORY',
    payload
  }
}
