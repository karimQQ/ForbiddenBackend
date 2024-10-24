import {Router} from "express";
import Options from "../controller/options.js";
import AnswersController from "../controller/answers-controller.js";

const router = new Router()

router.post('/stepik', AnswersController.addAnswer)
router.get('/stepik', AnswersController.getAnswer)
router.options('/stepik', Options.options)
export default router