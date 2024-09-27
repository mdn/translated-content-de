---
title: ArrayBuffer.prototype.transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
l10n:
  sourceCommit: a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{JSRef}}

Die **`transferToFixedLength()`**-Methode von {{jsxref("ArrayBuffer")}}-Instanzen erstellt einen neuen nicht-resizierbaren `ArrayBuffer` mit dem gleichen Byte-Inhalt wie dieser Puffer und trennt dann diesen Puffer.

## Syntax

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### Parameter

- `newByteLength`
  - : Die {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des neuen `ArrayBuffer`. Standardmäßig die `byteLength` dieses `ArrayBuffer`.
    - Ist `newByteLength` kleiner als die `byteLength` dieses `ArrayBuffer`, werden die "überlaufenden" Bytes verworfen.
    - Ist `newByteLength` größer als die `byteLength` dieses `ArrayBuffer`, werden die zusätzlichen Bytes mit Nullen gefüllt.

### Rückgabewert

Ein neuer {{jsxref("ArrayBuffer")}}-Objekt. Sein Inhalt wird mit dem Inhalt dieses `ArrayBuffer` initialisiert, und zusätzliche Bytes, falls vorhanden, werden mit Nullen gefüllt. Der neue `ArrayBuffer` ist immer nicht-resizierbar. Der ursprüngliche `ArrayBuffer` wird getrennt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn dieser `ArrayBuffer` bereits getrennt ist.

## Beschreibung

Im Gegensatz zu {{jsxref("ArrayBuffer/transfer", "transfer()")}} erstellt `transferToFixedLength()` immer einen nicht-resizierbaren `ArrayBuffer`. Das bedeutet, `newByteLength` kann größer sein als `maxByteLength`, selbst wenn dieser `ArrayBuffer` resizierbar ist. Siehe [Übertragung von ArrayBuffers](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) für weitere Informationen.

## Beispiele

### Übertragen eines resizierbaren ArrayBuffer auf feste Länge

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

Mit `transferToFixedLength` kann `newByteLength` größer sein als die `maxByteLength` des ursprünglichen `ArrayBuffer`.

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

- [Polyfill von `ArrayBuffer.prototype.transferToFixedLength()` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
