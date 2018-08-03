Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@tangle-frost/iota-core/dist/helpers/objectHelper");
const trytesHelper_1 = require("@tangle-frost/iota-core/dist/helpers/trytesHelper");
const qr_1 = require("@tangle-frost/iota-qr-core/dist/qr");
const qrRendererFactory_1 = require("@tangle-frost/iota-qr-render/dist/factories/qrRendererFactory");
/**
 * Class to helper render addresses as QR.
 */
class AddressQR {
    /**
     * Convert address data into a QR code raw data.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static async renderRaw(address, rendererType, cellSize, marginSize, rendererOptions) {
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
        const qr = new qr_1.QR(5);
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
    static async renderHtml(address, rendererType, cellSize, marginSize, rendererOptions) {
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
        const qr = new qr_1.QR(5);
        qr.addText(address);
        const qrCellData = qr.generate();
        return renderer.renderHtml(qrCellData, cellSize, marginSize);
    }
}
exports.AddressQR = AddressQR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc1FSLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvYWRkcmVzc1FSLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRkFBaUY7QUFDakYsb0ZBQWlGO0FBQ2pGLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFFbEc7O0dBRUc7QUFDSCxNQUFhLFNBQVM7SUFDbEI7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDekIsT0FBZSxFQUNmLFlBQW9CLEVBQ3BCLFFBQWlCLEVBQ2pCLFVBQW1CLEVBQ25CLGVBQXFCO1FBQ3JCLElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FDL0U7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzNHO1FBRUQsTUFBTSxRQUFRLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVwRixJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLFlBQVksbUJBQW1CLENBQUMsQ0FBQztTQUN4RTtRQUVELE1BQU0sRUFBRSxHQUFHLElBQUksT0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUMxQixPQUFlLEVBQ2YsWUFBb0IsRUFDcEIsUUFBaUIsRUFDakIsVUFBbUIsRUFDbkIsZUFBcUI7UUFDckIsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztTQUMvRTtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDM0c7UUFFRCxNQUFNLFFBQVEsR0FBRyxxQ0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXBGLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsWUFBWSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBeEVELDhCQXdFQyJ9