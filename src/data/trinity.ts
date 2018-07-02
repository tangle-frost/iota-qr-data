import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { ObjectHelper } from "@tangle-frost/iota-core/dist/helpers/objectHelper";
import { TrytesHelper } from "@tangle-frost/iota-core/dist/helpers/trytesHelper";
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import { QRRendererFactory } from "@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory";
import { ITrinityPayment } from "../models/ITrinityPayment";

/**
 * Class to helper render data for trinity as QR.
 */
export class Trinity {
    /**
     * Create the QR code data for trinity.
     * @param address The address trytes.
     * @param amount The amount for the transaction.
     * @param tag The tag for the transaction in trytes.
     * @param message The message for the transaction in trytes.
     * @returns The data for the trinity payment.
     */
    public static paymentData(address: string, amount?: number, tag?: string, message?: string): ITrinityPayment {
        if (!TrytesHelper.isTrytes(address)) {
            throw new Error("The address does not appear to be in valid trytes format");
        }

        if (address.length !== 90) {
            throw new Error(`The address must be 90 trytes long and include the checksum, it is ${address.length}`);
        }

        if (!ObjectHelper.isEmpty(amount)) {
            if (!NumberHelper.isInteger(amount)) {
                throw new Error("The amount must be an integer");
            }
        }

        if (!ObjectHelper.isEmpty(tag)) {
            if (TrytesHelper.isTrytes(tag)) {
                throw new Error("The tag does not appear to be in valid trytes format");
            }
            if (tag.length > 27) {
                throw new Error(`The tag is too long, it should be at most 27 trytes, it is ${tag.length}`);
            }
        }

        if (!ObjectHelper.isEmpty(message)) {
            if (TrytesHelper.isTrytes(message)) {
                throw new Error("The message does not appear to be in valid trytes format");
            }
        }

        return {
            address,
            amount,
            message,
            tag
        };
    }

    /**
     * Convert trinity payment data into a QR code.
     * @param paymentData The payment data to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    public static async paymentQR(paymentData: ITrinityPayment, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<any> {
        const renderer = QRRendererFactory.instance().create(rendererType, rendererOptions);

        if (ObjectHelper.isEmpty(renderer)) {
            throw new Error(`The QR Renderer '${rendererType} is not available`);
        }

        const qr = new QR();
        qr.addData(JSON.stringify(paymentData));
        const qrCellData = qr.generate();

        return renderer.render(qrCellData, cellSize, marginSize);
    }

    /**
     * Convert address data into a QR code.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    public static async addressQR(address: string, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<any> {
        if (!TrytesHelper.isTrytes(address)) {
            throw new Error("The address does not appear to be in valid trytes format");
        }

        if (address.length !== 90) {
            throw new Error(`The address must be 90 trytes long and include the checksum, it is ${address.length}`);
        }

        const renderer = QRRendererFactory.instance().create(rendererType, rendererOptions);

        if (ObjectHelper.isEmpty(renderer)) {
            throw new Error(`The QR Renderer '${rendererType} is not available`);
        }

        const qr = new QR();
        qr.addData(address);
        const qrCellData = qr.generate();

        return renderer.render(qrCellData, cellSize, marginSize);
    }
}
