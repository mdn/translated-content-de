---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`length`** Accessor-Eigenschaft von {{jsxref("TypedArray")}}-Instanzen gibt die Länge (in Elementen) dieses TypedArray zurück.

{{InteractiveExample("JavaScript Demo: TypedArray.length", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.length);
// Expected output: 6
```

## Beschreibung

Die `length`-Eigenschaft ist eine Accessor-Eigenschaft, deren Set-Accessor-Funktion `undefined` ist, was bedeutet, dass Sie diese Eigenschaft nur lesen können. Der Wert wird beim Erstellen eines _TypedArray_ festgelegt und kann nicht geändert werden. Wenn das _TypedArray_ keinen `byteOffset` oder keine `length` angibt, wird die Länge des referenzierten {{jsxref("ArrayBuffer")}} zurückgegeben. _TypedArray_ ist eines der [TypedArray-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Beispiele

### Verwendung der `length`-Eigenschaft

```js
const buffer = new ArrayBuffer(8);

let uint8 = new Uint8Array(buffer);
uint8.length; // 8 (matches the length of the buffer)

uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (as specified when constructing the Uint8Array)

uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (due to the offset of the constructed Uint8Array)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
