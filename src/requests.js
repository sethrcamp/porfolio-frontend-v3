import axios from 'axios';

import {API_BASE_URL} from './conf/conf';

export default class Request {

    static getAllProjects(callback) {
        axios.get(API_BASE_URL+"projects/visible/").then(callback);
    }

    static sendMessage(data) {
        return axios.post(API_BASE_URL+"messages", data);
    }

}