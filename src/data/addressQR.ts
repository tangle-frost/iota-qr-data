import { ObjectHelper } from "@tangle-frost/iota-core/dist/helpers/objectHelper";
import { TrytesHelper } from "@tangle-frost/iota-core/dist/helpers/trytesHelper";
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import { QRRendererFactory } from "@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory";

/**
 * Class to helper render addresses as QR.
 */
export class AddressQR {
    /**
     * Convert address data into a QR code raw data.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    public static async renderRaw(
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
    public static async renderHtml(
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
