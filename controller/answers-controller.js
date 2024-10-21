import sql from "../db.js";

class AnswersController {
    async addAnswer(req, res) {
        res.header("Access-Control-Allow-Origin", req.headers['origin'])
        if (!req.body) {
            return res.sendStatus(400);
        }
        try {
            console.log(req.body)
            await sql`INSERT INTO public.stepik_solves (answer, step_id, user_id)
                      VALUES (${JSON.stringify(req.body['reply'])}, ${req.body['step']}, ${req.body['user']})`
            res.status(200).json(["Success"])
        } catch (e) {
            if (e.code === '23505'){
                res.status(200).json(["answer already exist"])
            } else {
                console.log(e)
                res.sendStatus(400)
            }
        }
    }

    async getAnswer(req, res) {
        res.header("Access-Control-Allow-Origin", req.headers['origin'])
        const step = req.query['step'];
        console.log(step)
        if (step === undefined) {
            res.sendStatus(400)
            return
        }
        res.status(200).json(await sql`SELECT answer
                                       FROM public.stepik_solves
                                       WHERE step_id = ${step}`)
    }
}

export default new AnswersController()