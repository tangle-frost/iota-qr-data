[@tangle-frost/iota-qr-data](../README.md) > [AddressQR](../classes/addressqr.md)

# Class: AddressQR

Class to helper render addresses as QR.

## Hierarchy

**AddressQR**

## Index

### Methods

* [renderHtml](addressqr.md#renderhtml)
* [renderRaw](addressqr.md#renderraw)

---

## Methods

<a id="renderhtml"></a>

### `<Static>` renderHtml

▸ **renderHtml**(address: *`string`*, rendererType: *`string`*, cellSize?: *`number`*, marginSize?: *`number`*, rendererOptions?: *`any`*): `Promise`<`Element`>

*Defined in data/addressQR.ts:55*

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
<a id="renderraw"></a>

### `<Static>` renderRaw

▸ **renderRaw**(address: *`string`*, rendererType: *`string`*, cellSize?: *`number`*, marginSize?: *`number`*, rendererOptions?: *`any`*): `Promise`< `string` &#124; `Uint8Array`>

*Defined in data/addressQR.ts:19*

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

