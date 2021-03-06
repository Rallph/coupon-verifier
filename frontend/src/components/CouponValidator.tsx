import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CouponValidationMessage from './CouponValidationMessage';

type CouponValidatorState = {
    couponCode: string;
    valid: boolean | undefined;
}

class CouponValidator extends Component<{}, CouponValidatorState> {

    state: CouponValidatorState = {
        couponCode: "",
        valid: undefined
    };

    validateCode = (couponCode: string) => {

        fetch(`/coupon/validate?code=${couponCode}`)
        .then(res => res.json())
        .then(validationResponse => this.setState(validationResponse))
        .catch(error => console.error);

    }

    render() {

        return(
            <div>
                <Container>
                    <Form onSubmit={(event: React.SyntheticEvent) => {
                        event.preventDefault();
                        const target = event.target as typeof event.target & {
                            code: { value: string}
                        };
                        const code = target.code.value;
                        this.validateCode(code);
                    }}>
                        <Form.Row>
                            <Col xs={{ span: 3, offset: 4 }}>
                                <Form.Control name="code" type="text" placeholder="Enter coupon code"/>
                            </Col>
                            <Col xs={1}>
                                <Button variant="primary" type="submit">Validate</Button>
                            </Col>
                        </Form.Row>
                    </Form>

                    <Row className="mt-3">
                        <Col>
                            <CouponValidationMessage couponCode={this.state.couponCode} valid={this.state.valid} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default CouponValidator;