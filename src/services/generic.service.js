import axios from "axios";

const API_URL = 'http://localhost:57770/api/v1'

export const request = async  ({url,method,data = {}}) =>{
    const response = await  axios[method](`${API_URL}/${url}`, data)
    return response.data
}
