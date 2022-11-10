import cors from 'cors';
import express, { Request, Response } from 'express';

import Http from '@/infra/http/http';

export default class ExpressAdapter implements Http {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(cors());
  }

  on(method: string, url: string, callback: (params: any, body: any) => Promise<any>): void {
    this.app[method](url, async (request: Request, response: Response) => {
      const output = await callback(request.params, request.body);
      response.json(output);
    });
  }

  listen(port: number): void {
    this.app.listen(port);
    console.log(`Server is running at http://localhost:${port}`);
  }
}
