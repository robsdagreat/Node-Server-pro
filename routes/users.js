import express from 'express'
import bodyParser from "body-parser";
import {signIn,signUp} from "../controllers/user.js";



const router = express.Router();

router.use(bodyParser.json());

// router.get('/read/:useId', readUser);

router.post('/create', signUp);
router.get('/log', signIn);



export default router;