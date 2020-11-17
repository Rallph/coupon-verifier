import express, { Application, Request, Response } from 'express';
import path from 'path';
import couponRouter from './routers/CouponRouter';

const app: Application = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/coupon', couponRouter);

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
});

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log('Server running') });