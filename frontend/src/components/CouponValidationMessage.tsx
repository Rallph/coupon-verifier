import React, { Component } from 'react';

type CouponValidationMessageProps = {
    couponCode: string;
    valid: boolean | undefined;
}

class CouponValidationMessage extends Component<CouponValidationMessageProps, {}> {

    render() {

        let message = '';
        let colorClass = '';

        if (this.props.valid === undefined) {
            message = 'Enter a coupon code to validate'
        } else {
            message = (this.props.valid ? `The code ${this.props.couponCode} is valid!` : `The code ${this.props.couponCode} is not valid!`);
            colorClass = (this.props.valid ? 'text-success' : 'text-danger');
        }

        return(
            <h5 className={colorClass}>{message}</h5>
        );
    }


}

export default CouponValidationMessage;