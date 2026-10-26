---
title: ArrayBuffer.prototype.transferToFixedLength()
short-title: transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`transferToFixedLength()`** von {{jsxref("ArrayBuffer")}}-Instanzen erstellt einen neuen `ArrayBuffer` mit fester Länge und demselben Byte-Inhalt wie der ursprüngliche Puffer. Anschließend wird der ursprüngliche Puffer abgetrennt.

## Syntax

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### Parameter

- `newByteLength`
  - : Die {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des neuen `ArrayBuffer`. Der Standardwert ist die `byteLength` dieses `ArrayBuffer`.
    - Wenn `newByteLength` kleiner als die `byteLength` dieses `ArrayBuffer` ist, werden die überzähligen Bytes verworfen.
    - Wenn `newByteLength` größer als die `byteLength` dieses `ArrayBuffer` ist, werden die zusätzlichen Bytes mit Nullen gefüllt.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}}-Objekt. Sein Inhalt wird mit dem Inhalt dieses `ArrayBuffer` initialisiert; zusätzliche Bytes werden gegebenenfalls mit Nullen gefüllt. Der neue `ArrayBuffer` hat immer eine feste Länge. Der ursprüngliche `ArrayBuffer` wird abgetrennt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` bereits abgetrennt wurde oder nur durch bestimmte Operationen abgetrennt werden kann. Derzeit können nur bestimmte Web-APIs `ArrayBuffer`-Objekte erzeugen, für deren Abtrennung bestimmte Methoden vorgesehen sind, beispielsweise [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) und [`WebAssembly.Memory.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer).

## Beschreibung

Anders als {{jsxref("ArrayBuffer/transfer", "transfer()")}} erstellt `transferToFixedLength()` immer einen `ArrayBuffer` mit fester Länge. Das bedeutet, dass `newByteLength` größer als `maxByteLength` sein kann, selbst wenn dieser `ArrayBuffer` in der Größe veränderbar ist. Weitere Informationen finden Sie unter [Übertragen von ArrayBuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers).

## Beispiele

### Einen in der Größe veränderbaren ArrayBuffer in einen ArrayBuffer mit fester Länge übertragen

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

Bei Verwendung von `transferToFixedLength` kann `newByteLength` größer als die `maxByteLength` des ursprünglichen `ArrayBuffer` sein.

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

- [Polyfill für `ArrayBuffer.prototype.transferToFixedLength` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Polyfill für `ArrayBuffer.prototype.transferToFixedLength` von es-shims](https://www.npmjs.com/package/arraybuffer.prototype.transfertofixedlength)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
