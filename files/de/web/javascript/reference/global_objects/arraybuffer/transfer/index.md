---
title: ArrayBuffer.prototype.transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
l10n:
  sourceCommit: a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{JSRef}}

Die **`transfer()`** Methode von {{jsxref("ArrayBuffer")}} Instanzen erstellt einen neuen `ArrayBuffer` mit demselben Byte-Inhalt wie dieser Puffer und trennt anschließend diesen Puffer.

## Syntax

```js-nolint
transfer()
transfer(newByteLength)
```

### Parameter

- `newByteLength` {{optional_inline}}
  - : Die {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des neuen `ArrayBuffer`. Standardmäßig entspricht sie der `byteLength` dieses `ArrayBuffer`.
    - Wenn `newByteLength` kleiner als die `byteLength` dieses `ArrayBuffer` ist, werden die "überlaufenden" Bytes verworfen.
    - Wenn `newByteLength` größer als die `byteLength` dieses `ArrayBuffer` ist, werden die zusätzlichen Bytes mit Nullen gefüllt.
    - Wenn dieser `ArrayBuffer` anpassbar ist, darf `newByteLength` nicht größer als dessen {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} sein.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}} Objekt. Der Inhalt wird auf den Inhalt dieses `ArrayBuffer` initialisiert, und zusätzliche Bytes, falls vorhanden, werden mit Nullen gefüllt. Der neue `ArrayBuffer` ist anpassbar, wenn und nur wenn dieser `ArrayBuffer` anpassbar ist, dessen {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} ist derselbe wie der dieses `ArrayBuffer`. Der ursprüngliche `ArrayBuffer` wird getrennt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` anpassbar ist und `newByteLength` größer ist als die {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} dieses `ArrayBuffer`.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` bereits getrennt ist.

## Beschreibung

Die `transfer()` Methode führt die gleiche Operation aus wie der [strukturierte Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Sie kopiert die Bytes dieses `ArrayBuffer` in ein neues `ArrayBuffer` Objekt und trennt anschließend dieses `ArrayBuffer` Objekt. Siehe [Übertragung von ArrayBuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) für weitere Informationen.

`transfer()` erhält die Anpassbarkeit dieses `ArrayBuffer`. Wenn Sie möchten, dass der neue `ArrayBuffer` nicht anpassbar ist, verwenden Sie stattdessen {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}. Es gibt keine Möglichkeit, einen Puffer zu übertragen, der einen Puffer mit fester Länge anpassbar macht.

`transfer()` ist sehr effizient, da Implementierungen diese Methode als Null-Kopie-Verschiebung oder als `realloc` implementieren können — es muss keine tatsächliche Kopie der Daten erfolgen.

## Beispiele

### Übertragen eines ArrayBuffer

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

### Übertragen eines anpassbaren ArrayBuffer

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

- [Polyfill von `ArrayBuffer.prototype.transfer()` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
