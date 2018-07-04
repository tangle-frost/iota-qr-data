[@tangle-frost/iota-qr-data](../README.md) > [Trinity](../classes/trinity.md)

# Class: Trinity

Class to helper render data for trinity as QR.

## Hierarchy

**Trinity**

## Index

### Methods

* [addressQRHtml](trinity.md#addressqrhtml)
* [addressQRRaw](trinity.md#addressqrraw)
* [generatePaymentData](trinity.md#generatepaymentdata)
* [paymentQRHtml](trinity.md#paymentqrhtml)
* [paymentQRRaw](trinity.md#paymentqrraw)

---

## Methods

<a id="addressqrhtml"></a>

### `<Static>` addressQRHtml

▸ **addressQRHtml**(address: *`string`*, rendererType: *`string`*, cellSize?: *`number`*, marginSize?: *`number`*, rendererOptions?: *`any`*): `Promise`<`Element`>

*Defined in data/trinity.ts:163*

Convert address data into a QR code html element.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  The address to convert. |
| rendererType | `string` |  The type of render to use. |
| `Optional` cellSize | `number` |  The size in pixels of each cell. |
| `Optional` marginSize | `number` |  The margin size in pixels to leave around the qr code. |
| `Optional` rendererOptions | `any` |  Any options you want to pass to the renderer. |

**Returns:** `Promise`<`Element`>
The render of the QR code in the requested format.

___
<a id="addressqrraw"></a>

### `<Static>` addressQRRaw

▸ **addressQRRaw**(address: *`string`*, rendererType: *`string`*, cellSize?: *`number`*, marginSize?: *`number`*, rendererOptions?: *`any`*): `Promise`< `string` &#124; `Uint8Array`>

*Defined in data/trinity.ts:127*

Convert address data into a QR code raw data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  The address to convert. |
| rendererType | `string` |  The type of render to use. |
| `Optional` cellSize | `number` |  The size in pixels of each cell. |
| `Optional` marginSize | `number` |  The margin size in pixels to leave around the qr code. |
| `Optional` rendererOptions | `any` |  Any options you want to pass to the renderer. |

**Returns:** `Promise`< `string` &#124; `Uint8Array`>
The render of the QR code in the requested format.

___
<a id="generatepaymentdata"></a>

### `<Static>` generatePaymentData

▸ **generatePaymentData**(address: *`string`*, amountIota?: *`number`*, tagTrytes?: *`string`*, message?: *`string`*): [ITrinityPayment](../interfaces/itrinitypayment.md)

*Defined in data/trinity.ts:21*

Create the QR code data for trinity.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  The address trytes. |
| `Optional` amountIota | `number` |  The amount for the transaction. |
| `Optional` tagTrytes | `string` |  The tag for the transaction in trytes. |
| `Optional` message | `string` |  The message for the transaction in plain text. |

**Returns:** [ITrinityPayment](../interfaces/itrinitypayment.md)
The data for the trinity payment.

___
<a id="paymentqrhtml"></a>

### `<Static>` paymentQRHtml

▸ **paymentQRHtml**(paymentData: *[ITrinityPayment](../interfaces/itrinitypayment.md)*, rendererType: *`string`*, qrTypeNumber?: *`number`*, cellSize?: *`number`*, marginSize?: *`number`*, rendererOptions?: *`any`*): `Promise`<`Element`>

*Defined in data/trinity.ts:98*

Convert trinity payment data into a QR code html element.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| paymentData | [ITrinityPayment](../interfaces/itrinitypayment.md) | - |  The payment data to convert. |
| rendererType | `string` | - |  The type of render to use. |
| `Default value` qrTypeNumber | `number` | 16 |  The type number for qr code, controls the amount of data the QR can store. |
| `Optional` cellSize | `number` | - |  The size in pixels of each cell. |
| `Optional` marginSize | `number` | - |  The margin size in pixels to leave around the qr code. |
| `Optional` rendererOptions | `any` | - |  Any options you want to pass to the renderer. |

**Returns:** `Promise`<`Element`>
The render of the QR code in the requested format.

___
<a id="paymentqrraw"></a>

### `<Static>` paymentQRRaw

▸ **paymentQRRaw**(paymentData: *[ITrinityPayment](../interfaces/itrinitypayment.md)*, rendererType: *`string`*, qrTypeNumber?: *`number`*, cellSize?: *`number`*, marginSize?: *`number`*, rendererOptions?: *`any`*): `Promise`< `string` &#124; `Uint8Array`>

*Defined in data/trinity.ts:68*

Convert trinity payment data into a QR code raw data.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| paymentData | [ITrinityPayment](../interfaces/itrinitypayment.md) | - |  The payment data to convert. |
| rendererType | `string` | - |  The type of render to use. |
| `Default value` qrTypeNumber | `number` | 16 |  The type number for qr code, controls the amount of data the QR can store. |
| `Optional` cellSize | `number` | - |  The size in pixels of each cell. |
| `Optional` marginSize | `number` | - |  The margin size in pixels to leave around the qr code. |
| `Optional` rendererOptions | `any` | - |  Any options you want to pass to the renderer. |

**Returns:** `Promise`< `string` &#124; `Uint8Array`>
The render of the QR code in the requested format.

___

