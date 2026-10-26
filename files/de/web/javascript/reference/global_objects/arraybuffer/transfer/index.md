---
title: ArrayBuffer.prototype.transfer()
short-title: transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`transfer()`** von {{jsxref("ArrayBuffer")}}-Instanzen erstellt einen neuen `ArrayBuffer` mit demselben Byte-Inhalt wie der ursprüngliche Puffer und trennt anschließend den ursprünglichen Puffer ab.

## Syntax

```js-nolint
transfer()
transfer(newByteLength)
```

### Parameter

- `newByteLength` {{optional_inline}}
  - : Die {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des neuen `ArrayBuffer`. Standardmäßig wird die `byteLength` dieses `ArrayBuffer` verwendet.
    - Wenn `newByteLength` kleiner als die `byteLength` dieses `ArrayBuffer` ist, werden die überzähligen Bytes verworfen.
    - Wenn `newByteLength` größer als die `byteLength` dieses `ArrayBuffer` ist, werden die zusätzlichen Bytes mit Nullen gefüllt.
    - Wenn dieser `ArrayBuffer` in der Größe veränderbar ist, darf `newByteLength` nicht größer als seine {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} sein.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}}-Objekt. Sein Inhalt wird mit dem Inhalt dieses `ArrayBuffer` initialisiert; zusätzliche Bytes werden, falls vorhanden, mit Nullen gefüllt. Der neue `ArrayBuffer` ist genau dann in der Größe veränderbar, wenn dieser `ArrayBuffer` in der Größe veränderbar ist. In diesem Fall hat er dieselbe {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} wie dieser `ArrayBuffer`. Der ursprüngliche `ArrayBuffer` wird abgetrennt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` in der Größe veränderbar ist und `newByteLength` größer als die {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} dieses `ArrayBuffer` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` bereits abgetrennt ist oder nur durch dafür vorgesehene Operationen abgetrennt werden kann. Derzeit können nur bestimmte Web-APIs `ArrayBuffer`-Objekte erstellen, die ausschließlich mit dafür vorgesehenen Methoden abgetrennt werden können, beispielsweise [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) und [`WebAssembly.Memory.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer).

## Beschreibung

Die Methode `transfer()` führt denselben Vorgang wie der [Algorithmus zum strukturierten Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) aus. Sie kopiert die Bytes dieses `ArrayBuffer` in ein neues `ArrayBuffer`-Objekt und trennt anschließend das ursprüngliche `ArrayBuffer`-Objekt ab. Weitere Informationen finden Sie unter [Übertragen von ArrayBuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers).

`transfer()` erhält die Größenveränderbarkeit dieses `ArrayBuffer`. Wenn der neue `ArrayBuffer` nicht in der Größe veränderbar sein soll, verwenden Sie stattdessen {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}. Es gibt keine Möglichkeit, einen Puffer so zu übertragen, dass ein Puffer mit fester Länge in der Größe veränderbar wird.

`transfer()` ist sehr effizient, da Implementierungen diese Methode als Verschieben ohne Kopieren oder als `realloc` umsetzen können – die Daten müssen nicht tatsächlich kopiert werden.

## Beispiele

### Einen ArrayBuffer übertragen

```js
// Create an ArrayBuffer and write a few bytes
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// Copy the buffer to the same size
const buffer2 = buffer.transfer();
console.log(buffer.detached); // true
console.log(buffer2.byteLength); // 8
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4

// Copy the buffer to a smaller size
const buffer3 = buffer2.transfer(4);
console.log(buffer3.byteLength); // 4
const view3 = new Uint8Array(buffer3);
console.log(view3[1]); // 2
console.log(view3[7]); // undefined

// Copy the buffer to a larger size
const buffer4 = buffer3.transfer(8);
console.log(buffer4.byteLength); // 8
const view4 = new Uint8Array(buffer4);
console.log(view4[1]); // 2
console.log(view4[7]); // 0

// Already detached, throws TypeError
buffer.transfer(); // TypeError: Cannot perform ArrayBuffer.prototype.transfer on a detached ArrayBuffer
```

### Einen in der Größe veränderbaren ArrayBuffer übertragen

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// Copy the buffer to a smaller size
const buffer2 = buffer.transfer(4);
console.log(buffer2.byteLength); // 4
console.log(buffer2.maxByteLength); // 16
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // undefined
buffer2.resize(8);
console.log(view2[7]); // 0

// Copy the buffer to a larger size within maxByteLength
const buffer3 = buffer2.transfer(12);
console.log(buffer3.byteLength); // 12

// Copy the buffer to a larger size than maxByteLength
buffer3.transfer(20); // RangeError: Invalid array buffer length
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `ArrayBuffer.prototype.transfer` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Polyfill für `ArrayBuffer.prototype.transfer` von es-shims](https://www.npmjs.com/package/arraybuffer.prototype.transfer)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
