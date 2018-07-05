import { ITrinityPayment } from "../models/ITrinityPayment";
/**
 * Class to helper render data for trinity as QR.
 */
export declare class TrinityPaymentQR {
    /**
     * Create the QR code data for trinity payment data.
     * @param address The address trytes.
     * @param amountIota The amount for the transaction.
     * @param tagTrytes The tag for the transaction in trytes.
     * @param message The message for the transaction in plain text.
     * @returns The data for the trinity payment.
     */
    static generatePaymentData(address: string, amountIota?: number, tagTrytes?: string, message?: string): ITrinityPayment;
    /**
     * Convert trinity payment data into a QR code raw data.
     * @param paymentData The payment data to convert.
     * @param rendererType The type of render to use.
     * @param qrTypeNumber The type number for qr code, controls the amount of data the QR can store.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static renderRaw(paymentData: ITrinityPayment, rendererType: string, qrTypeNumber?: number, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<string | Uint8Array>;
    /**
     * Convert trinity payment data into a QR code html element.
     * @param paymentData The payment data to convert.
     * @param rendererType The type of render to use.
     * @param qrTypeNumber The type number for qr code, controls the amount of data the QR can store.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static renderHtml(paymentData: ITrinityPayment, rendererType: string, qrTypeNumber?: number, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<Element>;
}
