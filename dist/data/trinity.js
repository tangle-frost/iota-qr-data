Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@tangle-frost/iota-core/dist/helpers/numberHelper");
const objectHelper_1 = require("@tangle-frost/iota-core/dist/helpers/objectHelper");
const trytesHelper_1 = require("@tangle-frost/iota-core/dist/helpers/trytesHelper");
const qr_1 = require("@tangle-frost/iota-qr-core/dist/qr");
const qrRendererFactory_1 = require("@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory");
/**
 * Class to helper render data for trinity as QR.
 */
class Trinity {
    /**
     * Create the QR code data for trinity.
     * @param address The address trytes.
     * @param amount The amount for the transaction.
     * @param tag The tag for the transaction in trytes.
     * @param message The message for the transaction in trytes.
     * @returns The data for the trinity payment.
     */
    static paymentData(address, amount, tag, message) {
        if (!trytesHelper_1.TrytesHelper.isTrytes(address)) {
            throw new Error("The address does not appear to be in valid trytes format");
        }
        if (address.length !== 90) {
            throw new Error(`The address must be 90 trytes long and include the checksum, it is ${address.length}`);
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(amount)) {
            if (!numberHelper_1.NumberHelper.isInteger(amount)) {
                throw new Error("The amount must be an integer");
            }
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(tag)) {
            if (trytesHelper_1.TrytesHelper.isTrytes(tag)) {
                throw new Error("The tag does not appear to be in valid trytes format");
            }
            if (tag.length > 27) {
                throw new Error(`The tag is too long, it should be at most 27 trytes, it is ${tag.length}`);
            }
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(message)) {
            if (trytesHelper_1.TrytesHelper.isTrytes(message)) {
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
    static async paymentQR(paymentData, rendererType, cellSize, marginSize, rendererOptions) {
        const renderer = qrRendererFactory_1.QRRendererFactory.instance().create(rendererType, rendererOptions);
        if (objectHelper_1.ObjectHelper.isEmpty(renderer)) {
            throw new Error(`The QR Renderer '${rendererType} is not available`);
        }
        const qr = new qr_1.QR();
        qr.addText(JSON.stringify(paymentData));
        const qrCellData = qr.generate();
        return renderer.renderRaw(qrCellData, cellSize, marginSize);
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
    static async addressQR(address, rendererType, cellSize, marginSize, rendererOptions) {
        if (!trytesHelper_1.TrytesHelper.isTrytes(address)) {
            throw new Error("The address does not appear to be in valid trytes format");
        }
        if (address.length !== 90) {
            throw new Error(`The address must be 90 trytes long and include the checksum, it is ${address.length}`);
        }
        const renderer = qrRendererFactory_1.QRRendererFactory.instance().create(rendererType, rendererOptions);
        if (objectHelper_1.ObjectHelper.isEmpty(renderer)) {
            throw new Error(`The QR Renderer '${rendererType} is not available`);
        }
        const qr = new qr_1.QR();
        qr.addText(address);
        const qrCellData = qr.generate();
        return renderer.renderRaw(qrCellData, cellSize, marginSize);
    }
}
exports.Trinity = Trinity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbml0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL3RyaW5pdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9GQUFpRjtBQUNqRixvRkFBaUY7QUFDakYsb0ZBQWlGO0FBQ2pGLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFHbEc7O0dBRUc7QUFDSDtJQUNJOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQWUsRUFBRSxNQUFlLEVBQUUsR0FBWSxFQUFFLE9BQWdCO1FBQ3RGLElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FDL0U7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzNHO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0o7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO2FBQzNFO1lBQ0QsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDL0Y7U0FDSjtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQyxJQUFJLDJCQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7YUFDL0U7U0FDSjtRQUVELE9BQU87WUFDSCxPQUFPO1lBQ1AsTUFBTTtZQUNOLE9BQU87WUFDUCxHQUFHO1NBQ04sQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQTRCLEVBQUUsWUFBb0IsRUFBRSxRQUFpQixFQUFFLFVBQW1CLEVBQUUsZUFBcUI7UUFDM0ksTUFBTSxRQUFRLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVwRixJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLFlBQVksbUJBQW1CLENBQUMsQ0FBQztTQUN4RTtRQUVELE1BQU0sRUFBRSxHQUFHLElBQUksT0FBRSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQWUsRUFBRSxZQUFvQixFQUFFLFFBQWlCLEVBQUUsVUFBbUIsRUFBRSxlQUFxQjtRQUM5SCxJQUFJLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1NBQy9FO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUMzRztRQUVELE1BQU0sUUFBUSxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFcEYsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixZQUFZLG1CQUFtQixDQUFDLENBQUM7U0FDeEU7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQUUsRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDSjtBQXBHRCwwQkFvR0MifQ==