import express, { Application, Request, Response } from 'express';
import couponRouter from './routers/CouponRouter';

const app: Application = express();

app.use('/coupon', couponRouter);

app.listen(5000, () => { console.log('Server running') });