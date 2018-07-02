/**
 * Definition of a Trinity payment.
 * @interface
 */
export interface ITrinityPayment {
    address: string;
    amount?: number;
    tag?: string;
    message?: string;
}
