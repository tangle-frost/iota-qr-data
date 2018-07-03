import { ITrinityPayment } from "../models/ITrinityPayment";
/**
 * Class to helper render data for trinity as QR.
 */
export declare class Trinity {
    /**
     * Create the QR code data for trinity.
     * @param address The address trytes.
     * @param amount The amount for the transaction.
     * @param tag The tag for the transaction in trytes.
     * @param message The message for the transaction in trytes.
     * @returns The data for the trinity payment.
     */
    static paymentData(address: string, amount?: number, tag?: string, message?: string): ITrinityPayment;
    /**
     * Convert trinity payment data into a QR code.
     * @param paymentData The payment data to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static paymentQR(paymentData: ITrinityPayment, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<string | Uint8Array>;
    /**
     * Convert address data into a QR code.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static addressQR(address: string, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<string | Uint8Array>;
}
