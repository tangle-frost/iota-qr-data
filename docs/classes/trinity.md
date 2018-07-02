[@tangle-frost/iota-qr-data](../README.md) > [Trinity](../classes/trinity.md)

# Class: Trinity

Class to helper render data for trinity as QR.

## Hierarchy

**Trinity**

## Index

### Methods

* [addressQR](trinity.md#addressqr)
* [paymentData](trinity.md#paymentdata)
* [paymentQR](trinity.md#paymentqr)

---

## Methods

<a id="addressqr"></a>

### `<Static>` addressQR

▸ **addressQR**(address: *`string`*, rendererType: *`string`*, cellSize?: *`number`*, marginSize?: *`number`*, rendererOptions?: *`any`*): `Promise`<`any`>

*Defined in data/trinity.ts:90*

Convert address data into a QR code.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  The address to convert. |
| rendererType | `string` |  The type of render to use. |
| `Optional` cellSize | `number` |  The size in pixels of each cell. |
| `Optional` marginSize | `number` |  The margin size in pixels to leave around the qr code. |
| `Optional` rendererOptions | `any` |  Any options you want to pass to the renderer. |

**Returns:** `Promise`<`any`>
The render of the QR code in the requested format.

___
<a id="paymentdata"></a>

### `<Static>` paymentData

▸ **paymentData**(address: *`string`*, amount?: *`number`*, tag?: *`string`*, message?: *`string`*): [ITrinityPayment](../interfaces/itrinitypayment.md)

*Defined in data/trinity.ts:20*

Create the QR code data for trinity.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | `string` |  The address trytes. |
| `Optional` amount | `number` |  The amount for the transaction. |
| `Optional` tag | `string` |  The tag for the transaction in trytes. |
| `Optional` message | `string` |  The message for the transaction in trytes. |

**Returns:** [ITrinityPayment](../interfaces/itrinitypayment.md)
The data for the trinity payment.

___
<a id="paymentqr"></a>

### `<Static>` paymentQR

▸ **paymentQR**(paymentData: *[ITrinityPayment](../interfaces/itrinitypayment.md)*, rendererType: *`string`*, cellSize?: *`number`*, marginSize?: *`number`*, rendererOptions?: *`any`*): `Promise`<`any`>

*Defined in data/trinity.ts:67*

Convert trinity payment data into a QR code.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| paymentData | [ITrinityPayment](../interfaces/itrinitypayment.md) |  The payment data to convert. |
| rendererType | `string` |  The type of render to use. |
| `Optional` cellSize | `number` |  The size in pixels of each cell. |
| `Optional` marginSize | `number` |  The margin size in pixels to leave around the qr code. |
| `Optional` rendererOptions | `any` |  Any options you want to pass to the renderer. |

**Returns:** `Promise`<`any`>
The render of the QR code in the requested format.

___

