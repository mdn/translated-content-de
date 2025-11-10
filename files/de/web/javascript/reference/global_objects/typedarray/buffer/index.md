---
title: TypedArray.prototype.buffer
short-title: buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`buffer`** Accessor-Eigenschaft von {{jsxref("TypedArray")}} Instanzen gibt den {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück, auf den dieses typisierte Array zur Zeit der Konstruktion verweist.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.buffer", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);

console.log(uint16.buffer.byteLength);
// Expected output: 8
```

## Beschreibung

Die `buffer` Eigenschaft ist eine Accessor-Eigenschaft, deren `set` Accessorfunktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen des _TypedArray_ festgelegt und kann nicht geändert werden. _TypedArray_ ist eines der [TypedArray-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

Da ein typisiertes Array eine _Ansicht_ eines Buffers ist, kann der zugrunde liegende Buffer länger sein als das typisierte Array selbst.

## Beispiele

### Verwendung der Buffer-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

### Zugriff auf den zugrundeliegenden Buffer von einer geschnittenen Array-Ansicht aus

```js
const buffer = new ArrayBuffer(1024);
const arr = new Uint8Array(buffer, 64, 128);
console.log(arr.byteLength); // 128
console.log(arr.buffer.byteLength); // 1024
console.log(arr.buffer === buffer); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
