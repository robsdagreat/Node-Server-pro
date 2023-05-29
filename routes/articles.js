import express from "express"
import bodyParser from "body-parser";
import {createArticle, readArticle, updateArticle,readArticlelimit, deleteArticle} from '../controllers/articles.js'
import {createNames, updateNames, deleteNames} from '../controllers/names.js'

const body= bodyParser;
const router = express.Router();
router.use(body.json())


router.post("/create", createArticle);
router.get("/read/:reqId", readArticle);
router.get("/limit", readArticlelimit)
router.put("/update/:articleId", updateArticle)
router.delete("/delete/:articleId", deleteArticle)




// router.put("/update:id", updateArticle)



router.post("/names", createNames);
router.put("/names/update", updateNames);
router.delete("/names/delete", deleteNames);

export default router;



