import { Express, Request, Response } from "express";
import logger from './utils/logger'


function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
    app.get("/echo", (req: Request, res: Response) => {
        const method = req.method;
        const queryParams = req.query;
        const body = req.body;
        logger.info({ queryParams, body });
        res.send({ method, queryParams, body })
    });
    app.post("/echo", (req: Request, res: Response) => {
        const method = req.method;
        const queryParams = req.query;
        const body = req.body;
        logger.info({ queryParams, body });
        res.send({ method, queryParams, body })
    });
    app.put("/echo", (req: Request, res: Response) => {
        const method = req.method;
        const queryParams = req.query;
        const body = req.body;
        logger.info({ queryParams, body });
        res.send({ method, queryParams, body })
    });
    app.delete("/echo", (req: Request, res: Response) => {
        const method = req.method;
        const queryParams = req.query;
        const body = req.body;
        logger.info({ queryParams, body });
        res.send({ method, queryParams, body })
    });
}

export default routes;