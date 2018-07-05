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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc1FSLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvYWRkcmVzc1FSLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRkFBaUY7QUFDakYsb0ZBQWlGO0FBQ2pGLDJEQUF3RDtBQUN4RCxxR0FBa0c7QUFFbEc7O0dBRUc7QUFDSDtJQUNJOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ3pCLE9BQWUsRUFDZixZQUFvQixFQUNwQixRQUFpQixFQUNqQixVQUFtQixFQUNuQixlQUFxQjtRQUNyQixJQUFJLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1NBQy9FO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUMzRztRQUVELE1BQU0sUUFBUSxHQUFHLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFcEYsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixZQUFZLG1CQUFtQixDQUFDLENBQUM7U0FDeEU7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQyxPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FDMUIsT0FBZSxFQUNmLFlBQW9CLEVBQ3BCLFFBQWlCLEVBQ2pCLFVBQW1CLEVBQ25CLGVBQXFCO1FBQ3JCLElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7U0FDL0U7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzNHO1FBRUQsTUFBTSxRQUFRLEdBQUcscUNBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVwRixJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLFlBQVksbUJBQW1CLENBQUMsQ0FBQztTQUN4RTtRQUVELE1BQU0sRUFBRSxHQUFHLElBQUksT0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDSjtBQXhFRCw4QkF3RUMifQ==