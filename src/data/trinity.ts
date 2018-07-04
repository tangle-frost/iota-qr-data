import { NumberHelper } from "@tangle-frost/iota-core/dist/helpers/numberHelper";
import { ObjectHelper } from "@tangle-frost/iota-core/dist/helpers/objectHelper";
import { StringHelper } from "@tangle-frost/iota-core/dist/helpers/stringHelper";
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
     * @param amountIota The amount for the transaction.
     * @param tagTrytes The tag for the transaction in trytes.
     * @param message The message for the transaction in plain text.
     * @returns The data for the trinity payment.
     */
    public static generatePaymentData(address: string, amountIota?: number, tagTrytes?: string, message?: string): ITrinityPayment {
        if (!TrytesHelper.isTrytes(address)) {
            throw new Error("The address does not appear to be in valid trytes format");
        }

        if (address.length !== 90) {
            throw new Error(`The address must be 90 trytes long and include the checksum, it is ${address.length}`);
        }

        if (!ObjectHelper.isEmpty(amountIota)) {
            if (!NumberHelper.isInteger(amountIota)) {
                throw new Error("The amount must be an integer");
            }
        }

        if (!StringHelper.isEmpty(tagTrytes)) {
            if (!TrytesHelper.isTrytes(tagTrytes)) {
                throw new Error("The tag does not appear to be in valid trytes format");
            }
            if (tagTrytes.length > 27) {
                throw new Error(`The tag is too long, it should be at most 27 trytes, it is ${tagTrytes.length}`);
            }
        }

        let messageAscii;
        if (!StringHelper.isEmpty(message)) {
            messageAscii = StringHelper.encodeNonASCII(message);
        }

        return {
            address,
            amount: amountIota,
            message: messageAscii,
            tag: tagTrytes
        };
    }

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
    public static async paymentQRRaw(
        paymentData: ITrinityPayment,
        rendererType: string,
        qrTypeNumber: number = 16,
        cellSize?: number,
        marginSize?: number,
        rendererOptions?: any): Promise<string | Uint8Array> {
        const renderer = QRRendererFactory.instance().create(rendererType, rendererOptions);

        if (ObjectHelper.isEmpty(renderer)) {
            throw new Error(`The QR Renderer '${rendererType} is not available`);
        }

        const qr = new QR(qrTypeNumber);
        qr.addText(JSON.stringify(paymentData));
        const qrCellData = qr.generate();

        return renderer.renderRaw(qrCellData, cellSize, marginSize);
    }

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
    public static async paymentQRHtml(
        paymentData: ITrinityPayment,
        rendererType: string,
        qrTypeNumber: number = 16,
        cellSize?: number,
        marginSize?: number,
        rendererOptions?: any): Promise<Element> {
        const renderer = QRRendererFactory.instance().create(rendererType, rendererOptions);

        if (ObjectHelper.isEmpty(renderer)) {
            throw new Error(`The QR Renderer '${rendererType} is not available`);
        }

        const qr = new QR(qrTypeNumber);
        qr.addText(JSON.stringify(paymentData));
        const qrCellData = qr.generate();

        return renderer.renderHtml(qrCellData, cellSize, marginSize);
    }

    /**
     * Convert address data into a QR code raw data.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    public static async addressQRRaw(
        address: string,
        rendererType: string,
        cellSize?: number,
        marginSize?: number,
        rendererOptions?: any): Promise<string | Uint8Array> {
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

        const qr = new QR(5);
        qr.addText(address);
        const qrCellData = qr.generate();

        return renderer.renderRaw(qrCellData, cellSize, marginSize);
    }

    /**
     * Convert address data into a QR code html element.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    public static async addressQRHtml(
        address: string,
        rendererType: string,
        cellSize?: number,
        marginSize?: number,
        rendererOptions?: any): Promise<Element> {
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

        const qr = new QR(5);
        qr.addText(address);
        const qrCellData = qr.generate();

        return renderer.renderHtml(qrCellData, cellSize, marginSize);
    }
}
