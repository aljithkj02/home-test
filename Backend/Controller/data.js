import Data from '../Model/data.js';
export const getData = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send({
            status: false,
            message: err.message
        })
    }
}


export const postData = async (req, res) => {
    try {
        const result = await Data.create(req.body);
        return res.status(200).send({ status: true, message: 'Data stored successfully' });
    } catch (err) {
        res.status(500).send({
            status: false,
            message: err.message
        })
    }
}