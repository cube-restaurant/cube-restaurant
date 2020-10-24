import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_: Request, res: Response) => {
  res.json({
    message: 'Welcome to Cube Restaurant API!',
  });
});

export default app;
