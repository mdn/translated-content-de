---
title: ArrayBuffer.prototype.transferToFixedLength()
short-title: transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
l10n:
  sourceCommit: 16f462ee43bbd7fd39561a480e3e323d1c542966
---

Die Methode **`transferToFixedLength()`** von {{jsxref("ArrayBuffer")}}-Instanzen erstellt einen neuen nicht-resizierbaren `ArrayBuffer` mit dem gleichen Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer ab.

## Syntax

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### Parameter

- `newByteLength`
  - : Die {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des neuen `ArrayBuffer`. Standardmäßig entspricht sie der `byteLength` dieses `ArrayBuffer`.
    - Wenn `newByteLength` kleiner ist als die `byteLength` dieses `ArrayBuffer`, werden die "überlaufenden" Bytes verworfen.
    - Wenn `newByteLength` größer ist als die `byteLength` dieses `ArrayBuffer`, werden die zusätzlichen Bytes mit Nullen aufgefüllt.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}}-Objekt. Sein Inhalt wird mit dem Inhalt dieses `ArrayBuffer` initialisiert, und zusätzliche Bytes, falls vorhanden, werden mit Nullen aufgefüllt. Der neue `ArrayBuffer` ist immer nicht resizierbar. Der ursprüngliche `ArrayBuffer` wird getrennt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` bereits getrennt ist oder wenn er nur durch bestimmte Operationen getrennt werden kann. Derzeit sind nur bestimmte Web-APIs in der Lage, `ArrayBuffer`-Objekte mit bestimmten Trennmethoden zu erstellen, wie z.B. [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) und [`WebAssembly.Memory.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer).

## Beschreibung

Im Gegensatz zu {{jsxref("ArrayBuffer/transfer", "transfer()")}} erstellt `transferToFixedLength()` immer einen nicht-resizierbaren `ArrayBuffer`. Dies bedeutet, dass `newByteLength` größer sein kann als die `maxByteLength`, selbst wenn dieser `ArrayBuffer` resizierbar ist. Siehe [Übertragen von ArrayBuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) für weitere Informationen.

## Beispiele

### Übertragen eines resizierbaren ArrayBuffers auf feste Länge

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

Beim Verwenden von `transferToFixedLength` kann `newByteLength` größer sein als die `maxByteLength` des ursprünglichen `ArrayBuffer`.

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

- [Polyfill für `ArrayBuffer.prototype.transferToFixedLength` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [es-shims Polyfill für `ArrayBuffer.prototype.transferToFixedLength`](https://www.npmjs.com/package/arraybuffer.prototype.transfertofixedlength)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
