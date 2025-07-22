---
title: ArrayBuffer.prototype.transfer()
short-title: transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
l10n:
  sourceCommit: 16f462ee43bbd7fd39561a480e3e323d1c542966
---

Die **`transfer()`** Methode von {{jsxref("ArrayBuffer")}} Instanzen erstellt einen neuen `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer ab.

## Syntax

```js-nolint
transfer()
transfer(newByteLength)
```

### Parameter

- `newByteLength` {{optional_inline}}
  - : Der {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des neuen `ArrayBuffer`. Standardmäßig ist dies der `byteLength` dieses `ArrayBuffer`.
    - Wenn `newByteLength` kleiner als der `byteLength` dieses `ArrayBuffer` ist, werden die "überlaufenden" Bytes verworfen.
    - Wenn `newByteLength` größer als der `byteLength` dieses `ArrayBuffer` ist, werden die zusätzlichen Bytes mit Nullen gefüllt.
    - Wenn dieser `ArrayBuffer` vergrößerbar ist, darf `newByteLength` nicht größer als sein {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} sein.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}} Objekt. Sein Inhalt wird auf den Inhalt dieses `ArrayBuffer` initialisiert, und zusätzliche Bytes, falls vorhanden, werden mit Nullen gefüllt. Der neue `ArrayBuffer` ist nur dann vergrößerbar, wenn auch dieser `ArrayBuffer` vergrößerbar ist, in diesem Fall ist sein {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} das gleiche wie das dieses `ArrayBuffer`. Der ursprüngliche `ArrayBuffer` wird getrennt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` vergrößerbar ist und `newByteLength` größer ist als der {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} dieses `ArrayBuffer`.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` bereits getrennt ist oder wenn er nur durch bestimmte Operationen getrennt werden kann. Derzeit sind es nur bestimmte Web-APIs, die in der Lage sind, `ArrayBuffer` Objekte mit bestimmten Trennmethoden zu erstellen, wie zum Beispiel [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) und [`WebAssembly.Memory.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer).

## Beschreibung

Die `transfer()` Methode führt dieselbe Operation wie der [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) aus. Sie kopiert die Bytes dieses `ArrayBuffer` in ein neues `ArrayBuffer` Objekt und trennt dann dieses `ArrayBuffer` Objekt. Weitere Informationen finden Sie unter [Übergabe von ArrayBuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers).

`transfer()` bewahrt die Vergrößerbarkeit dieses `ArrayBuffer`. Wenn Sie möchten, dass der neue `ArrayBuffer` nicht vergrößerbar ist, verwenden Sie stattdessen {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}. Es gibt keinen Weg, einen Puffer zu übertragen, der einen Festlängenpuffer vergrößerbar macht.

`transfer()` ist sehr effizient, da Implementierungen diese Methode als Zero-Copy-Verschiebung oder als `realloc` implementieren können – es muss keine tatsächliche Kopie der Daten erfolgen.

## Beispiele

### Ein ArrayBuffer übertragen

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

### Einen vergrößerbaren ArrayBuffer übertragen

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

- [Polyfill von `ArrayBuffer.prototype.transfer` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [es-shims Polyfill von `ArrayBuffer.prototype.transfer`](https://www.npmjs.com/package/arraybuffer.prototype.transfer)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
