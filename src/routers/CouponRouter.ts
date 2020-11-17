import { Router, Request, Response } from 'express';
import ValidationResponse from '../interfaces/ValidationResponse';

const couponRouter: Router = Router();

couponRouter.get('/validate', (req: Request, res: Response) => {

    let couponCode = "";

    if (typeof req.query.code === 'string') {
        couponCode = req.query.code;
    }

    let validationResponse: ValidationResponse = {
        couponCode: couponCode,
        valid: false
    };

    if (couponCode.length % 2 == 0 && couponCode.length != 0) {
        validationResponse.valid = true;
    }

    res.json(validationResponse);
    console.log(`Coupon code submitted. Code: ${couponCode}. Length of code: ${couponCode.length}. Valid: ${validationResponse.valid}`);
});

export default couponRouter;