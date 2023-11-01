import axios from 'axios';
const SERVER_URL = 'http://localhost:8000';

export const uploadFile = async (file) => {
  try {
   const response = await axios.post(`${SERVER_URL}/upload`, file);
   return response.data; 
  } catch(error){
    console.log(error.message);
  } 
};