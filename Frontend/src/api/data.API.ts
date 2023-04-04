import axios from 'axios';
import config from '../config';
import { HomeData, ReturnedObj } from '../types';


export const postData = async (data: HomeData) => {
    try {
        const res = await axios.post(`${config.API_URL}/api/data`, data);
        return res.data;
    } catch (err) {
        return err;
    }
}