import {Router} from "express";
import Options from "../controller/options.js";
import AnswersController from "../controller/answers-controller.js";
import sql from "../db.js";

const router = new Router()

router.post('/stepik', AnswersController.addAnswer)
router.get('/stepik', AnswersController.getAnswer)
router.options('/stepik', Options.options)
router.get('/aye', async (req, res) => {
    await sql`create table stepik_solves
        (
            id      serial
                constraint stepik_solves_pk
                    primary key,
            answer  text not null,
            step_id integer,
            user_id integer,
            constraint stepik_solves_pk_2
                unique (answer, step_id, user_id)
        );`
    res.sendStatus(200)
})
export default router