import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type CouponValidatorState = {
    couponCode: string;
    valid: boolean | undefined;
}

class CouponValidator extends Component<{}, CouponValidatorState> {

    state: CouponValidatorState = {
        couponCode: "",
        valid: undefined
    };

    render() {

        return(
            <div>
                <Container>
                    <Form>
                        <Form.Row className="mx-auto">
                            <Col xs={{ span: 3, offset: 4 }}>
                                <Form.Control type="text" placeholder="Enter coupon code" onChange={(event) => { this.setState({ couponCode: event.currentTarget.value }) }}/>
                            </Col>
                            <Col xs={1}>
                                <Button variant="primary" type="submit">Validate</Button>
                            </Col>
                        </Form.Row>
                         
                    </Form>
                </Container>
            </div>
        );
    }

}

export default CouponValidator;