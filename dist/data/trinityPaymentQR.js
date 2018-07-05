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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbml0eVBheW1lbnRRUi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL3RyaW5pdHlQYXltZW50UVIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9GQUFpRjtBQUNqRixvRkFBaUY7QUFDakYsb0ZBQWlGO0FBQ2pGLG9GQUFpRjtBQUNqRiwyREFBd0Q7QUFDeEQscUdBQWtHO0FBR2xHOztHQUVHO0FBQ0g7SUFDSTs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQWUsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsT0FBZ0I7UUFDeEcsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztTQUMvRTtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDM0c7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7YUFDcEQ7U0FDSjtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQzthQUMzRTtZQUNELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThELFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3JHO1NBQ0o7UUFFRCxJQUFJLFlBQVksQ0FBQztRQUNqQixJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsWUFBWSxHQUFHLDJCQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsT0FBTztZQUNILE9BQU87WUFDUCxNQUFNLEVBQUUsVUFBVTtZQUNsQixPQUFPLEVBQUUsWUFBWTtZQUNyQixHQUFHLEVBQUUsU0FBUztTQUNqQixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUN6QixXQUE0QixFQUM1QixZQUFvQixFQUNwQixlQUF1QixFQUFFLEVBQ3pCLFFBQWlCLEVBQ2pCLFVBQW1CLEVBQ25CLGVBQXFCO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFcEYsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixZQUFZLG1CQUFtQixDQUFDLENBQUM7U0FDeEU7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUMxQixXQUE0QixFQUM1QixZQUFvQixFQUNwQixlQUF1QixFQUFFLEVBQ3pCLFFBQWlCLEVBQ2pCLFVBQW1CLEVBQ25CLGVBQXFCO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFcEYsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixZQUFZLG1CQUFtQixDQUFDLENBQUM7U0FDeEU7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBekdELDRDQXlHQyJ9