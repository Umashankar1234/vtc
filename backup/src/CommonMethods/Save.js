import axios from "axios";
const headers = {
    "Content-type": "application/json",
};
export const postRecord = (url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, {
                headers
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
    });
};
export const putRecord = (url, id, data) => {
    return new Promise((resolve, reject) => {
        axios
            .put(url + id, data, {
                headers
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
    });
};
export const deleteRecord = (url, id) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(url + id, {
                headers
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
    });
};
export const loginCheck = (url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, {
                headers: headers
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
    });
};
export const fetchCustomRecord = (url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, {
                headers: headers
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => reject(err));
    });
};
