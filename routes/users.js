import express from 'express'
import bodyParser from "body-parser";
import { readUser, createUser, updateUser } from "../controllers/user.js";
import UserModel from '../models/usersmodel.js'

const router = express.Router();

router.use(bodyParser.json());

router.get('/read', readUser);

router.post('/create', createUser);

router.put('/update:id', updateUser);

export default router;