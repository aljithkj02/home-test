import { Router } from "express";
import { getData, postData } from "../Controller/data.js";

const router = new Router();

router.get('/', getData);
router.post('/', postData);


export default router;