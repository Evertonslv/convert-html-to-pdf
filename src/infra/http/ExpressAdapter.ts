import Http from "./Http";
import cors from 'cors';
import express, { Request, Response } from "express";

export default class ExpressAdapter implements Http {
    app: any;

    constructor () {
        this.app = express();
        this.app.use(express.json({limit: '50mb'}))
        this.app.use(cors());
    }

    on(method: string, url: string, callback: Function): void {
        this.app[method](url, async function (req: Request, res: Response) {
            const output = await callback(req.params, req.body);
            res.json(output);
        });
    }

    listen(port: number): void {
        this.app.listen(port);
        console.log(`Running in port ${port}`);
    }

}
