---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Uint8Array`** typisierte Array stellt ein Array von 8-Bit-Ganzzahlen ohne Vorzeichen dar. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Nachdem das Array erstellt wurde, können Sie auf die Elemente des Arrays mit den Methoden des Objekts oder mit der Standard-Array-Index-Syntax (d. h. Klammernotation) zugreifen.

`Uint8Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Uint8Array/Uint8Array", "Uint8Array()")}}
  - : Erstellt ein neues `Uint8Array` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Elementgröße zurück. `1` im Fall von `Uint8Array`.

## Statische Methoden

_Erbt statische Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Uint8Array.prototype` definiert und werden von allen `Uint8Array` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Elementgröße zurück. `1` im Fall eines `Uint8Array`.
- {{jsxref("Object/constructor", "Uint8Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint8Array` Instanzen ist der Anfangswert der {{jsxref("Uint8Array/Uint8Array", "Uint8Array")}} Konstruktor.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Möglichkeiten zur Erstellung eines Uint8Array

```js
// Von einer Länge
const uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// Von einem Array
const x = new Uint8Array([21, 31]);
console.log(x[1]); // 31

// Von einem anderen TypedArray
const y = new Uint8Array(x);
console.log(y[0]); // 21

// Von einem ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// Von einem Iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8FromIterable = new Uint8Array(iterable);
console.log(uint8FromIterable);
// Uint8Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint8Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
