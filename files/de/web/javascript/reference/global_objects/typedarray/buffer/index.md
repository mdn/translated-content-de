---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`buffer`**-Zugriffsproperty von {{jsxref("TypedArray")}}-Instanzen gibt den {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} zurück, auf den bei der Konstruktion dieses typisierten Arrays verwiesen wird.

{{EmbedInteractiveExample("pages/js/typedarray-buffer.html", "shorter")}}

## Beschreibung

Die `buffer`-Property ist eine Zugriffsproperty, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Property nur lesen können. Der Wert wird festgelegt, wenn der _TypedArray_ konstruiert wird und kann nicht geändert werden. _TypedArray_ ist eines der [TypedArray-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

Da ein typisiertes Array eine _Ansicht_ eines Buffers ist, kann der zugrunde liegende Buffer länger sein als das typisierte Array selbst.

## Beispiele

### Verwendung der buffer-Eigenschaft

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

### Zugriff auf den zugrunde liegenden Buffer von einer gesliceten Array-Ansicht

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
