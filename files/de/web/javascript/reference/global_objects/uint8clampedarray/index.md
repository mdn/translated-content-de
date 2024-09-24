---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Uint8ClampedArray`** getypte Array repräsentiert ein Array von 8-Bit-Integern ohne Vorzeichen, die auf 0–255 begrenzt sind. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden ausdrücklich Initialisierungsdaten bereitgestellt. Nach der Erstellung können Sie auf die Elemente im Array mithilfe der Methoden des Objekts oder mit der Standard-Syntax für Array-Indizes (d.h., unter Verwendung der Klammernotation) zugreifen.

`Uint8ClampedArray` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray()")}}
  - : Erstellt ein neues `Uint8ClampedArray` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von der übergeordneten {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `1` im Fall von `Uint8ClampedArray`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von der übergeordneten {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Uint8ClampedArray.prototype` definiert und werden von allen `Uint8ClampedArray` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `1` im Fall eines `Uint8ClampedArray`.
- {{jsxref("Object/constructor", "Uint8ClampedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint8ClampedArray` Instanzen ist der Anfangswert der {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von der übergeordneten {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Methoden, um ein Uint8ClampedArray zu erstellen

```js
// Aus einer Länge
const uint8c = new Uint8ClampedArray(2);
uint8c[0] = 42;
uint8c[1] = 1337;
console.log(uint8c[0]); // 42
console.log(uint8c[1]); // 255 (begrenzt)
console.log(uint8c.length); // 2
console.log(uint8c.BYTES_PER_ELEMENT); // 1

// Aus einem Array
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// Aus einem anderen TypedArray
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// Aus einem ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// Aus einem iterierbaren Objekt
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
- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
