/**
 * Class to helper render addresses as QR.
 */
export declare class AddressQR {
    /**
     * Convert address data into a QR code raw data.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static renderRaw(address: string, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<string | Uint8Array>;
    /**
     * Convert address data into a QR code html element.
     * @param address The address to convert.
     * @param rendererType The type of render to use.
     * @param cellSize The size in pixels of each cell.
     * @param marginSize The margin size in pixels to leave around the qr code.
     * @param rendererOptions Any options you want to pass to the renderer.
     * @returns The render of the QR code in the requested format.
     */
    static renderHtml(address: string, rendererType: string, cellSize?: number, marginSize?: number, rendererOptions?: any): Promise<Element>;
}
