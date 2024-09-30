---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Uint8ClampedArray`** Typ-Array repräsentiert ein Array von 8-Bit-Ganzzahlen ohne Vorzeichen, die auf den Bereich 0–255 begrenzt sind. Die Inhalte sind auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Sobald das Array erstellt ist, können Sie auf die Elemente entweder über die Methoden des Objekts oder mit der standardmäßigen Array-Index-Syntax (d. h. mit Klammernotation) zugreifen.

`Uint8ClampedArray` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray()")}}
  - : Erstellt ein neues `Uint8ClampedArray` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `1` im Fall von `Uint8ClampedArray`.

## Statische Methoden

_Erbt statische Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Uint8ClampedArray.prototype` definiert und werden von allen `Uint8ClampedArray` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `1` im Fall eines `Uint8ClampedArray`.
- {{jsxref("Object/constructor", "Uint8ClampedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint8ClampedArray` Instanzen ist der Anfangswert der {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Möglichkeiten zur Erstellung eines Uint8ClampedArray

```js
// From a length
const uint8c = new Uint8ClampedArray(2);
uint8c[0] = 42;
uint8c[1] = 1337;
console.log(uint8c[0]); // 42
console.log(uint8c[1]); // 255 (clamped)
console.log(uint8c.length); // 2
console.log(uint8c.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8cFromIterable = new Uint8ClampedArray(iterable);
console.log(uint8cFromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint8ClampedArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-Typ-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
