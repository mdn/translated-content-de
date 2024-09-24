---
title: ArrayBuffer.prototype.transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
l10n:
  sourceCommit: a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{JSRef}}

Die **`transfer()`** Methode von {{jsxref("ArrayBuffer")}}-Instanzen erstellt einen neuen `ArrayBuffer` mit dem gleichen Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer.

## Syntax

```js-nolint
transfer()
transfer(newByteLength)
```

### Parameter

- `newByteLength` {{optional_inline}}
  - : Die {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des neuen `ArrayBuffer`. Standardmäßig entspricht dies der `byteLength` dieses `ArrayBuffer`.
    - Wenn `newByteLength` kleiner als die `byteLength` dieses `ArrayBuffer` ist, werden die "überlaufenden" Bytes verworfen.
    - Wenn `newByteLength` größer als die `byteLength` dieses `ArrayBuffer` ist, werden die zusätzlichen Bytes mit Nullen gefüllt.
    - Wenn dieser `ArrayBuffer` anpassbar ist, darf `newByteLength` nicht größer als seine {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} sein.

### Rückgabewert

Ein neues {{jsxref("ArrayBuffer")}}-Objekt. Sein Inhalt wird mit dem Inhalt dieses `ArrayBuffer` initialisiert, und zusätzliche Bytes, falls vorhanden, werden mit Nullen gefüllt. Der neue `ArrayBuffer` ist anpassbar, wenn und nur wenn dieser `ArrayBuffer` anpassbar ist, in diesem Fall ist seine {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} die gleiche wie die dieses `ArrayBuffer`. Der ursprüngliche `ArrayBuffer` wird getrennt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` anpassbar ist und `newByteLength` größer als die {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} dieses `ArrayBuffer` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn dieser `ArrayBuffer` bereits getrennt ist.

## Beschreibung

Die `transfer()` Methode führt dieselbe Operation wie der [strukturierte Klonalgo-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) aus. Sie kopiert die Bytes dieses `ArrayBuffer` in ein neues `ArrayBuffer`-Objekt und trennt anschließend dieses `ArrayBuffer`-Objekt. Siehe [Übertragung von ArrayBuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) für weitere Informationen.

`transfer()` bewahrt die Anpassbarkeit dieses `ArrayBuffer`. Wenn Sie möchten, dass der neue `ArrayBuffer` nicht anpassbar ist, verwenden Sie stattdessen {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}. Es gibt keine Möglichkeit, einen Puffer zu übertragen, der einen festlängenweise Puffer anpassbar macht.

`transfer()` ist sehr effizient, da Implementierungen diese Methode möglicherweise als Nullkopie-Verschiebung oder `realloc` implementieren — es muss keine tatsächliche Kopie der Daten geben.

## Beispiele

### Übertragen eines ArrayBuffer

```js
// Erstellen eines ArrayBuffer und Schreiben einiger Bytes
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// Kopieren des Puffers in gleicher Größe
const buffer2 = buffer.transfer();
console.log(buffer.detached); // true
console.log(buffer2.byteLength); // 8
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4

// Kopieren des Puffers in kleinere Größe
const buffer3 = buffer2.transfer(4);
console.log(buffer3.byteLength); // 4
const view3 = new Uint8Array(buffer3);
console.log(view3[1]); // 2
console.log(view3[7]); // undefined

// Kopieren des Puffers in größere Größe
const buffer4 = buffer3.transfer(8);
console.log(buffer4.byteLength); // 8
const view4 = new Uint8Array(buffer4);
console.log(view4[1]); // 2
console.log(view4[7]); // 0

// Bereits getrennt, löst TypeError aus
buffer.transfer(); // TypeError: Cannot perform ArrayBuffer.prototype.transfer on a detached ArrayBuffer
```

### Übertragen eines anpassbaren ArrayBuffer

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// Kopieren des Puffers in kleinere Größe
const buffer2 = buffer.transfer(4);
console.log(buffer2.byteLength); // 4
console.log(buffer2.maxByteLength); // 16
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // undefined
buffer2.resize(8);
console.log(view2[7]); // 0

// Kopieren des Puffers in größere Größe innerhalb von maxByteLength
const buffer3 = buffer2.transfer(12);
console.log(buffer3.byteLength); // 12

// Kopieren des Puffers in größere Größe als maxByteLength
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
