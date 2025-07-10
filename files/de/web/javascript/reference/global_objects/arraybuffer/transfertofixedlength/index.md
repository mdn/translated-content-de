---
title: ArrayBuffer.prototype.transferToFixedLength()
short-title: transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`transferToFixedLength()`**-Methode von {{jsxref("ArrayBuffer")}}-Instanzen erstellt einen neuen nicht-resizierbaren `ArrayBuffer` mit demselben Byteinhalt wie dieser Puffer und trennt dann diesen Puffer.

## Syntax

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### Parameter

- `newByteLength`
  - : Der {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des neuen `ArrayBuffer`. Standardmäßig entspricht er dem `byteLength` dieses `ArrayBuffer`.
    - Wenn `newByteLength` kleiner ist als der `byteLength` dieses `ArrayBuffer`, werden die "überflüssigen" Bytes verworfen.
    - Wenn `newByteLength` größer ist als der `byteLength` dieses `ArrayBuffer`, werden die zusätzlichen Bytes mit Nullen gefüllt.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}}-Objekt. Sein Inhalt wird auf den Inhalt dieses `ArrayBuffer` initialisiert, und zusätzliche Bytes, falls vorhanden, werden mit Nullen gefüllt. Der neue `ArrayBuffer` ist immer nicht resizierbar. Der ursprüngliche `ArrayBuffer` wird getrennt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` bereits getrennt ist.

## Beschreibung

Im Gegensatz zu {{jsxref("ArrayBuffer/transfer", "transfer()")}} erstellt `transferToFixedLength()` immer einen nicht-resizierbaren `ArrayBuffer`. Dies bedeutet, dass `newByteLength` größer als `maxByteLength` sein kann, selbst wenn dieser `ArrayBuffer` resizierbar ist. Weitere Informationen finden Sie unter [übertragende ArrayBuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers).

## Beispiele

### Übertragen eines resizierbaren ArrayBuffer zu fester Länge

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength();
console.log(buffer2.byteLength); // 8
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

Mit `transferToFixedLength` kann `newByteLength` größer als `maxByteLength` des ursprünglichen `ArrayBuffer` sein.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength(20);
console.log(buffer2.byteLength); // 20
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `ArrayBuffer.prototype.transferToFixedLength` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [es-shims Polyfill von `ArrayBuffer.prototype.transferToFixedLength`](https://www.npmjs.com/package/arraybuffer.prototype.transfertofixedlength)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
