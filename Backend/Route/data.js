import { Router } from "express";

const router = new Router();

router.get('/', getData);
router.post('/', postData);


export default router;