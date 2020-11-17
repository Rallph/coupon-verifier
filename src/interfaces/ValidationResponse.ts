/**
 * The response sent by the /validate endpoint when a coupon code is submitted
 */
interface ValidationResponse {
    couponCode: string,
    valid: boolean
}

export default ValidationResponse;