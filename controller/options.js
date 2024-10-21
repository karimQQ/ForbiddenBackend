class Options {
    async options(req, res){
        res.header("Access-Control-Allow-Methods", "POST")
        res.header("Access-Control-Allow-Headers", "Content-type")
        res.header("Access-Control-Allow-Origin", req.headers['origin'])
        res.status(200).json(["ok"])
    }
}

export default new Options()