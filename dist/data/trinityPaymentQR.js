Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
const objectHelper_1 = require("@tangle-frost/iota-core/dist/helpers/objectHelper");
const stringHelper_1 = require("@tangle-frost/iota-core/dist/helpers/stringHelper");
const trytesHelper_1 = require("@tangle-frost/iota-core/dist/helpers/trytesHelper");
const qr_1 = require("@tangle-frost/iota-qr-core/dist/qr");
const qrRendererFactory_1 = require("@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory");
/**
 * Class to helper render data for trinity as QR.
 */
class TrinityPaymentQR {
    /**
     * Create the QR code data for trinity payment data.
     * @param address The address trytes.
     * @param amountIota The amount for the transaction.
     * @param tagTrytes The tag for the transaction in trytes.
     * @param message The message for the transaction in plain text.
     * @returns The data for the trinity payment.
     */
    static generatePaymentData(address, amountIota, tagTrytes, message) {
        if (!trytesHelper_1.TrytesHelper.isTrytes(address)) {
            throw new Error("The address does not appear to be in valid trytes format");
        }
        if (address.length !== 90) {
            throw new Error(`The address must be 90 trytes long and include the checksum, it is ${address.length}`);
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(amountIota)) {
            if (!numberHelper_1.NumberHelper.isInteger(amountIota)) {
                throw new Error("The amount must be an integer");
            }
        }
        if (!stringHelper_1.StringHelper.isEmpty(tagTrytes)) {
            if (!trytesHelper_1.TrytesHelper.isTrytes(tagTrytes)) {
                throw new Error("The tag does not appear to be in valid trytes format");
            }
            if (tagTrytes.length > 27) {
                throw new Error(`The tag is too long, it should be at most 27 trytes, it is ${tagTrytes.length}`);
            }
        }
        let messageAscii;
        if (!stringHelper_1.StringHelper.isEmpty(message)) {
            messageAscii = stringHelper_1.StringHelper.encodeNonASCII(message);
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
    static async renderRaw(paymentData, rendererType, qrTypeNumber = 16, cellSize, marginSize, rendererOptions) {
        const renderer = qrRendererFactory_1.QRRendererFactory.instance().create(rendererType, rendererOptions);
        if (objectHelper_1.ObjectHelper.isEmpty(renderer)) {
            throw new Error(`The QR Renderer '${rendererType} is not available`);
        }
        const qr = new qr_1.QR(qrTypeNumber);
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
    static async renderHtml(paymentData, rendererType, qrTypeNumber = 16, cellSize, marginSize, rendererOptions) {
        const renderer = qrRendererFactory_1.QRRendererFactory.instance().create(rendererType, rendererOptions);
        if (objectHelper_1.ObjectHelper.isEmpty(renderer)) {
            throw new Error(`The QR Renderer '${rendererType} is not available`);
        }
        const qr = new qr_1.QR(qrTypeNumber);
        qr.addText(JSON.stringify(paymentData));
        const qrCellData = qr.generate();
        return renderer.renderHtml(qrCellData, cellSize, marginSize);
    }
}
exports.TrinityPaymentQR = TrinityPaymentQR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbml0eVBheW1lbnRRUi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL3RyaW5pdHlQYXltZW50UVIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9GQUFpRjtBQUNqRixvRkFBaUY7QUFDakYsb0ZBQWlGO0FBQ2pGLG9GQUFpRjtBQUNqRiwyREFBd0Q7QUFDeEQscUdBQWtHO0FBR2xHOztHQUVHO0FBQ0gsTUFBYSxnQkFBZ0I7SUFDekI7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFlLEVBQUUsVUFBbUIsRUFBRSxTQUFrQixFQUFFLE9BQWdCO1FBQ3hHLElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FDL0U7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzNHO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0o7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7YUFDM0U7WUFDRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO2dCQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLDhEQUE4RCxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNyRztTQUNKO1FBRUQsSUFBSSxZQUFZLENBQUM7UUFDakIsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLFlBQVksR0FBRywyQkFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2RDtRQUVELE9BQU87WUFDSCxPQUFPO1lBQ1AsTUFBTSxFQUFFLFVBQVU7WUFDbEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsR0FBRyxFQUFFLFNBQVM7U0FDakIsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDekIsV0FBNEIsRUFDNUIsWUFBb0IsRUFDcEIsZUFBdUIsRUFBRSxFQUN6QixRQUFpQixFQUNqQixVQUFtQixFQUNuQixlQUFxQjtRQUNyQixNQUFNLFFBQVEsR0FBRyxxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXBGLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsWUFBWSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FDMUIsV0FBNEIsRUFDNUIsWUFBb0IsRUFDcEIsZUFBdUIsRUFBRSxFQUN6QixRQUFpQixFQUNqQixVQUFtQixFQUNuQixlQUFxQjtRQUNyQixNQUFNLFFBQVEsR0FBRyxxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXBGLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsWUFBWSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDSjtBQXpHRCw0Q0F5R0MifQ==