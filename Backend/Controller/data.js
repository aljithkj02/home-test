import Data from '../Model/data.js';
export const getData = async (req, res) => {
    try {
        const allData = await Data.find({});
        res.status(200).json({
            status: true,
            message: 'Data fetched successfully',
            data: allData
        })
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